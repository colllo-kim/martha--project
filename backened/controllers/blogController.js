import sql from "../config/db.js";

//save user to databse
// Save user to database
const saveUser = async (req, res) => {
  const {id,  email, full_name } = req.body;
  
  try {
    // 1. Check if user already exists
    const existingUser = await sql`
      SELECT * FROM users WHERE id = ${id}
    `;

    if (existingUser.length > 0) {
      return res.status(200).json({ message: "User already exists." });
    }

    // 2. Insert new user
    await sql`
      INSERT INTO users (
        id, email, full_name, created_at, updated_at
      ) VALUES (
        ${id}, ${email}, ${full_name}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
      )
    `;

    res.status(201).json({ message: "User saved!" });
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json({ error: "Failed to save user." });
  }
};

//get stats
const getStatistics = async (req, res) => {
  try {
    const [{ count: userCount = 0 }] = await sql`
      SELECT COUNT(*)::int AS count FROM users
    `;

    const [{ count: postCount = 0 }] = await sql`
      SELECT COUNT(*)::int AS count FROM blog_posts
    `;

    const [{ count: projectCount = 0 }] = await sql`
      SELECT COUNT(*)::int AS count FROM blog_posts WHERE is_project = true
    `;

    res.status(200).json({
      totalUsers: userCount,
      totalPosts: postCount,
      totalProjects: projectCount,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ error: "Failed to fetch stats" });
  }
};



const addBlog = async (req, res) => {
  try {
    const { title, author, post_date, excerpt, is_project } = req.body;
    const image = req.file ? req.file.filename : null;
    let tags = req.body.tags;

    console.log("📥 Raw tags from req.body.tags:", tags);

    // Parse the tags if it's a JSON string
    if (typeof tags === 'string') {
      try {
        tags = JSON.parse(tags);
        console.log("✅ Parsed tags array:", tags);
      } catch (parseError) {
        console.error("❌ Failed to parse tags string:", parseError);
        tags = [];
      }
    }

    // Make sure it's an array
    if (!Array.isArray(tags)) {
      tags = [tags];
    }

    console.log("🚀 Final tags to insert:", tags);
    console.log("📌 is_project value:", is_project);

    await sql`
      INSERT INTO blog_posts (
        title, author, post_date, tags, image, excerpt, is_project, created_at, updated_at
      ) VALUES (
        ${title}, ${author}, ${post_date}, ${tags}, ${image}, ${excerpt}, ${is_project || false}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
      )
    `;

    res.status(201).json({ message: "✅ Blog post added successfully." });
  } catch (err) {
    console.error("❌ Blog insert failed:", err);
    res.status(500).json({ error: "Server error while adding blog post." });
  }
};








// Get a single blog post by ID
const getBlog = async (req, res) => {
  const { blogId } = req.params;

  try {
    // Use parameterized query to avoid SQL injection
    const result = await sql`SELECT * FROM blog_posts WHERE id = ${blogId}`;

    if (result.length === 0) {
      return res.status(404).json({ error: "Blog not found." });
    }

    const blog = result[0];

    // Ensure tags is always an array
    blog.tags = Array.isArray(blog.tags) ? blog.tags : [];

    res.json(blog);
  } catch (error) {
    console.error('Error fetching single blog:', error);
    res.status(500).json({ error: "Failed to retrieve blog post." });
  }
};


/// Get all blog posts
// Get all blog posts
const getBlogs = async (req, res) => {
  try {
    const blogs = await sql`SELECT * FROM blog_posts ORDER BY post_date DESC`;

    const parsedBlogs = blogs.map(blog => {
      return {
        ...blog,
        tags: Array.isArray(blog.tags) ? blog.tags : [], // ensure tags is always an array
      };
    });

    res.json({ blogs: parsedBlogs });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Failed to retrieve blog posts. Try again.' });
  }
};




// Update an existing blog post
const updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, author, post_date, excerpt, isproject } = req.body; // ✅ Added isproject
    const image = req.file ? req.file.filename : null;
    let tags = req.body.tags;

    console.log("📥 Raw tags from req.body.tags:", tags);

    // Parse the tags if it's a JSON string
    if (typeof tags === 'string') {
      try {
        tags = JSON.parse(tags);
        console.log("✅ Parsed tags array:", tags);
      } catch (parseError) {
        console.error("❌ Failed to parse tags string:", parseError);
        tags = [];
      }
    }

    if (!Array.isArray(tags)) {
      tags = [tags];
    }

    console.log("🚀 Final tags to update:", tags);

    await sql`
      UPDATE blog_posts
      SET title = ${title},
          author = ${author},
          post_date = ${post_date},
          tags = ${tags},
          image = ${image},
          excerpt = ${excerpt},
          isproject = ${isproject}, -- ✅ Updating isproject
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ${id}
    `;

    res.status(200).json({ message: "✅ Blog post updated successfully." });
  } catch (err) {
    console.error("❌ Blog update failed:", err);
    res.status(500).json({ error: "Server error while updating blog post." });
  }
};



// Delete a blog post
const deleteBlog = async (req, res) => {
  const { blogId } = req.params;
  try {
    await sql`DELETE FROM blog_posts WHERE id = ${blogId}`;
    res.json({ message: "Blog post deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete blog post." });
  }
};

 const getAnalyticsData = async (req, res) => {
  try {
    const result = await sql`
      SELECT
        to_char(month_start, 'Mon') AS month,
        EXTRACT(MONTH FROM month_start) AS month_number,
        COUNT(u.id) AS users
      FROM generate_series(
        date_trunc('month', NOW()) - interval '5 months',
        date_trunc('month', NOW()),
        interval '1 month'
      ) AS m(month_start)
      LEFT JOIN users u
        ON date_trunc('month', u.created_at) = m.month_start
      GROUP BY month, month_number
      ORDER BY month_number;
    `;

    const data = result.map(({ month, users }) => ({
      month,
      users: Number(users),
    }));

    res.json(data);
  } catch (error) {
    console.error("Error fetching analytics:", error);
    res.status(500).json({ error: "Failed to fetch analytics data" });
  }
};




export {saveUser,getStatistics, getAnalyticsData, addBlog, getBlog, getBlogs, updateBlog, deleteBlog };


import React, { createContext, useEffect, useState } from 'react';
import { useUser, SignIn } from '@clerk/clerk-react';
import school from '@/assets/school.png';
import water from '@/assets/water.png';
import communtytree from '@/assets/com-tree.png';
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [stats, setStats] = useState({ totalUsers: 0, totalPosts: 0, totalProjects:0 });
  const [analyticsData, setAnalyticsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const API_URL = import.meta.env.VITE_API_URL;

  const { getToken } = useAuth();
    
  const dummyPosts = [
    {
      id: 1,
      title: "How Tree Planting is Reviving the Cherangany Ecosystem",
      author: "Martha",
      date: "July 5, 2025",
      tags: ["Environment", "Forestry"],
      image: communtytree,
      excerpt:
        "Explore how our tree planting initiatives have improved biodiversity, reduced erosion, and brought hope to communities.",
    },
    {
      id: 2,
      title: "Protecting Springs: Lifelines for Kamendi",
      author: "Martha",
      date: "June 22, 2025",
      tags: ["Water", "Conservation"],
      image: water,
      excerpt:
        "A closer look into the science and community collaboration behind spring protection and water access in our region.",
    },
    {
      id: 3,
      title: "What Schools Can Do to Fight Climate Change",
      author: "Environmental Club",
      date: "June 10, 2025",
      tags: ["Education", "Climate Action"],
      image: school,
      excerpt:
        "From tree nurseries to waste management clubs, schools are stepping up for a greener tomorrow.",
    },
  ];

  useEffect(() => {
  
     saveUser();
     fetchPosts();
      fetchStats();
     fetchAnalytics();
    
  }, []);
    
   //SAVING THE USER
  const saveUser = async () => {
       const token = await getToken();
          const API_URL = import.meta.env.VITE_API_URL;
    try {
    
      const formData = new FormData();
      formData.append("id", user.id);
      formData.append("email", user.emailAddresses[0].emailAddress );
      formData.append("name", user.fullName )
      await axios.post(`${API_URL}/save-user`, formData,{
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      } );
    } catch (error) {
      console.error("Failed to save user:", error);
    }
  };
// FETCHING STATISTICS
const fetchStats = async () => { 
  try {
    const token = await getToken();
    const API_URL = import.meta.env.VITE_API_URL;

    const res = await axios.get(`${API_URL}/blogs/stats`, {
      // Uncomment if your endpoint requires auth
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    });

    setStats(res.data);
  } catch (error) {
    console.error("Failed to fetch stats:", error);
  }
};

const fetchPosts = async () => {

  const API_URL = import.meta.env.VITE_API_URL;

  try {
    setLoading(true);

    const res = await axios.get(`${API_URL}/blogs/blog-items`);
    const blogList = res.data.blogs; // 👈 Extract the actual array

    if (Array.isArray(blogList) && blogList.length > 0) {
      setPosts(blogList);
    } else {
      setPosts(dummyPosts);
    }
  } catch (error) {
    console.log("Fetch error:", error);
    alert("Error fetching posts. Showing dummy data.");
    setPosts(dummyPosts);
  } finally {
    setLoading(false);
  }
};



  //FETCHING ANALYTICS
   const fetchAnalytics = async () => {
  
       
        try {
          setLoading(true);
        
          const res = await axios.get(`${API_URL}/blogs/analytics`);
          setAnalyticsData(res.data);
          console.log(analyticsData)
        } catch (err) {
          console.error("Error fetching analytics data:", err);
          setError("Failed to load analytics data.");
        } finally {
          setLoading(false);
        }
      };

  const value = {
    user,
    SignIn,
    posts,
    loading,
    analyticsData,
    error,
    stats,
    setPosts
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

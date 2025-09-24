import { clerkClient } from "@clerk/express";

export const auth = async (req, res, next) => {
  try {
    const {userId} = await req.auth()
     // Log this for debugging

    

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized: No user ID found.' });
    }

    const user = await clerkClient.users.getUser(userId);

    if (!user) {
      return res.status(404).json({ message: 'Unauthorized: User not found.' });
    }

    req.info = user;
    next();
  } catch (error) {
    console.error('Auth Error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

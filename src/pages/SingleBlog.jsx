import { Button } from '@/components/ui/button'
import { AppContext } from '@/context/AppContext';
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function SingleBlog() {
  const {currentUser} = useContext(AppContext);
  const token = currentUser.token;
  const navigate = useNavigate();
useEffect(() =>{
 if(!token){
  navigate('/login')
 }
},[currentUser])
  return (
    <div>
      
    <Button variant="outline">hello</Button>


    </div>
  )
}

export default SingleBlog
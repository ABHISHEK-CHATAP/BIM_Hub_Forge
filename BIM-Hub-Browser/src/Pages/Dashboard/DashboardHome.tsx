import React from 'react'
import axios from 'axios'
import { useAuth } from '../../context/AuthContext';
const DashboardHome = () => {
  const auth = useAuth()
  React.useEffect(()=>{
// Function to fetch user profile details from the API
const fetchToken = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/auth/token');
    const data = await response.data;
    // console.log(response);
    console.log(auth,"auth");
    

  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
};

fetchToken();
  },[])
  return (
    <div>DashboardHome</div>
  )
}

export default DashboardHome
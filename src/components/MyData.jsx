import React, { useEffect, useState } from 'react';
import useAxios from "../utils/useAxios";
import Loader from './Loader'

const MyData = () => {
  const [profile, setProfile] = useState(null); // State to hold profile data
  const api = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/profile/");
        const { fullname, bio } = response.data; // Assuming your API response contains 'fullname' and 'bio' properties
        setProfile({ fullname, bio}); // Set profile data in state
      } catch (error) {
        console.log(error);
        setProfile({ fullname: "Something went wrong", bio: "" }); // Update state with error message
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ width: '100%', padding: '20px', backgroundColor: '#1f1f1f', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', color: '#fff' }}>
      {profile ? ( // Conditional rendering based on profile data
        <>
          <p style={{ marginBottom: '10px', fontSize: '18px', fontWeight: 'bold', color: 'red' }}>Full Name:</p>
          <p style={{ marginBottom: '20px', fontSize: '24px' }}>{profile.fullname}</p>
          <p style={{ marginBottom: '10px', fontSize: '18px', fontWeight: 'bold', color: 'red' }}>Bio:</p>
          <p style={{ marginBottom: '20px', fontSize: '18px' }}>{profile.bio}</p>
        </>
      ) : (
        <Loader/> // Show loading message while fetching data
      )}
    </div>
  );
};

export default MyData;

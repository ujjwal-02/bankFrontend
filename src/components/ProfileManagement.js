

import React, { useState, useEffect } from 'react';
import './ProfileManagement.css'; // Import your CSS file
import axios from 'axios'; // Import Axios library
import { bgcolor } from '@mui/system';

const ProfileManagement = () => {
  const [userData, setUserData] = useState({
    userId: '',
    userName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    // Enable editing mode
    setIsEditing(true);
  };

  const handleSaveChangesClick = async () => {
    try {
      const token = localStorage.getItem("jwttoken");
      const response = await axios.put(`http://localhost:9001/user/updateuser/${localStorage.getItem('userId')}`, userData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status >=200 && response.status ) {
        // Update successful, disable editing mode
        setIsEditing(false);
        alert('Profile updated successfully!');
      } else {
        alert('Failed to update profile. Please try again later.');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('An error occurred while updating profile. Please try again later.');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("jwttoken");
  
    axios.get(
      `http://localhost:9001/user/getuserdetails/${localStorage.getItem('userId')}`,
      {
        headers: { "Authorization": `Bearer ${token}` },
      }
    )
      .then((response) => {
        console.log("Response:", response); // Log the response
        if (response.status >= 200 && response.status < 300) {
          setUserData(response.data);
        } else {
          alert('Failed to fetch user data. Please try again later.');
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        alert('An error occurred while fetching user data. Please try again later.');
      });
  }, []);
  

  return (
    <div className="profile-container" >
      <h2>Profile Management</h2>
      <div className="profile-input" >
        <label>Name:</label>
        {isEditing ? (
          <input
            type="text"
            value={userData.userName}
            onChange={(e) => setUserData({ ...userData, userName: e.target.value })}
          />
        ) : (
          <span>{userData.userName}</span>
        )}
      </div>
      <div className="profile-input">
        <label>Email:</label>
        {isEditing ? (
          <input
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
        ) : (
          <span>{userData.email}</span>
        )}
      </div>
      <div className="profile-input">
        <label>Phone Number:</label>
        {isEditing ? (
          <input
            type="tel"
            value={userData.phoneNumber}
            onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })}
          />
        ) : (
          <span>{userData.phoneNumber}</span>
        )}
      </div>
      <div className="profile-input">
        <label>Password:</label>
        {isEditing ? (
          <input
            type="password"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
        ) : (
          <span>{userData.password}</span>
        )}
      </div>
      <div className="profile-actions">
        {isEditing ? (
          <button className="profile-save" onClick={handleSaveChangesClick}>
            Save Changes
          </button>
        ) : (
          <button className="profile-edit" onClick={handleEditClick}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileManagement;


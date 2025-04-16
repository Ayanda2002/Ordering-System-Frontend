// UploadButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import { getAccessToken } from '../tokenManagement/tokenManager'; // Import to check login status

const UploadButton = () => {
  const isLoggedIn = !!getAccessToken(); // Check if user is logged in

  if (!isLoggedIn) {
    return null; // Don't render if not logged in
  }

  return (
    <div className="section">
      <Link to="/upload-product">Upload Products</Link>
    </div>
  );
};

export default UploadButton;

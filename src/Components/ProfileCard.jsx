

import React from 'react';

const ProfileCard = ({ profile }) => {
  const { name, image, description } = profile;

  return (
    <div className="profile-card">
      <img  src={image} alt={name} className="profile-image"/>
      <div className="profile-details">
        <h2 style={{marginBottom:'10px'}}className="profile-name">{name}</h2>
        <p className="profile-description">{description}</p>

      </div>
    </div>
  );
};

export default ProfileCard;


import './App.css';
import React from 'react';
import ProfileCard from './Components/ProfileCard';
import Map from './Components/Map';
import { auto } from 'openai/_shims/registry.mjs';

const App = () => {
 
  const profiles = [
    {
      id: 1,
      name: 'Karan Dhumal',
      image:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quasi distinctio harum autem? Veritatis assumenda inventore placeat asperiores? At debitis incidunt inventore nemo voluptas, quam quod eligendi officiis vitae aliquam quos reprehenderit mollitia aliquid lorem tio harum autem? Veritatis assumenda inventore placeat asperiores? At debitis incidunt inventore nemo voluptas, quam quod eligendi officiis vitae aliquam quos reprehenderit mollitia aliquid lorem',
      location: {
        latitude: 	14.167040,
        longitude: 75.040298,
        address: 'Sagar, Karnataka, India',
        	
      }
    },
    {
      id: 2,
      name: 'Preeti ',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor incididunt ut labore et dolore magna aliqu John is a passionate and driven individual with a diverse set of interests and experiences. With a background in engineering, he has honed his problem-solving skills and attention to detail, which he applies to both his professional and personal pursuits. In his free time, John is an avid outdoor enthusiast, enjoying activities like hiking, rock climbing, and kayaking.He also has a deep appreciation for the arts, often spending his evenings exploring local galleries and attending live music performances. Johns infectious energy and genuine curiosity make him a valuable asset to any team or community he is a part of. He is always eager to learn and grow, constantly seeking new challenges to tackle',
      location: {
        latitude:19.076090,
        longitude: 72.877426,
        address: ' Mumbai, Maharashtra, India',
       		
      }
    },
    {
      id: 3,
      name: 'Najim Attar',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqu John is a passionate and driven individual with a diverse set of interests and experiences. With a background in engineering, he has honed his problem-solving skills and attention to detail, which he applies to both his professional and personal pursuits. In his free time, John is an avid outdoor enthusiast, enjoying activities like hiking, rock climbing, and kayaking.He also has a deep appreciation for the arts, often spending his evenings exploring local galleries and attending live music performances. Johns infectious energy and genuine curiosity make him a valuable asset to any team or community he is a part of. He is always eager to learn and grow, constantly seeking new challenges to tackle',
      location: {
        latitude: 28.679079,
        longitude: 77.069710,
        address: 'Delhi, India',
        
      }
    },
    {
      id: 4,
      name: 'Hritik Rasal',
      image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww',
      description:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqu John is a passionate and driven individual with a diverse set of interests and experiences. With a background in engineering, he has honed his problem-solving skills and attention to detail, which he applies to both his professional and personal pursuits. In his free time, John is an avid outdoor enthusiast, enjoying activities like hiking, rock climbing, and kayaking.He also has a deep appreciation for the arts, often spending his evenings exploring local galleries and attending live music performances. John's infectious energy and genuine curiosity make him a valuable asset to any team or community he is a part of. He is always eager to learn and grow, constantly seeking new challenges to tackle",
      location: {
        latitude: 26.850000,
        longitude: 80.949997,
        address: 'Lucknow, Uttar Pradesh,',
         		
      }
    }
    
  ];
  const [selectedProfile, setSelectedProfile] = React.useState(null);

  // 
  return (
    <div className="app">
      <h1>Profilerr</h1>
      <div className="profile-list">
        {profiles.map(profile => (
          <div key={profile.id}>
            <ProfileCard profile={profile} />
            <button style={{margin:'auto',display:'flex',justifyContent:"center",marginBottom:'12px'}} onClick={() => setSelectedProfile(profile)}>Summary</button>
          </div>
        ))}
      </div>
      {selectedProfile && <Map profile={selectedProfile} />}
    </div>
  );
};

export default App;

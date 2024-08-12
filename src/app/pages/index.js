// src/pages/index.js
import Image from 'next/image';
import profilePic from '../public/profile.jpg'; // Reference to the image

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <Image src={profilePic} alt="Profile Picture" width={150} height={150} />
    </div>
  );
};

export default Home;

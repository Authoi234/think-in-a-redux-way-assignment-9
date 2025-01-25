import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Tasks from '../components/Tasks/Tasks';

const Home = () => {
  return (
    <div className="container relative">
      <Sidebar />

      <Tasks />
    </div>
  );
};

export default Home;
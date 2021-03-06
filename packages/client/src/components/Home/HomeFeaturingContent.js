import React, { useState } from 'react';
import banner from '../../assets/home_content_banner.svg';
import ProjectDetail from '../ProjectDetails/ProjectDetail';

const HomeFeaturingContent = ({ projects }) => {
  const [tokenCount, setTokenCount] = useState('');
  const latestProject = projects[projects.length - 1];

  return (
    <div className="flex flex-col justify-between">
      <img src={banner} />
      <ProjectDetail project={{ ...latestProject }} />
    </div>
  );
};

export default HomeFeaturingContent;

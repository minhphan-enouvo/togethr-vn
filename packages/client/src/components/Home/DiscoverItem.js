import React, { useEffect, useState } from 'react';
import { Progress } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { getRemainingTokenCount } from '../../flow/flow';

const DiscoverItem = ({ project }) => {
  const history = useHistory();
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const fetchRemainningTokenCount = async () => {
      try {
        const remainningToken = await getRemainingTokenCount(Number(project.projectId));
        console.log('remainningToken', remainningToken);
        const newPercent = ((project.tokenCount - remainningToken) / project.tokenCount) * 100;
        setPercent(newPercent);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRemainningTokenCount();
  }, []);

  const redirectToProjectDetail = () => {
    history.push(`/projects/${project.projectId}`);
  };

  return (
    <div className="justify-center" onClick={redirectToProjectDetail}>
      <div className="relative discover-image">
        <img src={project?.imageURL} className="m-0 object-cover w-full h-64 rounded-lg" style={{ height: '20rem' }} />
        <span className="discover-category-span border-gray-700 border-1 px-2 py-1 text-white bg-purple-1000 font-bold rounded-md">
          {project?.projectCategory}
        </span>
      </div>
      <h2 className="text-xl font-bold mt-1">{project?.projectName}</h2>
      <div>
        <span className="text-lg font-bold">{Number(project?.tokenPrice ?? 0).toFixed(2) + ' '} </span>
        <span className="text-lg text-gray-600">FLOW</span>
      </div>
      <Progress percent={percent} strokeColor="#00C48C" showInfo={false} />
    </div>
  );
};

export default DiscoverItem;

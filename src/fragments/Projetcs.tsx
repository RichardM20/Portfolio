import React from 'react';

import { GenericProps } from '../constants/genericInterfaces';

const Projects: React.FC<GenericProps> = ({ id }) => {
  return <div>{id}</div>;
};

export default Projects;


import React from 'react';
import PropTypes from 'prop-types';
import './project-card.css';

const ProjectCard = ({ children, className }) => {
  return (
    <div className={`project-card shadow ${className || ''}`}>
      {children}
    </div>
  );
};

ProjectCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default ProjectCard;

import PropTypes from 'prop-types';
import React from 'react';
import { Box } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Box>
      <h2>{title}</h2>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

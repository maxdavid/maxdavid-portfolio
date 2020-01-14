import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const Link = props => {
  return /^https?:\/\//.test(props.to) ? (
    <a href={props.to} rel='noopener noreferred' target='_blank' {...props} />
  ) : (
    <RouterLink {...props} />
  );
};

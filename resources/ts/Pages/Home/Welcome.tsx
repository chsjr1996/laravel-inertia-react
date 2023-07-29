import React from 'react';
import { Typography } from '@Component/Typography';

export default function Welcome(props) {
  return (
    <div>
      <Typography>Hello from Welcome Inertia screen</Typography>
      <small>Laravel version {props.laravel_version}</small>
    </div>
  );
}

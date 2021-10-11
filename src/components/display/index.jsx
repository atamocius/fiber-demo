import classes from './index.module.css';

import React from 'react';

export default function Display({ children }) {
  return (
    <div className={classes.root}>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

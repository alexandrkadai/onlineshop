import React from 'react';
import classes from './Button.module.scss';
type Props = {
  
};

const Button = (props: Props) => {
  return <button className={classes.button}>Add To Cart</button>;
};

export default Button;

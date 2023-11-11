import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

type Props = {};

const Header = ({}: Props) => {
  return (
    <nav className={classes.mainNav}>
      <ul className={classes.headList}>
        <li>
          <Link to="">Shop</Link>
        </li>
        <li>
          <Link to="">Look</Link>
        </li>
        <li>
          <Link to="">Support</Link>
        </li>
        <li>
          <Link to="">Communication</Link>
        </li>
      </ul>
      <ul className={classes.wrapLogo}></ul>
    </nav>
  );
};

export default Header;

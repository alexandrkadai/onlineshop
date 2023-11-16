import { Link } from 'react-router-dom';
import Cart from './Cart';
import logo from '../assets/logo.webp';
import classes from './Header.module.css';

type Props = {};

const Header = ({}: Props) => {
  return (
    <>
      <nav className={classes.mainNav}>
        <ul className={classes.headList}>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/look">Look</Link>
          </li>
          <li>
            <Link to="/about">Support</Link>
          </li>
          <li>
            <Link to="/contact">Communication</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.cartWrap}>
        <img className={classes.logoImg} src={logo} alt="logo" />
        <Cart />
      </div>
    </>
  );
};

export default Header;

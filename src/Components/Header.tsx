import { Link } from 'react-router-dom';
import Cart from './Cart';
import logo from '../assets/logo.webp';
import classes from './Header.module.css';

type Props = {
  toggleCart: () => void;
};

const Header = ({ toggleCart }: Props) => {
  
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
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Communication</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.cartWrap}>
        <Link to="/">
          <img className={classes.logoImg} src={logo} alt="logo" />
        </Link>
        <Cart toggleCart={toggleCart} />
      </div>
    </>
  );
};

export default Header;

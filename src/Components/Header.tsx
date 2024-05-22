import { Link } from 'react-router-dom';
import Cart from './Cart';
import logo from '../assets/logo.webp';
import classes from './Header.module.css';
import corner from '../assets/corner.svg';
import contacts from '../assets/contacts.png';

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
      
        <img  className={classes.cornerPointer} src={contacts} alt="contacts" />
      <img  className={classes.corner} src={corner} alt="paper corner" />
    </>
  );
};

export default Header;

import { Link } from 'react-router-dom';
import Cart from './Cart';
import logo from '../assets/logo.png';
import classes from './Header.module.scss';
import corner from '../assets/corner.svg';


type Props = {
  toggleCart: () => void;
};

const Header = ({ toggleCart }: Props) => {
  return (
    <>
    
      <div className={classes.cartWrap}>
        <Link to="/">
          <img className={classes.logoImg} src={logo} alt="logo" />
        </Link>

        <nav className={classes.mainNav}>
        <ul className={classes.headList}>
          <li>
            <Link to="/">Магазин</Link>
          </li>
          <li>
            <Link to="/look">Лукбук</Link>
          </li>
          
          <li>
            <Link to="/contact">Контакти</Link>
          </li>
        </ul>
      </nav>
        <Cart toggleCart={toggleCart} />
       
      </div>
      
      <img  className={classes.corner} src={corner} alt="paper corner" />
    </>
  );
};

export default Header;

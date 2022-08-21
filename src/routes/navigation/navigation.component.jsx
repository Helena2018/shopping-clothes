import { Fragment, useContext } from 'react'

import { UserContext } from '../../contexts/user.context';

import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import './navigation.style.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser); 

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrownLogo className='logo'/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
              <span className='nav-link'>SIGN OUT</span>
            ) : (
              <Link className='nav-link' to='/auth'>
                SIGN IN
              </Link>
          )}
          
        </div>
      </div>
      <Outlet />
      </Fragment>
  );
};

export default Navigation;
import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import './Header.scss';

const Header = ({ pages = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='header'>
      <div className='header__content'>
        <NavLink className='header__logo' to='/'>
          <svg xmlns="http://www.w3.org/2000/svg"><g id="srf-logo" fill="none" fillRule="evenodd"><path fill="#AF001D" d="M0 32h48V0H0z"/><g fill="#FFFFFF"><path d="M5.891 21.108l-.282 1.811c-.047.354.118.495.423.542.683.094 2.401.211 4.07.211 3.743 0 6.472-1.223 6.472-4.705 0-2.048-.894-3.577-4-4.377l-1.741-.447c-1.176-.306-1.718-.682-1.718-1.553 0-1.223 1.13-1.458 2.211-1.458 1.46 0 2.942.117 3.53.164.612.047.776-.024.87-.541l.284-1.765c.047-.353-.119-.494-.424-.54-.683-.095-2.189-.213-4.095-.213-3.883 0-5.764 1.694-5.764 4.377 0 2.423 1.317 3.859 3.6 4.446l1.741.448c1.435.377 2.047.8 2.047 1.694 0 1.317-.894 1.553-3.06 1.553-.987 0-2.704-.141-3.292-.188-.613-.048-.777.023-.872.54M36.246 14.52v-3.2h6.165c.47 0 .612-.166.612-.636V9.037c0-.47-.141-.635-.612-.635h-8.942c-.47 0-.612.164-.612.635v13.86c0 .47.142.635.612.635h2.165c.47 0 .612-.165.612-.636v-5.459h5.6c.47 0 .612-.164.612-.635v-1.647c0-.47-.142-.635-.612-.635h-5.6zM24.092 15.72l-.236.988c-.07.282-.094.423-.094.517 0 .236.07.424.236.706l2.8 5.036c.235.4.423.565.988.565h2.565c.329 0 .73-.212.353-.8l-3.436-5.695c1.153-.73 2.448-1.765 2.448-4.047 0-2.941-1.648-4.588-5.271-4.588h-5.248c-.471 0-.612.164-.612.635v13.86c0 .47.141.635.612.635h2.165c.47 0 .612-.165.612-.636V11.201h2.235c1.412 0 2.094.519 2.094 1.836 0 1.2-.54 1.577-1.082 1.812-.682.282-.918-.024-1.13.87"/></g></g></svg>
        </NavLink>
        <ul className='header__list'>
          {pages.map(page => <li key={page.id}>
            <NavLink to={`/page/${page.id}`}
              className='header__link'
              activeClassName='header__link--active'
            >
              {page.title}
            </NavLink>
          </li>)}

          <li className='header__menu-button-container'>
            <HamburgerButton
              onClick={() => setOpen(!open)}
              active={open}
            />
          </li>
        </ul>
      </div>
      {open && (
        <div className='header__menu'>
          <div className='header__menu-content'>
            <p>hoi!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

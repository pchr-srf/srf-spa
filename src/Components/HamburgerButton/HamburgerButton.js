import classNames from 'classnames';
import React from 'react';
import './HamburgerButton.scss';

const HamburgerButton = ({
  onClick = () => {},
  active = false
}) => (
  <button className={classNames('hamburger-button', {
    'hamburger-button--active': active
  })} onClick={onClick}>
    <span className='hamburger-button__bar'></span>
    <span className='hamburger-button__bar'></span>
    <span className='hamburger-button__bar'></span>
  </button>
);

export default HamburgerButton;

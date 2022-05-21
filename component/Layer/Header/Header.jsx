/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

import Link from 'next/link';
import { LinkBoard } from './components/LinkBoard';
import { Icon } from '../../Icon/Icon';

import classNames from 'classnames';
import styles from './Header.module.sass';

export const Header = ({ type }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev)
  }

  const toggleDropdown = () => {
    setOpenDropdown((prev) => !prev)
  }

  const linkClass = classNames(styles.link, {
    [styles.youtube_link]: type === 'youtube',
    [styles.twitter_link]: type === 'twitter',
    [styles.facebook_link]: type === 'facebook',
    [styles.spotify_link]: type === 'spotify',
    [styles.vk_link]: type === 'vk',
    [styles.tiktok_link]: type === 'tiktok',
    [styles.instagram_link]: type === 'instagram',
  })

  const containerClass = classNames(styles.container, {
    [styles.container_active]: openMenu,
  })

  const menuClass = classNames(styles.menu_open, {
    [styles.active]: openMenu,
  })

  const buttonClass = classNames(styles.dropdown_button, {
    [styles.active]: openDropdown,
  })

  const accordionClass = classNames(styles.accordion, {
    [styles.active]: openDropdown,
  })

  return (
    <div className={containerClass} >
      <div className={styles.menu}>
        <Link href={'/'}>
          <a>
            <div className={styles.logoContainer}>
              <img src='/123.webp' alt='maketop.io' width={'100%'} />
              <p className={styles.make}>MAKE</p>
              <p className={styles.top}>TOP</p>
            </div>
          </a>
        </Link>
        <button
          className={styles.burger_menu}
          onClick={toggleMenu}
        >
          <img src={openMenu ? '/close.svg' : '/menu.svg'} alt='button' />
        </button>
      </div>

      <Link href={'/buy-instagram-likes'}>
        <a className={linkClass} >Buy Instagram Likes</a>
      </Link>

      <Link href={'/buy-instagram-followers'}>
        <a className={linkClass} >Buy Instagram Followers</a>
      </Link>

      <div className={styles.link}>
        <p style={{ height: 70, display: 'flex', alignItems: 'center' }}>
          Premium Services
          <Icon type="expandmore" className={styles.dropdown_icon} width="24px" height="24px" />
        </p>
        <div className={styles.hoverBlock}>
          <LinkBoard />
        </div>
      </div>
      <Link href={'/support'}>
        <a className={linkClass} >Contact</a>
      </Link>

      <div className={menuClass}>
        <Link href={'/buy-instagram-likes'}>
          <a className={styles.mobile_span}>Buy Instagram Likes</a>
        </Link>
        <Link href={'/buy-instagram-followers'}>
          <a className={styles.mobile_span}>Buy Instagram Followers</a>
        </Link>
        <div className={styles.mobile_span}>
          <div>
            <button
              onClick={toggleDropdown}
              className={buttonClass}
            >
              <p className={styles.mobile_span}> Premium Services</p>
              <Icon type="expandmore" className={styles.dropdown_icon} width="24px" height="24px" />
            </button>
            <div className={accordionClass}>
              {openDropdown && <LinkBoard />}
            </div>
          </div>
        </div>
        <Link href={'/support'}>
          <a className={styles.mobile_span}>Contact</a>
        </Link>
      </div>
    </div>
  );
};

import Link from 'next/link';
import { links } from '../../../../shared/consts';
import styles from './LinkBoard.module.sass';

export const LinkBoard = () => (
  <>
    {links.map((group, index) => (
      <div key={index}>
        {group.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={link.gap ? styles.link_gap : styles.link} >{link.text}</a>
            </Link>
        ))}
      </div>
    ))}
  </>
);

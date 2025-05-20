import styles from './NavLinks.module.scss';
import classNames from 'classnames';
import { NavLink } from '@remix-run/react';

function NavLinks() {
  const links = ['Work', 'About', 'Contact'];

  return (
    <nav className={classNames(styles.nav1)}>
      <ul className={classNames(styles.ul1)}>
        {links.map((link) => (
          <li key={link} className={styles.links}>
            <NavLink
              to={`/${link.toLowerCase()}`}
              className={({ isActive }) =>
                classNames(
                  'gap-2.5 text-2xl leading-7 font-["Inter",sans-serif] transition-colors',
                  isActive ? 'text-zinc-600' : 'text-stone-950 hover:text-zinc-600'
                )
              }
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;

import classNames from 'classnames';
import styles from './header.module.scss';
import NavLinks from './NavLinks';
import { NavLink } from '@remix-run/react'; // ✅ Add this import

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <header
                className={classNames(
                    'flex',
                    'justify-between',
                    'items-center',
                    'px-12',
                    'py-6',
                    'w-full',
                    styles.header1
                )}
            >
                <NavLink
  to="/"
  className={classNames(
  'hover:opacity-80',
    'transition-opacity',
    'no-underline',
    'outline-none', // Remove outline on normal state
    'focus:outline-none', // Remove outline on focus
    'focus:ring-0', // Remove focus ring
    'ring-0',
  styles.navLink
  )}
>
  <h1
    className={classNames(
      'gap-2.5',
      'p-2.5',
      'text-3xl',
      'leading-normal',
      'text-zinc-800',
      'flex items-center', // ✅ Not blue anymore
      "font-['SF_Pro_Display',sans-serif]",
      styles.header2
    )}
  >
    Bamlak W/tinsae
  </h1>
</NavLink>

                <NavLinks />
            </header>
        </div>
    );
};

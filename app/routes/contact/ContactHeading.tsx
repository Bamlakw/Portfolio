import styles from './ContactHeading.module.scss';
import classNames from 'classnames';
export function ContactHeading() {
    return <h2 className={classNames('leading-none', styles.header1)}>Contact</h2>;
}

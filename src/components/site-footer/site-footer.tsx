import classNames from 'classnames';
import styles from './site-footer.module.scss';
import InstagramLogoSvg from '../../assets/instagram-logo.svg';
import LinkedinLogoSvg from '../../assets/linkedin-logo.svg';
import XLogoSvg from '../../assets/x-logo.svg';
import { Link } from 'react-router-dom';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.details}>
                {/* ✅ Wrap the entire clickable area inside Link */}
                <Link
    to="/contact"
    className={classNames(styles.small)}
    style={{ color: 'inherit', textDecoration: 'none' }}
>
    Contact
    <br />
    <br />
</Link>

                <div className={styles.blur}>
                    Copyright © 2025 Bamlak W/tinsae.
                    <br />
                </div>
            </div>

            <div className={styles.social}>
                <a href="https://www.linkedin.com/in/bamlak-w-tinsae-99496a366/" target="_blank" rel="noopener noreferrer">
                    <img className={styles.icon} src={LinkedinLogoSvg} alt="LinkedIn" />
                </a>
                <a href="https://www.instagram.com/bamlakwtinsae/" target="_blank" rel="noopener noreferrer">
                    <img className={styles.icon} src={InstagramLogoSvg} alt="Instagram" />
                </a>
                <a href="https://x.com/Bamlakwtinsae" target="_blank" rel="noopener noreferrer">
                    <img className={styles.icon} src={XLogoSvg} alt="X / Twitter" />
                </a>
            </div>
        </div>
    );
};

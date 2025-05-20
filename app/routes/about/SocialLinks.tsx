import React from 'react';
import styles from './SocialLinks.module.scss';
import classNames from 'classnames';

interface SocialLinkProps {
    name: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ name }) => {
    return (
        <a href="#about-section" className="self-stretch my-auto text-stone-950">
            {name}
        </a>
    );
};

const SocialLinks: React.FC = () => {
    const socialPlatforms = ['LinkedIn', 'Instagram', 'Behance', 'Dribbble'];

    return (
        <footer
            className={classNames(
                'flex',
                'flex-wrap',
                'gap-10',
                'justify-between',
                'items-center',
                'mt-2.5',
                'max-w-full',
                'text-xl',
                'leading-tight',
                'whitespace-nowrap',
                'min-h-6',
                'text-stone-950',
                'w-[1360px]',
                styles.footer1
            )}
        >
            {socialPlatforms.map((platform, index) => (
                <SocialLink key={index} name={platform} />
            ))}
        </footer>
    );
};

export default SocialLinks;

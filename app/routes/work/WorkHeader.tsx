import * as React from 'react';
import styles from './WorkHeader.module.scss';
import classNames from 'classnames';

export const WorkHeader: React.FC = () => {
    return (
        <header
            className={classNames(
                'flex',
                'justify-between',
                'items-center',
                'max-sm:flex-col',
                'max-sm:gap-6',
                'max-sm:items-start',
                styles.header1
            )}
        >
            <h1
                className={classNames(
                    'text-8xl',
                    'leading-[120px]',
                    'text-stone-950',
                    'max-md:text-7xl',
                    'max-sm:text-5xl',
                    styles.header2
                )}
            >
                Work
            </h1>
            <p
                className={classNames(
                    'text-3xl',
                    'leading-9',
                    'max-w-[572px]',
                    'opacity-[0.96]',
                    'text-stone-950',
                    'max-md:text-2xl',
                    'max-sm:text-xl',
                    styles.p1
                )}
            >
                A curated collection of websites and digital experiences I have designed.
            </p>
        </header>
    );
};

import * as React from 'react';
import styles from './WorkSection.module.scss';
import classNames from 'classnames';

export const WorkSection: React.FC = () => {
    return (
        <section
            className={classNames(
                'flex',
                'flex-row',
                'gap-10',
                'justify-between',
                'w-full',
                'max-md:max-w-full',
                styles.section1
            )}
        >
            <h2
                className={classNames(
                    'overflow-hidden',
                    'self-stretch',
                    'my-auto',
                    'text-8xl',
                    'leading-tight',
                    'whitespace-nowrap',
                    'min-w-60',
                    'text-stone-950',
                    'max-md:text-4xl',
                    styles.header1
                )}
            >
                Work
            </h2>
        </section>
    );
};

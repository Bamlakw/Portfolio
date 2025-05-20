import * as React from 'react';
import styles from './MoreProjectsCTA.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom'; // 👈 import Link

export const MoreProjectsCTA: React.FC = () => {
    return (
        <Link
                            to="/work" // 👈 link here
                            className={classNames(
                                'flex',
                                'gap-6',
                                'justify-center',
                                'items-center',
                                'self-center',
                                'p-2.5',
                                'mt-32',
                                'text-4xl',
                                'max-md:mt-10',
                                styles.button,
                                
                            )}
                        >
                            <span
                                className={classNames(
                                    'self-stretch',
                                    'my-auto',
                                    'text-stone-950',
                                    styles.span1,
                                    
                                )}
                            >
                                More Projects
                            </span>
                        </Link>
    );
};

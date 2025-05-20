import React from 'react';
import styles from './velnoirGallery.module.scss';
import classNames from 'classnames';
import Png0 from '../../../src/assets/543.png';
import Png1 from '../../../src/assets/333.png';
import Png from '../../../src/assets/444.png';
import Png2 from '../../../src/assets/211.png';
import FfPng from '../../../src/assets/ff.png';

export const VelnoirGallery: React.FC = () => {
    return (
        <section
            className={classNames(
                'flex',
                'flex-col',
                'gap-8',
                'justify-center',
                'items-center',
                'w-full',
                styles.section1
            )}
        >
            <div
                className={classNames(
                    'flex',
                    'flex-col',
                    'gap-10',
                    'items-start',
                    'w-full',
                    styles.div1
                )}
            >
                <img
                    src={Png0}
                    alt="Luna Product Showcase"
                    className={classNames(
                        'w-full',
                        'h-[1773px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img1
                    )}
                />
                <img
                    src={Png1}
                    alt="Luna Brand Story"
                    className={classNames(
                        'w-full',
                        'h-[900px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img2
                    )}
                />
                <img
                    src={Png}
                    alt="Luna Brand Story"
                    className={classNames(
                        'w-full',
                        'h-[900px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img2
                    )}
                />
                <img
                    src={Png2}
                    alt="Luna Brand Story"
                    className={classNames(
                        'w-full',
                        'h-[900px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img2
                    )}
                />
                <img
                    src={FfPng}
                    alt="Luna Brand Story"
                    className={classNames(
                        'w-full',
                        'h-[900px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img2
                    )}
                />
            </div>
        </section>
    );
};

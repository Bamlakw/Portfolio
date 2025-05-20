import React from 'react';
import styles from './nuraGallery.module.scss';
import classNames from 'classnames';
import Png from '../../../src/assets/23.png';
import Frame427319153Png from '../../../src/assets/frame 427319153.png';
import Frame427319121Png from '../../../src/assets/frame 427319121.png';
import Frame4273191201Png from '../../../src/assets/frame 427319120 (1).png';
import Frame427319119Png from '../../../src/assets/frame 427319119.png';
import Frame427319118Png from '../../../src/assets/frame 427319118.png';
import Frame427319101Png from '../../../src/assets/frame 427319101.png';
import Frame427319117FfPng from '../../../src/assets/frame 427319117ff.png';

export const NuraGallery: React.FC = () => {
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
                    src={Frame427319153Png}
                    alt="Luna Product Showcase"
                    className={classNames(
                        'w-full',
                        'h-[1773px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img2
                    )}
                />
                <img
                    src={Frame427319121Png}
                    alt="Luna Brand Story"
                    className={classNames(
                        'w-full',
                        'h-[900px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img1
                    )}
                />
                <img
                    src={Frame4273191201Png}
                    alt="Luna Product Details"
                    className={classNames(
                        'w-full',
                        'h-[1014.566px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img3
                    )}
                />
                <img
                    src={Png}
                    alt="Luna Brand Values"
                    className={classNames(
                        'w-full',
                        'h-[1014.566px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img4
                    )}
                />
                <img
                    src={Frame427319117FfPng}
                    alt="Luna Collection"
                    className={classNames(
                        'w-full',
                        'h-[1014.566px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img5
                    )}
                />
                <img
                    src={Frame427319119Png}
                    alt="Luna Collection"
                    className={classNames(
                        'w-full',
                        'h-[1014.566px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img5
                    )}
                />
                <img
                    src={Frame427319118Png}
                    alt="Luna Collection"
                    className={classNames(
                        'w-full',
                        'h-[1014.566px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img5
                    )}
                />
                <img
                    src={Frame427319101Png}
                    alt="Luna Collection"
                    className={classNames(
                        'w-full',
                        'h-[1014.566px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img5
                    )}
                />
            </div>
        </section>
    );
};

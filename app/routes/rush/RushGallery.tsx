import React from 'react';
import styles from './RushGallery.module.scss';
import classNames from 'classnames';
import Frame42731911767Png from '../../../src/assets/frame 42731911767.png';
import Frame42731911856Png from '../../../src/assets/frame 42731911856.png';
import Frame42731911977Png from '../../../src/assets/frame 42731911977.png';
import Png from '../../../src/assets/2222222.png';
import Frame42731912166Png from '../../../src/assets/frame 42731912166.png';
import Frame42731912288Png from '../../../src/assets/frame 42731912288.png';
import Png0 from '../../../src/assets/1322.png';
import Desktop2777Png from '../../../src/assets/desktop - 2777.png';

export const RushGallery: React.FC = () => {
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
                    src={Frame42731911767Png}
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
                    src={Frame42731911856Png}
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
                    src={Frame42731911977Png}
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
                    src={Frame42731912166Png}
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
                    src={Frame42731912288Png}
                    alt="Luna Collection"
                    className={classNames(
                        'w-full',
                        'h-[1014.566px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img6
                    )}
                />
                <img
                    src={Png0}
                    alt="Luna Collection"
                    className={classNames(
                        'w-full',
                        'h-[1014.566px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img6
                    )}
                />
                <img
                    src={Desktop2777Png}
                    alt="Luna Collection"
                    className={classNames(
                        'w-full',
                        'h-[1014.566px]',
                        'max-lg:h-auto',
                        'object-cover',
                        styles.img6
                    )}
                />
            </div>
        </section>
    );
};

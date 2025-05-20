import React from 'react';
import styles from './LunaGallery.module.scss';
import classNames from 'classnames';
import Png0 from '../../../src/assets/7777.png';
import Png1 from '../../../src/assets/777777.png';
import Png2 from '../../../src/assets/7.png';
import Png3 from '../../../src/assets/88888.png';
import Frame427319124LllPng from '../../../src/assets/frame 427319124lll.png';

export const LunaGallery: React.FC = () => {
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
                    src={Frame427319124LllPng}
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
                    src={Png0}
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
                    src={Png1}
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
                    src={Png2}
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
                    src={Png3}
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

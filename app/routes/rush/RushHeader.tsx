import React from 'react';

import styles from './RushHeader.module.scss';
import classNames from 'classnames';

export const RushHeader: React.FC = () => {
    return (
        <header
            className={classNames(
                'flex',
                'justify-between',
                'items-start',
                'w-full',
                'max-md:flex-col',
                'max-md:gap-10',
                styles.header1
            )}
        >
            <div className={styles.div3}>
                <div>
                    <h1 className={styles.header4}>Rush – Plant-Based Energy, Redefined</h1>
                    <div className={classNames('flex', 'gap-2', 'items-center', styles.div1)}>
                        DISCIPLINES
                    </div>
                    <div className={styles.div5}>
                        <h1
                            className={classNames(
                                'text-3xl',
                                'leading-9',
                                'text-stone-950',
                                'max-md:text-2xl',
                                'max-sm:text-2xl',
                                styles.header2
                            )}
                        >
                            → Product (UX,UI)
                            <br />
                            → Brand (Evolution, Art Direction)
                            <br />
                            → Website (Design, Copywriting)
                            <br />
                            → Pitch deck (Strategy, Design, Copywriting)
                            <br />
                        </h1>
                    </div>
                    <div className={styles.div7}>
                        <div className={styles.div6}>VISIT</div>
                        <div className={styles.div5}>
                            <a
                                href="https://www.figma.com/design/UpN0KASr2mYsd97Qb49S07/Rush?node-id=1-961&t=FgoGJ6xkcd1MW2MH-0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classNames('header2', 'custom-link', styles.a1)}
                            >
                                Figma.com/Rush↗
                            </a>
                        </div>
                    </div>
                    <div className={classNames('flex', 'gap-2', 'items-center', styles.div1)}></div>
                </div>
                <div
                    className={classNames(
                        'flex',
                        'justify-end',
                        'items-center',
                        'w-[778px]',
                        'max-md:w-full',
                        styles.div2
                    )}
                >
                    <p
                        className={classNames(
                            'flex-1',
                            'text-3xl',
                            'leading-9',
                            'opacity-[0.96]',
                            'text-stone-950',
                            'max-md:text-2xl',
                            'max-sm:text-2xl',
                            styles.p1
                        )}
                    >
                        Rush is a next-gen, plant-based energy brand crafted for high-performers who
                        want clean fuel without the crash. Designed for people balancing work,
                        workouts, and everything in between, Rush delivers a smarter, smoother boost
                        through natural caffeine, nootropics, and superfoods.
                        <br />
                        <br />
                        Excited to shape a fresh identity in the wellness-meets-performance space, I
                        led the brand and web design for Rush—from defining its bold, youth-driven
                        aesthetic to building a sleek, intuitive website that mirrors the product’s
                        grab-and-go lifestyle.
                    </p>
                </div>
            </div>
        </header>
    );
};

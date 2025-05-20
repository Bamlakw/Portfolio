import React from 'react';
import styles from './velaBeautyHeader.module.scss';
import classNames from 'classnames';

export const VelaBeautyHeader: React.FC = () => {
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
                    <h1 className={styles.header4}>Canim – A Fragrance Experience</h1>
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
                                href="https://www.figma.com/design/aEkrvALqyPkCR2TkUJt0J1/Untitled?node-id=0-1&p=f&t=2Qx9R0waAH6GlJi8-0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classNames(
                                    'text-blue-600',
                                    'hover:underline',
                                    styles.a1
                                )}
                            >
                                Figma.com/Canim↗
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
                        Canim, a luxury fragrance brand, crafts timeless perfumes that blend
                        elegance with emotion—each scent telling its own story of sophistication and
                        sensuality. Designed for the modern romantic, Canim offers a curated
                        collection of fragrances that evoke memory, mood, and allure.
                        <br />
                        <br />
                        Eager to elevate this refined identity into a digital presence, I created a
                        concept website for Canim that captures its luxurious essence through soft,
                        editorial visuals and an immersive, minimalist layout. The site was designed
                        to feel like a sensory experience—delicate animations, rich imagery, and a
                        seamless path to explore and shop the collection.
                    </p>
                </div>
            </div>
        </header>
    );
};

import React from 'react';
import styles from './velnoirHeader.module.scss';
import classNames from 'classnames';

export const VelnoirHeader: React.FC = () => {
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
                    <h1 className={styles.header4}>
                        Velnoir – A Digital Wardrobe of <br />
                        Curated Brands
                    </h1>
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
                            → Product (UX, UI)
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
                                href="https://www.figma.com/design/BV2XtsPDB1t8RDzk85NcR0/Velnoir?node-id=0-1&p=f&t=8polbR7I3CHDmV2O-0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classNames(
                                    'text-blue-600',
                                    'hover:underline',
                                    styles.a1
                                )}
                            >
                                Figma.com/Velnoir↗
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
                        Velnoir, a modern fashion marketplace, curates a premium selection of
                        clothing from diverse brands, giving users a one-stop destination to shop
                        their personal style. With everything from elevated essentials to statement
                        pieces, Velnoir brings global fashion to your fingertips.
                        <br />
                        <br />
                        Excited to shape the future of digital fashion retail, I reimagined
                        Velnoir’s online presence with a clean, intuitive interface that emphasizes
                        product discovery and brand identity. From layout to micro-interactions, the
                        concept redesign is built to enhance user flow and make browsing feel like
                        flipping through a beautiful, modern lookbook.
                    </p>
                </div>
            </div>
        </header>
    );
};

import React from 'react';
import styles from './LunaHeader.module.scss';
import classNames from 'classnames';

export const LunaHeader: React.FC = () => {
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
                    <h1 className={styles.header4}>Luna Glow – A Gentle Touch for Radiant Skin</h1>
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
                            → Brand (Art Direction)
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
                                href="https://www.figma.com/design/6KbWb2cRTnCGmmSHVCI0Ra/Luna?node-id=2-694&t=2Cp8Fnwom8fay4yh-0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classNames(
                                    'text-blue-600',
                                    'hover:underline',
                                    styles.a1
                                )}
                            >
                                Figma.com/Luna↗
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
                        Luna Glow is a modern skincare brand rooted in gentle, plant-based
                        ingredients and a minimalist philosophy. Founded by Luna, the line is
                        designed to help people feel radiant and confident in their natural
                        skin—without the need for harsh chemicals or complex routines.
                        <br />
                        <br />
                        Eager to reflect the brand’s peaceful, luxurious essence, I redesigned the
                        Luna Glow website as a concept project to embody its soft, calming identity.
                        The result is a clean, intuitive interface that blends serene visuals with
                        seamless navigation, making the user feel as pampered as the skincare
                        promises to do.
                    </p>
                </div>
            </div>
        </header>
    );
};

import React from 'react';
import styles from './yumHeader.module.scss';
import classNames from 'classnames';

export const YumHeader: React.FC = () => {
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
                    <h1 className={styles.header4}>Yum – A Sweet Take on Snack Shopping</h1>
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
                            → Brand ( Art Direction)
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
                                href="https://www.figma.com/design/TujLko0x6h8HAtf88wyLgJ/Yum?node-id=5-6816&p=f&t=5V4rDEDbQQKGmz5o-0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classNames(
                                    'text-blue-600',
                                    'hover:underline',
                                    styles.a1
                                )}
                            >
                                Figma.com/yum↗
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
                        Yum, a vibrant eCommerce snack platform, makes it easy to satisfy your sweet
                        and savory cravings—from classic treats to trendy new bites—all in one
                        joyful app. With a clean layout and intuitive flow, Yum turns snack shopping
                        into a delightful experience.
                        <br />
                        <br />
                        Excited to design a space where convenience meets indulgence, I created this
                        concept project to showcase a bold, user-friendly interface for Yum. From
                        product discovery to checkout, the app delivers a smooth, scroll-worthy
                        experience that feels playful yet polished. The branding leans into fun,
                        energetic visuals while maintaining a clear structure for everyday use.
                    </p>
                </div>
            </div>
        </header>
    );
};

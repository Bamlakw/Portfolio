import React from 'react';
import styles from './nuraHeader.module.scss';
import classNames from 'classnames';

export const NuraHeader: React.FC = () => {
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
                        Nura – Concept Website Redesign | <br />
                        Personalized Audio Experience
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
                            → Website (Design)
                            <br />
                            → Pitch deck (Strategy, Design)
                            <br />
                        </h1>
                    </div>
                    <div className={styles.div7}>
                        <div className={styles.div6}>VISIT</div>
                        <div className={styles.div5}>
                            <a
                                href="https://www.figma.com/design/XzDXKrfstsVnDeZLiFqHwn/Nura?node-id=4-22815&p=f&t=8ODGnnZp3CK0cmEq-0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classNames(
                                    'text-blue-600',
                                    'hover:underline',
                                    styles.a1
                                )}
                            >
                                Figma.com/Nura↗
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
                        Nura is a cutting-edge audio tech company known for inventing headphones
                        that adapt to each user’s unique hearing profile, delivering personalized,
                        pure sound.
                        <br />
                        <br />
                        For my portfolio, I redesigned Nura’s website as a concept project to
                        showcase their innovative technology and sleek products. This concept design
                        focuses on a modern, user-friendly experience that highlights
                        personalization and immersive sound, demonstrating my skills in UI/UX and
                        brand storytelling.
                    </p>
                </div>
            </div>
        </header>
    );
};

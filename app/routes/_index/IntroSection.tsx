import * as React from 'react';
import styles from './IntroSection.module.scss';
import classNames from 'classnames';

export const IntroSection: React.FC = () => {
    return (
        <section
            className={classNames(
                'flex',
                'overflow-hidden',
                'flex-wrap',
                'gap-10',
                'justify-between',
                'w-full',
                'max-md:max-w-full',
                styles.section1
            )}
        >
            <h1
                className={classNames(
                    'flex-1',
                    'shrink',
                    'gap-2.5',
                    'self-start',
                    'text-3xl',
                    'leading-9',
                    'basis-0',
                    'min-w-60',
                    'text-stone-950',
                    'w-[548px]',
                    'max-md:max-w-full',
                    styles.header1
                )}
            >
               I’m a multidisciplinary web designer working remotely with clients around the world to build user-first websites, apps, and digital experiences. I specialize in e-commerce, wellness, and purpose-driven brands.
            </h1>
            <div
                className={classNames(
                    'text-lg',
                    'tracking-wide',
                    'leading-6',
                    'capitalize',
                    'min-w-60',
                    'text-stone-950',
                    'w-[399px]',
                    styles.div2
                )}
            >
                <div
                    className={classNames(
                        'overflow-hidden',
                        'w-full',
                        'max-w-[399px]',
                        styles.div4
                    )}
                >
                    <div className={classNames('gap-2.5', 'self-stretch', 'w-full', styles.div1)}>
                        <div className={styles.div5}>
                            <p
                                className={classNames(
                                    "font-['SF_Pro_Display']",
                                    'text-2xl',
                                    'leading-[26px]',
                                    'tracking-[0.42px]',
                                    'capitalize',
                                    'text-black',
                                    styles.p1
                                )}
                            >
                                Currently available for new projects‍
                                <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=bamlakwtinsae1@gmail.com&su=Let%27s%20Work%20Together"
  className={classNames(
    "font-['SF_Pro_Display']",
    'text-2xl',
    'leading-[26px]',
    'tracking-[0.42px]',
    'capitalize',
    'text-black',
    'underline',
    styles.a1
  )}
  target="_blank"
  rel="noopener noreferrer"
>
  <br />Send me an email ↗
</a>

                            </p>
                        </div>

                        <div className={styles.div3}>
                            <p
                                className={classNames(
                                    'self-stretch',
                                    'my-auto',
                                    'text-2xl',
                                    'tracking-wide',
                                    'leading-7',
                                    'text-black',
                                    styles.p1
                                )}
                            >
                                Services: <br /> <br /> Web/App Design <br /> Design Consulting <br />{' '}
                                UX/UI Design <br /> E-Commerce <br />
                                Branding
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

import React from 'react';
import styles from './AboutServices.module.scss';
import classNames from 'classnames';

const AboutServices: React.FC = () => {
    const services = [
        'Web & App Design',
        'Design Consulting',
        'UX/UI Design',
        'E-Commerce',
        'Branding',
    ];

    return (
        <section
            className={classNames(
                'flex',
                'flex-col',
                'w-full',
                'max-md:max-w-full',
                styles.section2
            )}
        >
            <div
                className={classNames(
                    'flex',
                    'flex-wrap',
                    'gap-10',
                    'justify-between',
                    'items-center',
                    'self-center',
                    'mt-8',
                    'max-w-full',
                    'text-2xl',
                    'w-[999px]',
                    styles.div4
                )}
            >
                <div>
                    <h2 className={classNames('leading-tight', 'text-black', styles.header1)}>
                        Things I do
                    </h2>
                    <p className={classNames('mt-6', 'leading-7', 'text-stone-500', styles.p2)}>
                        As a multidisciplinary artist, I'm capable of doing a range of creative
                        disciplines on a high level.
                    </p>
                </div>

                <ul
                    className={classNames(
                        'self-stretch',
                        'my-auto',
                        'tracking-wide',
                        'leading-none',
                        'text-black',
                        'w-[233px]',
                        styles.ul1
                    )}
                >
                    {services.map((service) => (
                        <li key={service} className={classNames('mb-2', styles.li1)}>
                            {service}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col justify-center p-2.5 mt-8 w-full max-md:max-w-full">
                <hr className="w-full border border-black border-solid min-h-px max-md:max-w-full" />
            </div>
        </section>
    );
};

export default AboutServices;

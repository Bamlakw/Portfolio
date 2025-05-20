import { LoaderFunctionArgs } from '@remix-run/node';
import { getUrlOriginWithPath } from '~/utils';
import { ContactHeading } from './ContactHeading';
import { ContactDescription } from './ContactDescription';
import styles from './route.module.scss';
import classNames from 'classnames';
import { useEffect } from 'react'; // 👈 add this
export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function Contact() {
    useEffect(() => {
                        window.scrollTo(0, 0);
                    }, []);
    return (
        <div className={styles.div2}>
            <section
                className={classNames(
                    'flex',
                    'overflow-hidden',
                    'flex-col',
                    'items-center',
                    'px-16',
                    'pt-64',
                    'text-2xl',
                    'tracking-wide',
                    'text-black',
                    'bg-white',
                    'pb-[613px]',
                    'max-md:px-5',
                    'max-md:py-24',
                    styles.section1
                )}
            >
                <div
                    className={classNames(
                        'flex',
                        'flex-wrap',
                        'gap-10',
                        'justify-between',
                        'items-start',
                        'max-w-full',
                        'w-[977px]',
                        styles.div1
                    )}
                >
                    <ContactHeading />
                    <ContactDescription />
                </div>
            </section>
        </div>
    );
}

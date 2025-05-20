import { LoaderFunctionArgs } from '@remix-run/node';
import { getUrlOriginWithPath } from '~/utils';
import AboutHeading from './AboutHeading';
import AboutBio from './AboutBio';
import AboutServices from './AboutServices';
import SocialLinks from './SocialLinks';
import styles from './route.module.scss';
import classNames from 'classnames';
import { useEffect } from 'react'; // 👈 add this
export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function AboutPage() {
    useEffect(() => {
                    window.scrollTo(0, 0);
                }, []);
    return (
        <div className={styles.div5}>
            <section
                className={classNames(
                    'flex',
                    'overflow-hidden',
                    'flex-col',
                    'justify-center',
                    'px-5',
                    'py-44',
                    'bg-white',
                    'max-md:py-24',
                    styles.section2
                )}
            >
                <div className={classNames('w-full', 'max-md:max-w-full', styles.div2)}>
                    <div
                        className={classNames(
                            'w-full',
                            'text-black',
                            'max-md:max-w-full',
                            styles.div3
                        )}
                    >
                        <AboutHeading />
                        <div
                            className={classNames(
                                'flex',
                                'flex-col',
                                'mt-14',
                                'w-full',
                                'text-2xl',
                                'max-md:mt-10',
                                'max-md:max-w-full',
                                styles.div4
                            )}
                        >
                            <AboutBio />
                            <hr
  className={classNames(
    'mt-6 w-full max-md:max-w-full',
    styles.hr1
  )}
/>
                            <AboutServices />
                             </div>
                    </div>
                    
                </div>
            </section>
        </div>
    );
}

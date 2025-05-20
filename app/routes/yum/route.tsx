import { LoaderFunctionArgs } from '@remix-run/node';
import { getUrlOriginWithPath } from '~/utils';
import styles from './yum.module.scss';
import { YumGallery } from './yumGallery';
import { YumHeader } from './yumHeader';
import classNames from 'classnames';
import styles0 from './route.module.scss';
import Frame6KkPng from '../../../src/assets/frame 6kk.png'; // 👈 import Link
import { useEffect } from 'react'; // 👈 add this

import { Link } from 'react-router-dom'; // 👈 import Link
export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function Yum() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <article
            className={classNames(
                'flex',
                'flex-col',
                'gap-40',
                'justify-center',
                'items-center',
                'p-10',
                'w-full',
                'bg-white',
                'min-h-screen',
                'max-md:gap-32',
                'max-md:p-8',
                'max-sm:gap-20',
                'max-sm:p-5',
                styles.article1,
                styles0.article2
            )}
        >
            <div
                className={classNames(
                    'flex',
                    'flex-col',
                    'gap-14',
                    'justify-center',
                    'items-center',
                    'w-full',
                    'max-md:gap-10',
                    'max-sm:gap-8',
                    styles.div1
                )}
            >
                <img
                    src={Frame6KkPng}
                    alt="Luna Case Study Hero"
                    className={classNames(
                        'w-full',
                        'h-auto',
                        'aspect-[1432/847]',
                        'object-cover',
                        styles0.img1
                    )}
                />
                <div
                    className={classNames(
                        'flex',
                        'flex-col',
                        'gap-52',
                        'items-start',
                        'w-full',
                        'max-md:gap-40',
                        'max-sm:gap-32',
                        styles.div2
                    )}
                >
                    <div
                        className={classNames(
                            'flex',
                            'flex-col',
                            'gap-32',
                            'items-center',
                            'w-full',
                            'max-md:gap-20',
                            'max-sm:gap-16',
                            styles.div3
                        )}
                    >
                        <YumHeader />
                        <YumGallery />
                        <Link
                            to="/work" // 👈 link here
                            className={classNames(
                                'flex',
                                'gap-6',
                                'justify-center',
                                'items-center',
                                'self-center',
                                'p-2.5',
                                'mt-32',
                                'text-4xl',
                                'max-md:mt-10',
                                styles.button,
                                styles0.link
                            )}
                        >
                            <span
                                className={classNames(
                                    'self-stretch',
                                    'my-auto',
                                    'text-stone-950',
                                    styles.span1,
                                    styles0.span1
                                )}
                            >
                                Other Projects
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}

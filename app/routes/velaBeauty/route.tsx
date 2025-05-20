import { LoaderFunctionArgs } from '@remix-run/node';
import { getUrlOriginWithPath } from '~/utils';
import styles from './velaBeauty.module.scss';
import { VelaBeautyGallery } from './velaBeautyGallery';
import { VelaBeautyHeader } from './velaBeautyHeader';
import classNames from 'classnames';
import styles0 from './route.module.scss';
import { Link } from 'react-router-dom'; // 👈 import Link
import { useEffect } from 'react';
import Frame6FvfPng from '../../../src/assets/frame 6fvf.png'; // 👈 add this

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function VelaBeauty() {
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
                'min-h-screen', // ✅ fixed
                'max-md:gap-32',
                'max-md:p-8',
                'max-sm:gap-20',
                'max-sm:p-5',
                styles.article1
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
                    src={Frame6FvfPng}
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
                        <VelaBeautyHeader />
                        <VelaBeautyGallery />

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
                                    styles0.span2
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

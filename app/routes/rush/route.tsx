import { LoaderFunctionArgs } from '@remix-run/node';
import { getUrlOriginWithPath } from '~/utils';
import styles from './rush.module.scss';
import { RushHeader } from './RushHeader';
import { RushGallery } from './RushGallery';
import styles0 from './route.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom'; // 👈 import Link
import { useEffect } from 'react'; // 👈 add this

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function Rush() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <article className={classNames(styles.article1, styles0.article1)}>
            <div className={styles.div1}>
                <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F3b5bccefe22c459a955a742105476e08%2F23c63c98182e4a78807fbd29f3613161"
                    alt="Luna Case Study Hero"
                    className={classNames(
                        'w-full',
                        'h-auto',
                        'aspect-[1432/847]',
                        'object-cover',
                        styles0.img1
                    )}
                />
                <div className={styles.div2}>
                    <div className={styles.div3}>
                        <RushHeader />
                        <RushGallery />

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

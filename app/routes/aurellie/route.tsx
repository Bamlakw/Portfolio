import { LoaderFunctionArgs } from '@remix-run/node';
import { getUrlOriginWithPath } from '~/utils';
import styles from './aurellie.module.scss';
import { AurellieGallery } from './aurellieGallery';
import { AurellieHeader } from './aurellieHeader';
import classNames from 'classnames';
import { NavLink } from '@remix-run/react';

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function Aurellie() {
    return (
        <NavLink to="/rush" style={{ textDecoration: 'none', maxWidth: 'none' }}>
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
                    'min-h-[screen]',
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
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a6e29bbb8d31df477ba5ffee5de1c8f44aa3ef4"
                        alt="Luna Case Study Hero"
                        className="w-full h-auto aspect-[1432/847] object-cover"
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
                            <AurellieHeader />
                            <AurellieGallery />
                        </div>
                    </div>
                </div>
            </article>
        </NavLink>
    );
}

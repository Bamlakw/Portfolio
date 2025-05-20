import { LoaderFunctionArgs } from '@remix-run/node';
import { getUrlOriginWithPath } from '~/utils';
import { WorkHeader } from './WorkHeader';
import { WorkGrid } from './WorkGrid';
import styles from './route.module.scss';
import classNames from 'classnames';
import { useEffect } from 'react'; // 👈 add this

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function Work() {
    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    return (
        <main
            className={classNames(
                'flex',
                'p-10',
                'w-full',
                'bg-white',
                'min-h-[screen]',
                'max-md:p-8',
                'max-sm:p-6',
                styles.main1
            )}
        >
            <div
                className={classNames(
                    'flex',
                    'flex-col',
                    'gap-40',
                    'w-full',
                    'max-md:gap-32',
                    'max-sm:gap-20',
                    styles.div1
                )}
            >
                <section
                    className={classNames(
                        'flex',
                        'flex-col',
                        'gap-14',
                        'w-full',
                        'max-md:gap-10',
                        'max-sm:gap-8',
                        styles.section1
                    )}
                >
                    <div
                        className={classNames(
                            'flex',
                            'flex-col',
                            'gap-32',
                            'w-full',
                            'max-md:gap-20',
                            'max-sm:gap-12',
                            styles.div2
                        )}
                    >
                        <WorkHeader />
                        <WorkGrid />
                    </div>
                </section>
            </div>
        </main>
    );
}

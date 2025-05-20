import { LoaderFunctionArgs } from '@remix-run/node';
import { getUrlOriginWithPath } from '~/utils';
import { IntroSection } from './IntroSection'; // Assuming named export
import { WorkSection } from './WorkSection'; // Assuming named export
import { ProjectsGrid } from './ProjectsGrid'; // Assuming named export
import { MoreProjectsCTA } from './MoreProjectsCTA';
import styles from './route.module.scss';
import classNames from 'classnames'; // Assuming named export
import { useEffect } from 'react'; // 👈 add this

// Loader function for handling data fetching (optional)
export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

// HomePage component definition
// HomePage component definition
export default function HomePage() {
    useEffect(() => {
                window.scrollTo(0, 0);
            }, []);
    return (
        <div
            className={classNames(
                'flex',
                'overflow-hidden',
                'gap-2.5',
                'items-center',
                'p-10',
                'bg-white',
                'max-md:px-5',
                styles.div3
            )}
        >
            <main
                className={classNames(
                    'self-stretch',
                    'my-auto',
                    'bg-white',
                    'min-w-60',
                    'w-full', // Ensure the main section uses full width
                    styles.main1
                )}
            >
                <div className={classNames('w-full', 'max-md:max-w-full', styles.wrapping)}>
                    <IntroSection />
                    <div
                        className={classNames(
                            'mt-44',
                            'w-full',
                            'max-md:mt-10',
                            'max-md:max-w-full',
                            styles.worknlists
                        )}
                    >
                        <div className="w-full max-md:max-w-full">
                            <WorkSection />
                            <section
                                className={classNames(
                                    'flex',
                                    'flex-col',
                                    'mt-32',
                                    'w-full', // Ensure this section is full width
                                    'leading-tight',
                                    'text-stone-950',
                                    'max-md:mt-10',
                                    'max-md:max-w-full',
                                    styles.workandbtn
                                )}
                            >
                                <ProjectsGrid />
                                <MoreProjectsCTA />
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

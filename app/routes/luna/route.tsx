import { LoaderFunctionArgs } from '@remix-run/node';
import { getUrlOriginWithPath } from '~/utils';
import { LunaHeader } from './LunaHeader';
import { LunaGallery } from './LunaGallery';
import styles from './route.module.scss';
import classNames from 'classnames';
import { useLocation } from '@remix-run/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'; // ✅ Correct import for client-side routing

export const loader = ({ request }: LoaderFunctionArgs) => {
  return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function Luna() {
  const { pathname } = useLocation();

  // ✅ Instantly jump to the top — no animation!
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

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
          alt=""
          className={styles.img2}
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
            <LunaHeader />
            <LunaGallery />

            <Link
              to="/work"
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
                styles.button
              )}
            >
              <span
                className={classNames(
                  'self-stretch',
                  'my-auto',
                  'text-stone-950',
                  styles.span1
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

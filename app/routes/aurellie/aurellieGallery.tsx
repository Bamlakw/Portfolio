import React from 'react';
import styles from './aurellueGallery.module.scss';
import classNames from 'classnames';

export const AurellieGallery: React.FC = () => {
    return (
        <section
            className={classNames(
                'flex',
                'flex-col',
                'gap-8',
                'justify-center',
                'items-center',
                'w-full',
                styles.section1
            )}
        >
            <div
                className={classNames(
                    'flex',
                    'flex-col',
                    'gap-10',
                    'items-start',
                    'w-full',
                    styles.div1
                )}
            >
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9456b72b347db104b5b630bb7e6129c20d0d9422"
                    alt="Luna Product Showcase"
                    className="w-full h-[1773px] max-lg:h-auto object-cover"
                />
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ebc1c7fe8a67eee188e6156f7cc4aa26c087738"
                    alt="Luna Brand Story"
                    className="w-full h-[900px] max-lg:h-auto object-cover"
                />
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bc973644bb189cb6a3c3367bbab9a082b75c30e"
                    alt="Luna Product Details"
                    className="w-full h-[1014.566px] max-lg:h-auto object-cover"
                />
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/73db36708348d00edcd8ca5d32f8ce6724604148"
                    alt="Luna Brand Values"
                    className="w-full h-[1014.566px] max-lg:h-auto object-cover"
                />
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d84f037ffb2b2292ca5537d62c52cb4f1350f5c4"
                    alt="Luna Collection"
                    className="w-full h-[1014.566px] max-lg:h-auto object-cover"
                />
            </div>
        </section>
    );
};

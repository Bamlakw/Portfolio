import * as React from 'react';
import styles from './WorkItem.module.scss';
import classNames from 'classnames';

interface WorkItemProps {
    imageUrl: string;
    altText: string;
    title: string;
    backgroundColor?: string;
}

export const WorkItem: React.FC<WorkItemProps> = ({
    imageUrl,
    altText,
    title,
    backgroundColor = '#ffffff',
}) => {
    return (
        <article className="flex flex-col gap-8">
            <img
                src={imageUrl}
                alt={altText}
                className={classNames('w-full', 'aspect-[1.1]', 'object-cover', styles.img1)}
                style={{ backgroundColor }}
            />
            <h3
                className={classNames(
                    'text-2xl',
                    'leading-7',
                    'text-stone-950',
                    'max-md:text-xl',
                    'max-sm:text-lg',
                    styles.header1
                )}
            >
                {title}
            </h3>
        </article>
    );
};

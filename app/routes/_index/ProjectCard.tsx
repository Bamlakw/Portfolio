import * as React from 'react';
import styles from './ProjectCard.module.scss';
import classNames from 'classnames';

interface ProjectCardProps {
    imageUrl: string;
    title: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title }) => {
    return (
        <article
            className={classNames(
                'flex',
                'flex-col',
                'grow',
                'shrink',
                'justify-center',
                'min-h-[741px]',
                'min-w-60',
                'w-[531px]',
                'max-md:max-w-full',
                styles.article1,
                styles.article1
            )}
        >
            <img
                src={imageUrl}
                alt={title}
                className={classNames(
                    'object-contain',
                    'flex-1',
                    'w-full',
                    'aspect-[0.98]',
                    'max-md:max-w-full',
                    styles.image
                )}
            />
            <h3 className={classNames('mt-8', 'text-2xl', 'text-stone-950', styles.header1)}>
                {title}
            </h3>
        </article>
    );
};

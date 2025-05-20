import * as React from 'react';
import { ProjectCard } from './ProjectCard';
import styles from './ProjectsGrid.module.scss';
import classNames from 'classnames';
import { NavLink } from '@remix-run/react';

interface Project {
  imageUrl: string;
  title: string;
  link: string;
}

export const ProjectsGrid: React.FC = () => {
  const projects: Project[] = [
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets%2F3b5bccefe22c459a955a742105476e08%2F65f741c6ba4043de912ef82d7fd885ec',
      title: 'Rush - Branding + Web Design',
      link: '/rush',
    },
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets%2F3b5bccefe22c459a955a742105476e08%2Fa07433154c5d4835918d0321bbf453f8',
      title: 'Nura — Web Design Concept',
      link: '/nura',
    },
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets%2F3b5bccefe22c459a955a742105476e08%2Fb9c3c70af511479fadadf155b22cb448',
      title: 'Luna Glow - Branding + Web Design',
      link: '/luna',
    },
    {
      imageUrl:
       'https://cdn.builder.io/api/v1/image/assets%2F3b5bccefe22c459a955a742105476e08%2F5bd07de4f912493ea59063c2e832e7c2',
      title: 'Yum — Web Design',
      link: '/yum',
    },
  ];

  return (
    <div
      className={classNames(
        'flex',
        'flex-wrap',
        'gap-14',
        'items-start',
        'w-full',
        'text-2xl',
        'max-md:max-w-full',
        styles.ProjectsStyle
      )}
    >
      {projects.map((project, index) => (
        <NavLink
          key={index}
          to={project.link}
          style={{ textDecoration: 'none' }}
        >
          <ProjectCard imageUrl={project.imageUrl} title={project.title} />
        </NavLink>
      ))}
    </div>
  );
};


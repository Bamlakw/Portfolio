import * as React from 'react';
import { WorkItem } from './WorkItem';
import styles from './WorkGrid.module.scss';
import classNames from 'classnames';
import { NavLink } from '@remix-run/react';

interface WorkGridItem {
  imageUrl: string;
  altText: string;
  title: string;
  backgroundColor: string;
  link?: string;
}

export const WorkGrid: React.FC = () => {
  const portfolioItems: WorkGridItem[] = [
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets%2F3b5bccefe22c459a955a742105476e08%2F65f741c6ba4043de912ef82d7fd885ec',
      altText: 'Rush energy drink circular logo',
      title: 'Rush - Branding + Web Design',
      backgroundColor: '#ffffff',
      link: '/rush',
    },
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets%2F3b5bccefe22c459a955a742105476e08%2Fa07433154c5d4835918d0321bbf453f8',
      altText: 'Beauty website with person applying skincare',
      title: 'Nura — Web Design Concept',
      backgroundColor: '#f5f5f5',
      link: '/nura',
    },
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets%2F3b5bccefe22c459a955a742105476e08%2Fb9c3c70af511479fadadf155b22cb448',
      altText: 'Phone case design with YUM text pattern',
      title: 'Luna Glow - Branding + Web Design',
      backgroundColor: '#f3f0f6',
      link: '/luna',
    },
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets%2F3b5bccefe22c459a955a742105476e08%2F5bd07de4f912493ea59063c2e832e7c2',
      altText: 'Dark themed music artist website',
      title: 'Yum — Web Design',
      backgroundColor: '#1a1a1a',
      link: '/yum',
    },
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets%2F3b5bccefe22c459a955a742105476e08%2Fe765aa3823474b7b874945fdd938675c',
      altText: 'Fashion website with model',
      title: 'Velnoir — Web Design Concept',
      backgroundColor: '#0066ff',
      link: '/velnoir',
    },
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets%2F3b5bccefe22c459a955a742105476e08%2Fdd503b3761f54228b8a3d439a54256d6',
      altText: 'Beauty website with text and plant imagery',
      title: 'Canim - Web Design Concept',
      backgroundColor: '#ffffff',
      link: '/velabeauty',
    },
  ];

  return (
  <section
    className={classNames(
      'grid',
      'grid-cols-2',
      'gap-8',
      'w-full',
      'max-md:grid-cols-2',
      'max-sm:grid-cols-1',
      styles.section1
    )}
  >
    {portfolioItems.map((item, index) => {
      const workItem = (
        <WorkItem 
          imageUrl={item.imageUrl}
          altText={item.altText}
          title={item.title}
          backgroundColor={item.backgroundColor}
        />
      );

      return item.link ? (
        <NavLink
          key={index}
          to={item.link}
          className={classNames("block", styles.workLink)}
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          {workItem}
        </NavLink>
      ) : (
        <div key={index}>{workItem}</div>
      );
    })}
  </section>
)
}
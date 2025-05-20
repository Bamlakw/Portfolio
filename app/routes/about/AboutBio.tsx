import React from 'react';
import styles from './AboutBio.module.scss';
import classNames from 'classnames';

const AboutBio: React.FC = () => {
    return (
        <article
            className={classNames(
                'self-center',
                'p-2.5',
                'max-w-full',
                'tracking-tight',
                'leading-7',
                'w-[892px]',
                'max-md:max-w-full',
                styles.article1,
                styles.article1
            )}
        >
            <p>
                I'm Bamlak(Bam) — a web designer with a love for clean visuals, intuitive experiences, and meaningful storytelling.
            </p>
            <p>
                I come from a background in graphic design and front-end development, and I use both sides of that skill set to build digital experiences that feel as good as they look. Whether it’s a cozy wellness brand, an e-commerce shop, or a bold startup, I focus on crafting interfaces that are both beautiful and built to connect.
            </p>
            <p>
                My journey into web design started with a curiosity to go beyond visuals — I wanted to bring things to life. I started in graphic design, dove into code (shoutout to the Harvard CS50 course 👩🏽‍💻), and eventually found joy in blending design, development, and a sprinkle of movement to create thoughtful digital experiences.
            </p>
            <p>For the past couple of years, I’ve been building and experimenting — from concept projects to full portfolio pieces — designing websites and apps that focus on clarity, flow, and feeling. I love working with creative teams and mission-driven brands who care about the impact of their work. If you’re into design that’s smart, sensitive, and full of intention — we’ll get along just fine.</p>
        </article>
    );
};

export default AboutBio;


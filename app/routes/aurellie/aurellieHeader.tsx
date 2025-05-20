import React from 'react';
import { RightArrowIcon } from './RightArrowIcon';
import styles from './aurellieHeader.module.scss';
import classNames from 'classnames';

export const AurellieHeader: React.FC = () => {
    return (
        <header
            className={classNames(
                'flex',
                'justify-between',
                'items-start',
                'w-full',
                'max-md:flex-col',
                'max-md:gap-10',
                styles.header1
            )}
        >
            <div className={classNames('flex', 'gap-2', 'items-center', styles.div1)}>
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6d03a0f0432362c037f77fc3f3af50000435307"
                    alt="Luna Logo"
                    className="w-[46px] h-[46px]"
                />
                <h1
                    className={classNames(
                        'text-3xl',
                        'leading-9',
                        'text-stone-950',
                        'max-md:text-2xl',
                        'max-sm:text-2xl',
                        styles.header2
                    )}
                >
                    File
                </h1>
                <RightArrowIcon />
            </div>
            <div
                className={classNames(
                    'flex',
                    'justify-end',
                    'items-center',
                    'w-[778px]',
                    'max-md:w-full',
                    styles.div2
                )}
            >
                <p className="flex-1 text-3xl leading-9 opacity-[0.96] text-stone-950 max-md:text-2xl max-sm:text-2xl">
                    Luna — a skincare brand rooted in intention, calm, and clarity. Inspired by the
                    quiet confidence of the moon, we craft gentle but effective formulas using
                    plant-based, skin-loving ingredients. No fillers. No harsh chemicals. No
                    twenty-step routines.
                </p>
            </div>
        </header>
    );
};

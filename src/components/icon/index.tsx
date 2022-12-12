import React from 'react';
import sprite from './sprites.svg';

export type IIconProps = {
    name: string;
    sizeX: string;
    sizeY: string;
    color?: string;
};

export const Icon = (props: IIconProps) => {
    const { name, sizeX, sizeY, color } = props;

    return (
        <svg width={sizeX} height={sizeY} fill={color} stroke={color}>
            <use href={sprite + `#${name}`} />
        </svg>
    );
};
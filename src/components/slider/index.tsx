import React from 'react';
import {
    SliderContainer,
    SliderItem,
    SliderTitle,
    SliderIndicator,
    SliderIndicatorItem,
} from './styled';

export type SliderData = {
    title: string;
    imagePath: string;
    button?: React.ReactNode;
    isActive?: boolean;
};

export type ISliderProps = {
    arrValue: SliderData[];
};

export const Slider = (props: ISliderProps) => {
    const { arrValue } = props;

    return (
        <SliderContainer>
            {arrValue.map(item => {
                return (<SliderItem key={item.title} style={{ backgroundImage: `url(${item.imagePath})` }}>
                    <SliderTitle>{item.title}</SliderTitle>
                    {item.button && item.button}
                </SliderItem>);
            })}
            <SliderIndicator>
                {arrValue.map(item => {
                    return (<SliderIndicatorItem key={item.title} className={item.isActive ? 'active' : ''}/>);
                })}
            </SliderIndicator>
        </SliderContainer>
    );
};
import React from 'react';
import {
    CardContainer, CardIcon,
    CardItem, CardTitle,
} from './styled';

export type CardData = {
    icon?: React.ReactNode;
    title: string;
};

export type ICardProps = {
    arrValue: CardData[];
};

export const Card = (props: ICardProps) => {
    const { arrValue } = props;

    return (
        <CardContainer>
            {arrValue.map(item => {
                return (<CardItem key={item.title}>
                    <CardIcon>{item.icon}</CardIcon>
                    <CardTitle>{item.title}</CardTitle>
                </CardItem>);
            })}
        </CardContainer>
    );
};
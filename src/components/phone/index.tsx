import React from 'react';
import {
    PhoneContainer,
    PhoneNumber,
} from './styled';

export type IPhoneProps = {
    icon?: React.ReactNode;
    title: string;
    onClick: () => void;
};

export const Phone = (props: IPhoneProps) => {
    const { icon, title, onClick } = props;

    return (
        <PhoneContainer onClick={onClick}>
            {icon}
            <PhoneNumber>{title}</PhoneNumber>
        </PhoneContainer>
    );
};
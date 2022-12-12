import React from 'react';
import { ButtonContainer } from './styled';

export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    size?: 'sm' | 'sl';
    disabled?: boolean;
};

export const Button = ({
    onClick,
    children,
    size = 'sl',
    disabled,
    }: ButtonProps) => {
    return (
        <ButtonContainer onClick={onClick} disabled={disabled} size={size}>
            {children}
        </ButtonContainer>
    );
};


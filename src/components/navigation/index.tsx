import React from 'react';
import {
    NavigationContainer,
    NavigationItem,
    NavigationIcon,
    NavigationCount,
    NavigationTitle,
} from './styled';

export type NavigationData = {
    icon?: React.ReactNode;
    title: string;
    onClick: () => void;
    count?: number;
};

export type INavigationProps = {
    arrValue: NavigationData[];
    className?: string;
};

export const Navigation = (props: INavigationProps) => {
    const { arrValue, className } = props;

    return (
        <NavigationContainer className={className}>
            {arrValue.map(item => {
                return (<NavigationItem key={item.title} onClick={item.onClick}>
                    {item.icon &&
                        <NavigationIcon>
                            {item.icon}
                            {item.count && <NavigationCount title={item.count.toString()}>{item.count < 100 ? item.count : '99+' }</NavigationCount>}
                        </NavigationIcon>}
                    <NavigationTitle>{item.title}</NavigationTitle>
                </NavigationItem>);
            })}
        </NavigationContainer>
    );
};
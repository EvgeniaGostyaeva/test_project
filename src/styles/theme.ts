import { DefaultTheme } from 'styled-components';
import { ITheme, ThemeEnum } from './../interfaces/styled';

const baseTheme: ITheme = {
    colors: {
        white100: '#FFFFFF',
        black100: '#000000',
        primary100: '#4859F0',
        primary200: '#1324B9',
        secondary100: '#F5F5F5',
        secondary200: '#C4C4C4',
        secondary300: '#9B9591',
        secondary400: '#6F6F6F',
        secondary500: '#212121',
        primary100RGB: '72, 89, 240',
        primary200RGB: '19, 36, 185',
    },

    linearGradient: {
        linearGradientPrimary100: 'linear-gradient(110.67deg, rgba(54, 68, 196, 0.74) 12.49%, rgba(49, 59, 152, 0.1) 84.84%)',
    },

    media: {
        large: '20px',
        medium: '20px',
        small: '20px',
    }
}

export const lightTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.light,
}
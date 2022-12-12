export enum ThemeEnum  {
    light = "light",
    dark = "dark"
}

export interface ITheme {
    colors: {
        white100: string
        black100: string
        primary100: string
        primary200: string
        secondary100: string
        secondary200: string
        secondary300: string
        secondary400: string
        secondary500: string
        primary100RGB: string
        primary200RGB: string
    }

    linearGradient: {
        linearGradientPrimary100: string
    }

    media: {
        large: string
        medium: string
        small: string
    }
}

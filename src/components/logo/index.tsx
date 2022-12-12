import {
    LogoContainer,
} from './styled';


export type ILogoProps = {
    title: string;
    onClick: () => void;
};

export const Logo = (props: ILogoProps) => {
    const { title, onClick } = props;

    return (
        <LogoContainer onClick={onClick}>{title}</LogoContainer>
    );
};
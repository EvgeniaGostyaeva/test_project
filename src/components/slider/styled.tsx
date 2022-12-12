import styled from 'styled-components';

export const SliderContainer = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    max-height: 675px;
    border-radius: 16px;
`;

export const SliderItem = styled.div`
    padding: 10% 7% 5%;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${({ theme }) => theme.linearGradient.linearGradientPrimary100};
    }
    
    > * {
        position: relative;
        z-index: 2;
    }
`;

export const SliderTitle = styled.h1`
    margin-bottom: 5%;
    max-width: 582px;
    font-size: 4.6rem;
    line-height: 5.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white100};
`;

export const SliderIndicator = styled.ol`
    display: flex;
    justify-content: center;
    gap: 9px;
    position: absolute;
    right: 21px;
    bottom: 21px;
    list-style: none;
`;

export const SliderIndicatorItem = styled.li`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(5px);
    cursor: pointer;
    
    &.active {
        width: 26px;
        background-color: ${({ theme }) => theme.colors.white100};
        cursor: default;
    }
`;
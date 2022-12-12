import styled from 'styled-components';

export const NavigationContainer = styled.div`
    &.navigation,
    &.navigation_info,
    &.navigation_feedback {
        display: flex;
        flex-wrap: wrap;
    }

    &.navigation_feedback {
        margin-left: 14px;
        justify-content: flex-end;
    }
`;

export const NavigationItem = styled.a`
    cursor: pointer;
    
    .navigation & {
        margin: 16px 20px 20px 0;
        border-bottom: 1px solid rgba(155, 149, 145, 0.5);
        font-size: 2.2rem;
        line-height: 2.7rem;
    }
    
    .navigation_info & {
        display: flex;
        align-items: center;
        margin: 5px 18px 5px 0;
    }
    
    .navigation_feedback & {
        margin-top: 12px;
        margin-left: 14px;
    }
    
    .navigation_footer & {
        display: flex;
        align-items: center;
    }

    :last-child {
        margin-right: 0;
    }
`;

export const NavigationIcon = styled.span`
    position: relative;
    margin-right: 9px;
`;

export const NavigationCount = styled.span`
    position: absolute;
    top: -11px;
    left: 16px;
    padding: 4px;
    min-width: 16px;
    border-radius: 10px;
    box-shadow: 0 0 0 2px rgba(${({ theme }) => theme.colors.primary100RGB}, 0.2);
    font-size: 1.2rem;
    line-height: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white100};
    background-color: rgba(${({ theme }) => theme.colors.primary100RGB}, 0.99);
`;

export const NavigationTitle = styled.span`
    color: ${({ theme }) => theme.colors.secondary500};

    ${NavigationItem}:hover & {
        color: ${({ theme }) => theme.colors.secondary400};
    }

    .navigation_feedback & {
        border-bottom: 1px solid rgba(${({ theme }) => theme.colors.primary100RGB}, 0.3);
        color: ${({ theme }) => theme.colors.primary100};
    }

    .navigation_feedback ${NavigationItem}:hover & {
        border-bottom-color: rgba(${({ theme }) => theme.colors.primary200RGB}, 0.4);
        color: ${({ theme }) => theme.colors.primary200};
    }
    
    .navigation_footer & {
        color: ${({ theme }) => theme.colors.white100};
    }

    .navigation_footer ${NavigationItem}:hover & {
        color: ${({ theme }) => theme.colors.secondary200};
    }
`;
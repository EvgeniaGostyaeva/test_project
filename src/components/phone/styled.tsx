import styled from 'styled-components';

export const PhoneContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 16px;
    margin-bottom: 20px;
    font-size: 2.2rem;
    line-height: 2.7rem;
    color: ${({ theme }) => theme.colors.primary100};
    cursor: pointer;
    
    svg {
        fill: ${({ theme }) => theme.colors.primary100};
    }
    
    :hover {
        color: ${({ theme }) => theme.colors.primary200};

        svg {
            fill: ${({ theme }) => theme.colors.primary200};
        }
    }
`;

export const PhoneNumber = styled.span`
    margin-left: 9px;
    border-bottom: 1px solid rgba(${({ theme }) => theme.colors.primary100RGB}, 0.3);
    
    ${PhoneContainer}:hover & {
        border-bottom-color: rgba(${({ theme }) => theme.colors.primary200RGB}, 0.4);
    }
`;
import styled from 'styled-components';

export const LogoContainer = styled.div`
    margin-right: 7%;
    font-size: 3.7rem;
    line-height: 4.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary500};
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    
    :hover {
        color: ${({ theme }) => theme.colors.secondary400};
    }
`;
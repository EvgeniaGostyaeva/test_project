import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 37px 23px 13px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background-color: ${({ theme }) => theme.colors.secondary500};
`;

export const FooterItem = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px 20px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const FooterNav = styled.div`
    
`;
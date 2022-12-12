import styled from 'styled-components';

export const CardContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 30px 7%;
    margin: 100px 0;
    text-align: center;
`;

export const CardItem = styled.div`
`;

export const CardIcon = styled.div`
`;

export const CardTitle = styled.div`
    margin-top: 20px;
    font-size: 2.5rem;
    line-height: 3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary500};
`;
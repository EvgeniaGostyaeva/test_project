import styled from 'styled-components';

export const SearchContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 479px;
`;

export const SearchInput = styled.input`
    padding: 13px 14px 10px 53px;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.secondary100};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.secondary300};
    background-color: ${({ theme }) => theme.colors.secondary100};
    
    :hover,
    :focus {
        border-color: ${({ theme }) => theme.colors.secondary200};
    }
`;

export const SearchIcon = styled.i`
    position: absolute;
    top: 9px;
    left: 14px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    
    :before {
        content: '';
        display: block;
        width: 21px;
        height: 21px;
        border: 2px solid ${({ theme }) => theme.colors.secondary300};
        border-radius: 50%;
    }
    
    :after {
        content: '';
        position: absolute;
        right: -1px;
        bottom: 5px;
        width: 11px;
        height: 2px;
        transform: rotate(45deg);
        background-color: ${({ theme }) => theme.colors.secondary300};
    }
`;
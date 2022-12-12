import styled , { css }  from 'styled-components';
import { ButtonProps } from '.';

const DISABLED = css`
  cursor: not-allowed;
  color: ${({ theme }) => theme.colors.black100};
  background-color: ${({ theme }) => theme.colors.secondary300};
`;

const SIZE = {
  sm: css`
    padding: 16px 33px;
    border-radius: 8px;
    font-size: 1.6rem;
    line-height: 1.9rem;
  `,
  sl: css`
    padding: 19px;
    width: 100%;
    max-width: 320px;
    border-radius: 16px;
    font-size: 2.2rem;
    line-height: 2.7rem;
  `,
};


export const ButtonContainer = styled.button<ButtonProps>`
  border: none;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  color: ${({ theme }) => theme.colors.white100};
  background-color: ${({ theme }) => theme.colors.primary100};

  :hover {
    background-color: ${({ theme }) => theme.colors.primary200};
  }
  
  ${(props) => props.disabled && DISABLED}
  ${(props) => props.size && SIZE[props.size]}
`;

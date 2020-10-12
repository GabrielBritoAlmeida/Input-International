import styled, { css } from 'styled-components'
import { NotificationProps } from '.'

const wrapperModifiers = {
  default: () => css`
    background: #a9def5;
  `,

  filled: () => css`
    background: #a9def5;
  `,

  success: () => css`
    background: #84d0ba;
  `,

  error: () => css`
    background: #ee4d4d;
  `,

  warn: () => css`
    background: #ffc44d;
  `,

  disableInput: () => css`
    opacity: 0.4;
  `
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 27.2rem;

  position: relative;
  bottom: 2rem;
  border: 1px solid red;
`
type BoxProps = {
  typeInfo?:
    | 'default'
    | 'filled'
    | 'success'
    | 'error'
    | 'warn'
    | 'disableInput'
  open: boolean
}

export const Box = styled.div<BoxProps>`
  ${({ typeInfo, open }) => css`
    min-width: 17.6rem;
    min-height: 6.3rem;

    border-radius: 0.8rem;
    padding: 0.8rem 1.6rem;
    margin-bottom: 0.8rem;
    pointer-events: ${open ? 'all' : 'none'};
    transition: opacity 0.3s ease-in-out;
    opacity: ${open ? 1 : 0};

    ${!!typeInfo && wrapperModifiers[typeInfo]}
  `};
`

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #191919;
`

export const List = styled.ul`
  margin-top: 1rem;
  list-style: none;
`

export const ListRow = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  font-size: 1.2rem;
  font-weight: bold;
  color: #191919;

  > svg {
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 0.8rem;
  }
`

export const Logo = styled.img<NotificationProps>`
  ${({ typeInfo }) => css`
    width: 1.6rem;
    height: 1.6rem;
    cursor: pointer;

    ${typeInfo === 'disableInput' && wrapperModifiers.disableInput}
  `};
`

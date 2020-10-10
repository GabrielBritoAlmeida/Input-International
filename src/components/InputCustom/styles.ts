import styled, { css } from 'styled-components'

import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow'

import { Search } from '@styled-icons/heroicons-solid/Search'

export const Wrapper = styled.div`
  padding: 3rem;

  .style-scroll {
    overflow: auto;

    ::-webkit-scrollbar {
      background-color: #173e4f;
      border-radius: 0.4rem;
      opacity: 0.32;
      width: 0.8rem;
    }

    ::-webkit-scrollbar-track {
      background-color: #173e4f;
      border-radius: 0.4rem;
      opacity: 0.32;
      width: 0.8rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #4995b5;
      border-radius: 0.4rem;
      opacity: 0.48;
    }

    ::-webkit-scrollbar-button {
      display: none;
    }
  }
`

export const Container = styled.div`
  position: relative;
  max-width: 28.4rem;
`

export const InputPhone = styled.input`
  width: 28rem;
  height: 4.8rem;

  background: none;
  border: 0.2rem solid #4995b5;
  border-radius: 0.8rem;
  color: #fff;
  font-size: 1.6rem;

  padding-left: 13rem;

  ::placeholder {
    text-align: start;
    color: #004b65;
    font-size: 1.6rem;
  }

  :focus {
    outline: none;
    border: 0.2rem solid #a9def5;
  }

  :hover {
    border: 0.2rem solid #a9def5;
    box-shadow: 0px 0px 8px #00aeff;
  }
`

export const DivFlagAlign = styled.div`
  display: flex;
  flex-direction: row;

  > span {
    color: #fff;
    font-size: 1.6rem;
  }
`

export const DivFlag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 11.4rem;
  height: 3.6rem;

  border-right: 0.2rem solid #004b65;
  padding: 1.6rem 1.4rem;
  cursor: pointer;

  position: absolute;
  top: 0.6rem;
  left: 0.4rem;
`

export const IconArrow = styled(DownArrow)`
  width: 1.6rem;
  height: 0.8rem;
  color: #89c3de;
`
type ImageProps = {
  icon: JSX.Element
}

export const Image = styled.img<ImageProps>`
  width: 2.4rem;
  height: 1.6rem;
  margin-right: 0.8rem;
`

type BoxProps = {
  isOpen: boolean
}

export const Box = styled.div<BoxProps>`
  ${({ isOpen }) => css`
    position: fixed;

    width: 28rem;
    height: 17.6rem;
    padding: 0 0 0.8rem;

    background: #00151f;
    border: 0.2rem solid #a9def5;
    border-radius: 0.8rem;
    box-shadow: 0px 8px 24px #00aeffa3;

    pointer-events: ${isOpen ? 'all' : 'none'};
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
  `}
`
export const CloseBox = styled.div`
  background: #333;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const AlignSearch = styled.div`
  width: 100%;
  height: 4rem;

  position: relative;
`
export const IconSearch = styled(Search)`
  width: 1.6rem;
  height: 1.6rem;

  color: #89c3de;

  position: absolute;
  top: 1rem;
  left: 2.2rem;
`

export const InputSearch = styled.input`
  width: 26rem;
  height: 4rem;
  background: none;
  border: none;
  border-bottom: 0.2rem solid #4995b5;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0 0.8rem;

  padding-left: 4.4rem;

  :focus {
    outline: none;
  }
`

export const List = styled.ul`
  margin-top: 0.8rem;
  margin-right: 0.8rem;

  height: 11.6rem;
  list-style: none;
`

export const ListBody = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    height: 4rem;
    padding: 0;
    font-family: ${theme.font.family};

    cursor: pointer;

    :hover {
      background: #89c3de;
    }

    :active {
      background: #0e7291;
    }
  `}

  ${Image} {
    margin-right: 1.2rem;
    margin-left: 1.6rem;
  }
`

import styled, { css } from 'styled-components'

import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow'

import { Search } from '@styled-icons/heroicons-solid/Search'

export const Wrapper = styled.div`
  padding: 3rem;
`

export const Container = styled.div`
  position: relative;
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

  :focus {
    outline: none;
  }

  ::placeholder {
    text-align: start;
    color: #004b65;
    font-size: 1.6rem;
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

  position: absolute;
  top: 0.6rem;
  left: 0.4rem;
`

export const IconArrow = styled(DownArrow)`
  width: 1.6rem;
  height: 0.8rem;
  color: #89c3de;
`

export const Image = styled.img`
  width: 2.4rem;
  height: 1.6rem;
  margin-right: 0.8rem;
`

export const Box = styled.div`
  width: 28rem;
  height: 17.6rem;
  padding: 0.8rem;

  background: #00151f;
  border: 0.2rem solid #a9def5;
  border-radius: 0.8rem;
  box-shadow: 0px 8px 24px #00aeffa3;
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
  left: 1.5rem;
`

export const InputSearch = styled.input`
  width: 100%;
  height: 4rem;
  background: none;
  border: none;
  border-bottom: 0.2rem solid #4995b5;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 600;

  padding-left: 4.4rem;

  :focus {
    outline: none;
  }
`

export const List = styled.ul`
  margin-top: 0.8rem;
  height: 10.4rem;
  list-style: none;
  padding: 0 0.8rem;

  overflow: auto;
`

export const ListBody = styled.li`
  display: flex;
  align-items: center;

  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  height: 3.8rem;
  padding: 0;
  /* font-family: Roboto; */

  cursor: pointer;

  ${Image} {
    margin-right: 1.2rem;
  }
`

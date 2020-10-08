import styled, { css } from 'styled-components'

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
    margin-left: 0.8rem;
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

  position: absolute;
  top: 0.6rem;
  left: 0.4rem;

  .icon-arrow {
    width: 1.6rem;
    height: 8rem;
    color: #89c3de;
    margin: 0 1.6rem;
  }

  .icon-flag {
    width: 2.4rem;
    height: 1.6rem;
    margin-left: 1.6rem;
    color: #fff;
  }
`

export const Image = styled.img`
  width: 2.4rem;
  height: 1.6rem;
  margin-left: 1.6rem;
  color: #fff;
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

export const InputSearch = styled.input`
  width: 100%;
  height: 4rem;
  background: none;
  border: none;
  border-bottom: 0.2rem solid #4995b5;
  color: #fff;
  font-size: 1.6rem;

  :focus {
    outline: none;
  }
`

export const List = styled.ul`
  margin-top: 0.8rem;
  max-height: 12rem;
  list-style: none;

  overflow: auto;

  > li {
    color: #fff;
    font-size: 1.6rem;
    height: 4rem;
    padding: 0 0.8rem;
  }
`

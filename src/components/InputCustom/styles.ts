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

// export const InputFlag = styled.input`
//   width: 11.4rem;
//   height: 3.6rem;

//   border: none;
//   border-right: 0.2rem solid #004b65;
//   background: none;
//   padding-left: 0.5rem;

//   position: absolute;
//   top: 0.6rem;
//   left: 0.4rem;

//   :focus {
//     outline: none;
//   }
// `

export const InputSearch = styled.input``

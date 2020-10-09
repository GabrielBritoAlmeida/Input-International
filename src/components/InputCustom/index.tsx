import { useState, useCallback } from 'react'
import InputMask from 'react-input-mask'

import * as S from './styles'

import { FlagUsa } from '@styled-icons/fa-solid/FlagUsa'
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow'

import SearchString from './function'

export type InputProps = {
  list: Array<{
    name: string
    icon: JSX.Element
    mask: string
    code: string
  }>
}

const InputCustom = ({ list = [] }: InputProps) => {
  const [listCurrent, setListCurrent] = useState([])
  const [flagCurrent, setFlagCurrent] = useState({})

  const handleSearchInput = useCallback(
    (value) => {
      const response = SearchString(list, value)
      if (response?.length > 0) {
        setListCurrent(response)
      } else {
        setListCurrent([])
      }
    },
    [list]
  )

  const PreferredList = listCurrent?.length > 0 ? listCurrent : list

  return (
    <S.Wrapper>
      <S.Container>
        <S.DivFlag>
          <S.DivFlagAlign>
            <S.Image src={flagCurrent?.icon} />
            <span>+{flagCurrent?.code}</span>
          </S.DivFlagAlign>
          <DownArrow className="icon-arrow" />
        </S.DivFlag>

        <InputMask
          mask={flagCurrent?.mask}
          maskChar={null}
          // error={errors.socialNumber}
        >
          {(props) => (
            <S.InputPhone name="phone" placeholder="123..." {...props} />
          )}
        </InputMask>
      </S.Container>
      <S.Box>
        <S.InputSearch
          name="search"
          type="text"
          onChange={(e) => handleSearchInput(e.currentTarget.value)}
        />
        <S.List>
          {PreferredList.map((item) => (
            <S.ListBody key={item.name} onClick={() => setFlagCurrent(item)}>
              <S.Image src={item?.icon} />
              {item.name}
            </S.ListBody>
          ))}
        </S.List>
      </S.Box>
    </S.Wrapper>
  )
}

export default InputCustom

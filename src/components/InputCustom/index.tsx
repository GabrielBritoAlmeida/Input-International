import { useState, useCallback } from 'react'

import * as S from './styles'

import { FlagUsa } from '@styled-icons/fa-solid/FlagUsa'
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow'

import SearchString from './function'

export type InputProps = {
  list: Array<{
    name: string
    icon: JSX.Element
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
            <span>+1</span>
          </S.DivFlagAlign>
          <DownArrow className="icon-arrow" />
        </S.DivFlag>
        <S.InputPhone name="phone" placeholder="123..." />
      </S.Container>
      <S.Box>
        <S.InputSearch
          name="search"
          type="text"
          onChange={(e) => handleSearchInput(e.currentTarget.value)}
        />
        <S.List>
          {PreferredList.map((item) => (
            <li key={item.name} onClick={() => setFlagCurrent(item)}>
              {item.name}
            </li>
          ))}
        </S.List>
      </S.Box>
    </S.Wrapper>
  )
}

export default InputCustom

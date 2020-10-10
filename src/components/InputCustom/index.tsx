import { useState, useCallback } from 'react'
import InputMask from 'react-input-mask'

import FlagB from '../../assets/svgs/brasil.png'

import { SearchString } from './function'

import * as S from './styles'

export type InputProps = {
  list: Array<{
    name: string
    icon: JSX.Element
    mask: string
    code: string
  }>
}

const countryDafault = {
  name: 'Brasil',
  icon: FlagB,
  code: '55',
  mask: '(99) 99999-9999'
}

const InputCustom = ({ list = [countryDafault] }: InputProps) => {
  const [open, setOpen] = useState(true)
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
    <>
      {open && <S.CloseBox onClick={() => setOpen(false)} />}
      <S.Wrapper>
        <S.Container>
          <S.DivFlag onClick={() => setOpen(!open)}>
            <S.DivFlagAlign>
              <S.Image
                src={
                  flagCurrent?.icon ? flagCurrent?.icon : countryDafault.icon
                }
              />
              <span>
                +{flagCurrent?.code ? flagCurrent?.code : countryDafault.code}
              </span>
            </S.DivFlagAlign>
            <S.IconArrow />
          </S.DivFlag>

          <InputMask
            mask={flagCurrent?.mask ? flagCurrent?.mask : countryDafault.mask}
            maskChar={null}
            // error={errors.socialNumber}
          >
            {(props) => (
              <S.InputPhone name="phone" placeholder="123..." {...props} />
            )}
          </InputMask>
        </S.Container>

        <S.Box isOpen={open}>
          <S.AlignSearch>
            <S.IconSearch />
            <S.InputSearch
              name="search"
              type="text"
              onChange={(e) => handleSearchInput(e.currentTarget.value)}
            />
          </S.AlignSearch>

          <S.List className="style-scroll">
            {PreferredList.map((item) => (
              <S.ListBody key={item.name} onClick={() => setFlagCurrent(item)}>
                <S.Image src={item?.icon} />
                {item.name}
              </S.ListBody>
            ))}
          </S.List>
        </S.Box>
      </S.Wrapper>
    </>
  )
}

export default InputCustom

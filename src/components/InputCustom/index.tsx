import { useState, useCallback } from 'react'
import InputMask from 'react-input-mask'

import FlagB from '../../assets/svgs/brasil.png'

import { SearchString } from './function'

import * as S from './styles'

export type InputProps = {
  list: Array<{
    name: string
    icon: string
    mask: string
    code: string
  }>
  typeInput?: 'default' | 'filled' | 'success' | 'error' | 'disableInput'
}

const countryDefault = {
  name: 'Brasil',
  icon: FlagB,
  code: '55',
  mask: '(99) 99999-9999'
}

const InputCustom = ({
  list = [countryDefault],
  typeInput = 'default',
  ...props
}: InputProps) => {
  const [open, setOpen] = useState(false)
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
      <S.Wrapper {...props}>
        <S.Container>
          <S.DivFlag onClick={() => setOpen(!open)} typeInput={typeInput}>
            <S.DivFlagAlign typeInput={typeInput}>
              <S.Image
                typeInput={typeInput}
                src={
                  flagCurrent?.icon ? flagCurrent?.icon : countryDefault.icon
                }
              />
              <span>
                +{flagCurrent?.code ? flagCurrent?.code : countryDefault.code}
              </span>
            </S.DivFlagAlign>
            <S.IconArrow typeInput={typeInput} />
          </S.DivFlag>

          <InputMask
            mask={flagCurrent?.mask ? flagCurrent?.mask : countryDefault.mask}
            maskChar={null}
            typeInput={typeInput}
            disableInput={typeInput === 'disableInput' ? true : false}
            disabled={typeInput === 'disableInput' ? true : false}
            name="phone"
            placeholder="123..."
          >
            {(props) => (
              <S.InputPhone
                disabled={typeInput === 'disableInput' ? true : false}
                {...props}
              />
            )}
          </InputMask>
        </S.Container>

        {typeInput !== 'disableInput' && (
          <>
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
                  <S.ListBody
                    key={item.name}
                    onClick={() => setFlagCurrent(item)}
                  >
                    <S.Image src={item?.icon} role="img" />
                    {item.name}
                  </S.ListBody>
                ))}
              </S.List>
            </S.Box>
          </>
        )}
      </S.Wrapper>
    </>
  )
}

export default InputCustom

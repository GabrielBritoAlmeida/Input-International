import * as S from './styles'

import { FlagUsa } from '@styled-icons/fa-solid/FlagUsa'
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow'

export type InputProps = {
  list: Array<{
    name: string
  }>

}

const InputCustom = ({list=[]}: InputProps) => (
  <S.Wrapper>
    {console.log("list", list)}
    <S.Container>
      <S.DivFlag>
        <S.DivFlagAlign>
          <FlagUsa className="icon-flag" />
          <span>+1</span>
        </S.DivFlagAlign>
        <DownArrow className="icon-arrow" />
      </S.DivFlag>
      <S.InputPhone name="phone" placeholder="123..." />
    </S.Container>
    <S.Box>
      <S.InputSearch name='search' type="text"/>
      <S.List>
      {list.map(({name})=> (
        <li key={name}>{name}</li>
      ))}
      </S.List>
    </S.Box>
  </S.Wrapper>
)



export default InputCustom

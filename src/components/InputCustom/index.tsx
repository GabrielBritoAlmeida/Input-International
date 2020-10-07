import * as S from './styles'

import { FlagUsa } from '@styled-icons/fa-solid/FlagUsa'
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow'

export type InputProps = {}

const InputCustom = () => (
  <S.Wrapper>
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
  </S.Wrapper>
)

export default InputCustom

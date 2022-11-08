import { useFormContext } from 'react-hook-form'

import {
  FormContainer,
  InputBase,
  InputBaseFlex,
  InputBaseFlexMarginR,
  InputBaseMarginR,
  InputBaseMinW,
  FormFlex,
} from './styles'

export function FormCheckout() {
  const { register } = useFormContext()

  return (
    <FormContainer>
      <InputBase id="cep" type="text" placeholder="CEP" {...register('cep')} />
      <FormFlex>
        <InputBaseFlex type="text" placeholder="Rua" {...register('street')} />
      </FormFlex>
      <FormFlex>
        <InputBaseMarginR
          type="text"
          placeholder="Número"
          {...register('number')} /*, { valueAsNumber: true })} */
        />
        <InputBaseFlex
          type="text"
          placeholder="Complemento"
          {...register('complement')}
        />
      </FormFlex>
      <FormFlex>
        <InputBaseMarginR
          type="text"
          placeholder="Bairro"
          {...register('district')}
        />
        <InputBaseFlexMarginR
          type="text"
          placeholder="Cidade"
          {...register('city')}
        />
        <InputBaseMinW type="text" placeholder="UF" {...register('uf')} />
      </FormFlex>
    </FormContainer>
  )
}

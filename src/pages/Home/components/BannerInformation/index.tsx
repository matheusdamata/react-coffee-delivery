import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { IconContainer, IconContent, IconText } from './styles'

interface BannerInformationProps {
  nameIcon: 'ShoppingCart' | 'Package' | 'Timer' | 'Coffee' | string
  color: 'yellowDark' | 'yellow' | 'baseSubTitle' | 'purple'
  description: string
}

export function BannerInformation({
  nameIcon,
  color,
  description,
}: BannerInformationProps) {
  return (
    <IconContainer>
      <IconContent bgColor={color}>
        {nameIcon === 'ShoppingCart' && (
          <ShoppingCart size={15} weight="fill" />
        )}
        {nameIcon === 'Package' && <Package size={15} weight="fill" />}
        {nameIcon === 'Timer' && <Timer size={15} weight="fill" />}
        {nameIcon === 'Coffee' && <Coffee size={15} weight="fill" />}
      </IconContent>
      <IconText>{description}</IconText>
    </IconContainer>
  )
}

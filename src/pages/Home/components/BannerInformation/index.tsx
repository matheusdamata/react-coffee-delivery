import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { IconContent } from "./styles";

interface BannerInformationProps {
  nameIcon: 'ShoppingCart' | 'Package' | 'Timer' | 'Coffee' | string
  color: 'yellowDark' | 'yellow' | 'baseSubTitle' | 'purple'
  description: string
}

export function BannerInformation({ nameIcon, color, description }: BannerInformationProps) {
  return (
    <div>
      {nameIcon ===  'ShoppingCart' && 
        <IconContent bgColor={color}>
          <ShoppingCart  size={15}  weight="fill" />
          <div>{description}</div>
        </IconContent>
      }
      {nameIcon ===  'Package' && 
        <IconContent bgColor={color}>
          <Package size={15} weight="fill" />
          <div>{description}</div>
        </IconContent>
      }
      {nameIcon ===  'Timer' && 
        <IconContent bgColor={color}>
           <Timer size={15} weight="fill" />
           <div>{description}</div>
           <div>{}</div>
        </IconContent>
      }
      {nameIcon === 'Coffee' &&
        <IconContent bgColor={color}>
          <Coffee size={15} weight="fill" />
          <div>{description}</div>
        </IconContent>
      }
    </div>
  )
}
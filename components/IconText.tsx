import React, { ReactComponentElement } from 'react'
import { IconType } from 'react-icons/lib'

type Props = {
  children?: React.ReactNode
}

const IconText: React.FC<Props> = ({ children }) => {
  return (
    <div className="absolute top-[50px] text-sm md:text-md pt-1 invisible group-hover:visible duration-300 transition-all opacity-0 group-hover:opacity-100 text-center">
      {children}
    </div>
  )
}

export default IconText

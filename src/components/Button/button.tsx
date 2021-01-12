import React from 'react'
import className from 'classnames'

export enum ButtonSize {
    large = 'lg',
    Small = 'sm'
}

export enum BurronType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

interface BaseButtonProps {
    className?: string,
    disabled?: boolean,
    siez?: BurronType,
    btnType?: BurronType,
    children?: React.ReactNode
}

const Button: React.FC<BaseButtonProps> = (props) => 
const { btnType,
    disabled,
    siez,
    children
} = this.props.
}
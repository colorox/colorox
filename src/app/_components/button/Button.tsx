import React, { forwardRef } from 'react'

export interface ButtonProps {
    children?: React.ReactNode,
    variant?: 'primary' | 'secondary' | 'tertiary',
    onClick?: () => void,
    disabled?: boolean,
    size?: 'small' | 'medium' | 'large',
}

export type Ref = HTMLButtonElement;


export const Button = forwardRef<Ref, ButtonProps>(({
    children,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    onClick,
}, ref) => {
    return (
        <button
            ref={ref}
            className={['btn', `btn--${size}`, `btn--${variant}`].join(' ')}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
})


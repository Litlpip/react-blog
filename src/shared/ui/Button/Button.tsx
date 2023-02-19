import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

type ButtonTheme = 'clear'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, theme = 'clear', ...otherProps } = props
    return (
        <button
            className={classNames(styles.Button, {}, [
                className,
                styles[theme],
            ])}
            {...otherProps}
        ></button>
    )
}

import { classNames } from 'shared/lib/classNames/classNames'
import styles from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'
import { FC } from 'react'

export enum AppLinkTheme {
    Primary = 'primary',
    Secondary = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        children,
        theme = AppLinkTheme.Primary,
        ...otherProps
    } = props
    return (
        <Link
            className={classNames(styles.AppLink, {}, [
                className,
                styles[theme],
            ])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}

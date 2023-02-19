import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={classNames(styles.links)}>
                <AppLink
                    theme={AppLinkTheme.Secondary}
                    className={classNames(styles.mainLink)}
                    to={'/'}
                >
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.Secondary} to={'/about'}>
                    Информация
                </AppLink>
            </div>
        </div>
    )
}

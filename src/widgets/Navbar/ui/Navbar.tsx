import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={classNames(styles.links)}>
                <AppLink
                    theme={AppLinkTheme.Secondary}
                    className={classNames(styles.mainLink)}
                    to={'/'}
                >
                    {t('Main page')}
                </AppLink>
                <AppLink theme={AppLinkTheme.Secondary} to={'/about'}>
                    {t('About page')}
                </AppLink>
            </div>
        </div>
    )
}

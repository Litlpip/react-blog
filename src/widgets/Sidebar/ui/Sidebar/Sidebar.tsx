import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            className={classNames(
                styles.Sidebar,
                { [styles.collapsed]: collapsed },
                [className],
            )}
        >
            <Button onClick={onToggle}>toggle</Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    );
};

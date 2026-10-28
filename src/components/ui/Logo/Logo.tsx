import { cx } from '../../../utils/cx'
import styles from './Logo.module.scss'

type Props = { light?: boolean; iconOnly?: boolean; className?: string }


export function Logo({ light, iconOnly, className }: Props) {
    return (
        <span className={cx(styles.logo, light && styles.light, className)}>
            <img className={styles.mark} src="/brand/logo-mark.png" alt="" width={256} height={256} draggable={false} />
            {!iconOnly && <span className={styles.word}>Tailix</span>}
        </span>
    )
}

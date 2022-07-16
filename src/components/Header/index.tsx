import Link from 'next/link'
import styles from './header.module.scss'

export function Header() {
  return (
    <header className={styles.headerPost}>
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="Space Traveling" />
        </a>
      </Link>
    </header>
  );
}
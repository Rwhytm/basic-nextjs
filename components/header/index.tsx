import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Header.module.css'

export default function Header() {
    return (
        <>
            <header className={styles.container}>
                <ul className={styles.list}>
                    <li className={styles.item}><Link href={'/'}><a>Home</a></Link></li>
                    <li className={styles.item}><Link href={'/blog'}><a>blog</a></Link></li>
                    <li className={styles.item}><Link href={'/users'}><a>user</a></Link></li>

                </ul>
            </header>
        </>
    )
}

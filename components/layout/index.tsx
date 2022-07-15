import React, { Children, ReactNode } from 'react'
import Header from '../header'
import Footer from '../footer'
import styles from './Layout.module.css'
import Head from 'next/head'

interface LayoutProps {
    children: ReactNode
    titlepage: string;
}
export default function Layout
    (props: LayoutProps) {
    const { children, titlepage, } = props
    return (
        <>
            <Head>
                <title>NextJS Basic | {titlepage}</title>
                <meta name="description" content="website NextJS Basic" />
            </Head>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>{children}</div>
                <Footer />
            </div>
        </>
    )
}

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <header>
        <ul>
          <li><Link href={'/'}><a>Home</a></Link></li>
          <li><Link href={'/blog'}><a>blog</a></Link></li>
          <li><Link href={'/user'}><a>user</a></Link></li>

        </ul>
      </header>
    </>
  )
}

export default Home

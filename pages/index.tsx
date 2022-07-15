import type { NextPage } from 'next'
import Layout from '../components/layout'
import Image from 'next/image'
const Home: NextPage = () => {
  return (
    <Layout titlepage='Home Page'>

      <Image src={'/images/rename.jpg'} width={200} height={200} alt='profile'></Image>
      <h1>Raju Wahyudi Pratama</h1>
    </Layout>
  )
}

export default Home

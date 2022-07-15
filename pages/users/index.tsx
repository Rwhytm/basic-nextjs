import React from 'react'
import { json } from 'stream/consumers';
import Layout from '../../components/layout'
import styles from '../../styles/User.module.css'

interface UsersProps {
    dataUser: Array<any>;
}
import { useRouter } from 'next/router';


export default function Users(props: UsersProps) {
    const { dataUser } = props;
    const router = useRouter();
    return (
        <Layout titlepage='User Page'>
            {
                dataUser.map((user) => (
                    <div className={styles.card} key={user.id} onClick={() => router.push(`/users/${user.id}`)}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>

                ))
            }
        </Layout>
    )
}


export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUser = await res.json();
    return {
        props: {
            dataUser: dataUser,
        }
    }
}

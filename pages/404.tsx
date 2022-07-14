import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function NotFound() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => { router.push('/') }, 2000)
    })
    return (
        <div>
            <h1 className='title-not-found'>Oooooops....</h1>
            <h1 className='title-not-found'>Halaman yang anda cari tidak ditemukan</h1>
        </div>
    )
}

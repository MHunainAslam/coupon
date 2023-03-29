import Spinner from '@/components/Spinner';
import { APP_KEY, APP_URL } from '@/config';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const footerpages = () => {
    const [pages, setpages] = useState({})
    const [loading, setloading] = useState(true);
    const seasonslug = useRouter()
    let slug = seasonslug?.query?.slug;

    useEffect(() => {
        fetch(`${APP_URL}api/pages?key=${APP_KEY}&slug=${slug}`).then(res => res.json()).then((dta) => {
            setpages(dta);
            setloading(false)
        }).catch(err => {
            setloading(false)
        })
    }, [slug])

    if (loading) return <div className='bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1'><Spinner /></div>
 
    return (
        <>
            <div className='container my-5'>
                <h2 className='my-3 fw-bolder' >{pages?.data?.name}</h2>
                <div dangerouslySetInnerHTML={{ __html: pages?.data?.description }}></div> 
            </div>
        </>
    )
}

export default footerpages
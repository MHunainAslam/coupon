import Storedetail from '@/pages/Storedetail';
import { useRouter } from 'next/router'
import React from 'react'

const slug = () => {
    const dta = useRouter()
    let slug = dta?.query?.slug;

    return (
        <div>
            <Storedetail /> 
        </div>
    )
}

export default slug


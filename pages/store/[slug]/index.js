import Favoritebrands from '@/components/Favoritebrands';
import Storedetail from '@/pages/Storedetail';
import { useRouter } from 'next/router'
import React from 'react'

const slug = ({data}) => {
    
    const dta = useRouter()
    let slug = dta?.query?.slug;

    return (
        <div>
            <Storedetail />
            <Favoritebrands styledata={data} />
        </div>
    )
}

export default slug


import { APP_URL, APP_KEY } from '@/config'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import Spinner from './Spinner'


const Favoritebrands = ({ styledata }) => {

    const [brands, setbrands] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`${APP_URL}api/category?key=${APP_KEY}&paginate=32`).then(res => res.json()).then((dta) => {
            setbrands(dta)
            // toast.success('Slider fetch successfully!');
            setLoading(false);
        }).catch(err => {
            toast.error('Something went wrong!');
            setLoading(false);
            setError(true);
        })
    }, [])


    // const favorite = [
    //     "Expire Invalid",
    //     "Expire Invalid",
    //     "Expire Invalid",
    //     "Expire Invalid",
    //     "Expire Invalid",
    //     "Expire Invalid",
    //     "Expire Invalid",
    //     "Expire Invalid",
    //     "Expire Invalid",
    //     "Expire Invalid",

    // ]
    return (
        <>
        
            <div className='container py-5'>
                <h3 className='fw-500 head1 '> {styledata.Style === 1 ? "CODES FOR YOUR FAVOURITE BRANDS" : "Shop Your Desired Categories"} </h3>
                <div className="row bg-white py-3 ">
                    {brands?.data?.map(item => <div className="col-6 col-md-3 my-2 fav-brand-coupon"> <Link href='#'> {item.name} </Link>  </div>)}
                </div>
            </div>

        </>
    )
}

export default Favoritebrands
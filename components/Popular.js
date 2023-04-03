
// import Image from 'next/image'
import Link from 'next/link'
import StoreItem from './StoreItem'
import React, { useEffect, useState } from 'react'
// import Spinner from './Spinner'
import { APP_URL, APP_KEY } from '@/config'
import Spinner from './Spinner'



const Popular = ({ styledata }) => {

    const [loading, setLoading] = useState(true);
    const [err, setError] = useState(false);
    const [stores, setStores] = useState([]);
    const [img, setImg] = useState('');
 
    useEffect(() => {
        // fetch(`${APP_URL}api/store?key=${APP_KEY}&graph=popular${styledata.Style === 1 ? '&paginate=28' : ''}`).then(res => res.json()).then((stores) => {
        fetch(`${APP_URL}api/store?key=${APP_KEY}&graph=popular`).then(res => res.json()).then((stores) => {
            // setStores(styledata.Style === 1 ? stores?.data : stores);
            setStores(stores);
            setImg(stores?.url);
            setLoading(false);
            // setImg(popular.url)
        }).catch(err => {
            // setLoading(false);
            setError(true);
        })
    }, [])
    // popular?.map(item => {
    //     console.log(x + '/' + item.media);
    // })


    return (
        <>
            <div className="container pt-5">
                <h3 className='head1'>
                    {styledata.Style === 1 ? " Most Popular Stores" : "Your Most Favorite Stores"}
                </h3>
                <div className="row p-2">
                    {stores?.data?.map((item) => {
                        return <StoreItem item={item} img={img} data={styledata} />
                    })}
                </div>
                {/* {styledata.Style === 1 ?
                    <div className="col-12 text-center my-3">
                        <Link href='/all-stores' className={`p-2 button  ${styledata?.Style === 1 ? 'button-primary' : 'button-secondary'}`}>View All</Link>
                    </div>
                    :
                    ''} */}
            </div>

        </>

    )
}

export default Popular

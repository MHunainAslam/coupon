
// import Image from 'next/image'
import Link from 'next/link'
import StoreItem from './StoreItem'
import React, { useEffect, useState } from 'react'
// import Spinner from './Spinner'
import { APP_URL, APP_KEY } from '@/config'
import { toast } from 'react-hot-toast'
import Spinner from './Spinner'



const Popular = ({ styledata }) => {

    const [loading, setLoading] = useState(true);
    const [err, setError] = useState(false);
    const [stores, setStores] = useState([]);
    // const [img, setImg] = useState('');

    useEffect(() => {

        fetch(`${APP_URL}api/store?key=${APP_KEY}&graph=popular&paginate=28`).then(res => res.json()).then((stores) => {
            setStores(stores)
            // toast.success('Slider fetch successfully!');
            setLoading(false);
            // setImg(popular.url)
        }).catch(err => {
            toast.error('Something went wrong!');
            // setLoading(false);
            setError(true);
        })
    }, [])
    console.log("popular  ", stores);
    // popular?.map(item => {
    //     console.log(x + '/' + item.media);
    // })
    const images = [
        { url: 'https://morecouponcode.com/adminpanel/assets/images/store/Audiobooksnow%20coupon%20code.png', title: 'hello', slug: "hello-world" },
        { url: 'https://morecouponcode.com/adminpanel/assets/images/store/bby.PNG', title: 'hello', slug: "hello-world", },
        { url: 'https://morecouponcode.com/adminpanel/assets/images/store/bannar.PNG', title: 'hello', slug: "hello-world" },
        { url: 'https://morecouponcode.com/adminpanel/assets/images/store/buty.PNG', title: 'hello', slug: "hello-world" },
        { url: 'https://morecouponcode.com/adminpanel/assets/images/store/amsety-coupons.PNG', title: 'hello', slug: "hello-world" },
        { url: 'https://morecouponcode.com/adminpanel/assets/images/store/Body%20Guardz%20LOGO.png', title: 'hello', slug: "hello-world" },
        { url: 'https://morecouponcode.com/adminpanel/assets/images/store/best%20of%20signs-coupon-codes.PNG', title: 'hello', slug: "hello-world" },
        { url: 'https://morecouponcode.com/adminpanel/assets/images/store/Body%20Guardz%20LOGO.png', title: 'hello', slug: "hello-world" },
        { url: 'https://morecouponcode.com/adminpanel/assets/images/store/Koio%20LOGO.PNG', title: 'hello', slug: "hello-world" },
        { url: 'https://morecouponcode.com/adminpanel/assets/images/store/Lancer%20Skincare.PNG', title: 'hello', slug: "hello-world" },
        { url: 'https://morecouponcode.com/adminpanel/assets/images/store/son.PNG', title: 'hello', slug: "hello-world" },
        { url: 'https://morecouponcode.com/adminpanel/assets/images/store/coldesnia%20LOGO.png', title: 'hello', slug: "hello-world" },

    ]
    return (
        <>
            <div className="container pt-5">
                <h3 className='head1'>
                    {styledata.Style === 1 ? " Most Popular Stores" : "Your Most Favorite Stores"}
                </h3>
                <div className="row">
                    {stores?.data?.data?.map((item) => {
                        return <StoreItem item={item} img={stores?.url} data={styledata} />
                    })}
                </div>
                {styledata.Style === 1 ?
                    <div className="col-12 text-center my-3">
                        <Link href='/all-stores' className={`p-2 button  ${styledata?.Style === 1 ? 'button-primary' : 'button-secondary'}`}>View All</Link>
                    </div>
                    :
                    ''}
            </div>
            
        </>
             
    )
}

export default Popular

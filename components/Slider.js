import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import img1 from '../public/assets/slider/apparel-promozons-01.jpg'
import img2 from '../public/assets/slider/Memoria-Day-Sale-morecouponcode.png'
import memorialslider from '../public/assets/slider/Happy-Memorial Day-couponive.png'
import Spinner from './Spinner'
import { APP_URL, APP_KEY } from '@/config'
import { toast } from 'react-hot-toast'


const Slider = ({ data }) => {

    const [loading, setLoading] = useState(true);
    const [err, setError] = useState(false);
    const [slider, setSlider] = useState([]);
    const [img, setImg] = useState();


    // const slider = await (await fetch(`${APP_URL}api/slider?key=${APP_KEY}`)).json();

    useEffect(() => {


        fetch(`${APP_URL}api/slider?key=${APP_KEY}`).then(res => res.json()).then((slider) => {
            setSlider(slider.data)
            // toast.success('Slider fetch successfully!');
            setLoading(false);
            setImg(slider.url)
        }).catch(err => {
            toast.error('Something went wrong!');
            setLoading(false);
            setError(true);
        })
    }, [])
    slider?.map(item => {
        console.log(img + '/' + item.media);
    })
    return (
        <>
            {data.Style === 1 ?
                <div id="carouselExampleControlsNoTouching" class="carousel slide slider-css" data-bs-touch="false">
                    <div class="carousel-inner">
                        {
                            err ?
                                <div class="carousel-item active h-100">
                                    <p className="mb-0 w-100 text-center">Someething went wrong</p>
                                </div>
                                :
                                slider?.map(item => {
                                    return <div key={item.id} class="carousel-item active h-100">
                                        <Image src={`${img + '/' + item.media}`} class="d-block w-100 position-relative" fill={true} alt="..." />
                                    </div>
                                })
                        }


                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                :
                <div className="container-fluid bg-white">
                    <div className="container">
                        <Image src={memorialslider} className="w-100 h-100" />
                    </div>
                </div>
            }

        </>
    )
}

export default Slider

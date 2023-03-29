import Image from 'next/image'
import logo from '@/public/assets/logo.png'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import country from '@/pages/country/[slug]'
import { APP_KEY, APP_URL } from '@/config'

const Header1 = ({ data }) => {

    const [category, setcategory] = useState()
    const [err, setError] = useState(false);
    const [season, setseason] = useState()
    const [coupons, setcoupons] = useState()
    const [country, setcountry] = useState()

    useEffect(() => {
        fetch(`${APP_URL}api/category?key=${APP_KEY}&paginate=10`).then(res => res.json()).then((dta) => {
            setcategory(dta)
        }).catch(err => {
            setError(true);
        })
        fetch(`${APP_URL}api/coupon_type?key=${APP_KEY}`).then(res => res.json()).then((dta) => {
            setcoupons(dta)
        }).catch(err => {
            setError(true);
        })
        fetch(`${APP_URL}api/season?key=${APP_KEY}&paginate=10`).then(res => res.json()).then((dta) => {
            setseason(dta)
        }).catch(err => {
            setError(true);
        })
        fetch(`${APP_URL}api/country?key=${APP_KEY}`).then(res => res.json()).then((dta) => {
            setcountry(dta)
        }).catch(err => {
            setError(true);
        })
    }, [])

    // const category = [
    //     'Apparel and Accessories', 'Arts and Entertainment ', 'Business'
    // ]
    // const coupons = [
    //     'Coupon Code ', 'Free Gift', 'Discount'
    // ]
    // const season = [
    //     'Back to school ', 'Cyber Monday', 'Discount'
    // ]
    // const country = [
    //     'United State ', 'United Kingdom', 'Canada'
    // ]
    // console.log(data); 



    const [searchQuery, setSearchQuery] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [query, setQuery] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = (e) => {

        setQuery(e);

        if (e.length > 1) {

            setIsActive(true);
            setIsLoading(true);
            fetch(`${APP_URL}api/store?key=${APP_KEY}&search=${e}`).then(res => res.json()).then(results => {

                let query = [];

                results?.data?.map(item => query.push({ name: item.name, slug: item.slug }))

                setIsLoading(false);

                setSearchQuery(query)

            })
        }
        else {
            setIsLoading(false);
            setIsActive(false);
            setSearchQuery([])
        }
    }
    
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-header">
                <div className="container-fluid">
                    <Link className="navbar-brand " href="/">
                        <Image src={data?.url + "/" + data?.logo?.header || logo} alt="" className={'position-relative my-1 header-logo w-100'} fill={true} />
                    </Link>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-2 mb-2 mb-lg-0 nav-css ">
                            <li className="nav-item ">
                                <Link className="nav-link active text-header" aria-current="page" href="/all-stores">Stores</Link >
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle  text-header" href="/category">
                                    Category
                                </Link>
                                <ul className="dropdown-menu rounded-0">
                                    {category?.data?.map((cat) => {
                                        return <li ><Link className="dropdown-item dropdown-item-hov " href={`/category/${cat.slug}`}>{cat.name}</Link >
                                        </li>
                                    })}
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-header" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Coupons
                                </Link >
                                <ul className="dropdown-menu rounded-0">
                                    {coupons?.map((coupondd) => {
                                        return <li ><Link className="dropdown-item dropdown-item-hov" href={`/coupon/${coupondd.slug}`}>{coupondd.name}</Link>
                                        </li>

                                    })}
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-header" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Season
                                </Link >
                                <ul className="dropdown-menu rounded-0">
                                    {season?.data?.map((seasondd) => {
                                        return <li ><Link className="dropdown-item dropdown-item-hov" href={`/season/${seasondd.slug}`}>{seasondd.name}</Link>
                                        </li>

                                    })}
                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-header" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Country
                                </Link >
                                <ul className="dropdown-menu rounded-0">
                                    {country?.map((countrydd) => {
                                        return <li ><Link className="dropdown-item dropdown-item-hov" href={`/country/${countrydd.slug}`}>{countrydd.name}</Link>
                                        </li>

                                    })}
                                </ul>
                            </li>
                            <li className="nav-item dropdown memorial-btn">
                                <Link href={`${data.header.button_url}`} className='button button-primary'>{data.header.button_text}</Link >
                            </li>

                        </ul>
                        <form className="d-flex mx-auto position-relative col-md-3 flex-column" role="search">
                            <input className="form-control me-2 rounded-0 " type="search" placeholder="Search..." aria-label="Search" onChange={(e) => handleSearch(e.target.value)} />
                            <div class="w-100 top-100 pl-0 position-absolute header-search">
                                {
                                    isActive &&

                                        isLoading ?

                                        <div class="list-group" ><a class="list-group-item list-group-item-action rounded-0">Loading...</a></div>

                                        :

                                        searchQuery.length ?
                                            searchQuery.map(item => {
                                                return <div class="list-group" ><Link href={`/store/${item.slug}`} class="list-group-item list-group-item-action rounded-0">{item.name}</Link></div>
                                            })

                                            :

                                            query.length ? <div class="list-group" ><a class="list-group-item list-group-item-action rounded-0">No Result Found</a></div> : ''
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}
<style>

</style>
export default Header1

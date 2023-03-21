import Image from 'next/image'
import logo from '@/public/assets/logo.png'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import country from '@/pages/country/[slug]'

const Header1 = ({ data }) => {

    const category = [
        'Apparel and Accessories', 'Arts and Entertainment ', 'Business'
    ]
    const coupons = [
        'Coupon Code ', 'Free Gift', 'Discount'
    ]
    const season = [
        'Back to school ', 'Cyber Monday', 'Discount'
    ]
    const country = [
        'United State ', 'United Kingdom', 'Canada'
    ]
console.log(data);

    return (
        <>

            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        <Image src={data?.url + "/" + data?.logo?.header || logo} alt="" className={'position-relative my-1 '} width={300} height={50}/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-2 mb-2 mb-lg-0 nav-css ">
                            <li className="nav-item ">
                                <Link className="nav-link active" aria-current="page" href="/all-stores">Stores</Link >
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </Link >
                                <ul className="dropdown-menu rounded-0">
                                    {category.map((cat) => {
                                        return <li ><Link className="dropdown-item dropdown-item-hov" href={`/category/${cat}`}>{cat}</Link >
                                        </li>

                                    })}

                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Coupons
                                </Link >
                                <ul className="dropdown-menu rounded-0">
                                    {coupons.map((coupondd) => {
                                        return <li ><Link className="dropdown-item dropdown-item-hov" href={`/coupon/${coupondd}`}>{coupondd}</Link>
                                        </li>

                                    })}
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Coupons
                                </Link >
                                <ul className="dropdown-menu rounded-0">
                                    {season.map((seasondd) => {
                                        return <li ><Link className="dropdown-item dropdown-item-hov" href={`/season/${seasondd}`}>{seasondd}</Link>
                                        </li>

                                    })}
                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Country
                                </Link >
                                <ul className="dropdown-menu rounded-0">
                                    {country.map((countrydd) => {
                                        return <li ><Link className="dropdown-item dropdown-item-hov" href={`/country/${countrydd}`}>{countrydd}</Link>
                                        </li>

                                    })}
                                </ul>
                            </li>
                            <li className="nav-item dropdown memorial-btn">
                                <Link href='' className='button button-primary'>Memorial Day</Link >
                            </li>

                        </ul>
                        <form className="d-flex ms-5" role="search">
                            <input className="form-control me-2 rounded-0" type="search" placeholder="Search..." aria-label="Search" />
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

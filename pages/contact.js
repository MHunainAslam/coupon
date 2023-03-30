import { APP_KEY, APP_URL } from '@/config';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';

const contact = () => {

    const [isLoading, setIsLoading] = useState(false);

    const handleContact = (e) => {
        e.preventDefault();

        setIsLoading(true);

        let name = e.target.elements['name'].value, email = e.target.elements['email'].value, message = e.target.elements['message'].value;
        fetch(`${APP_URL}api/contact`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ name, email, message, key: APP_KEY })
        }).then(res => res.json()).then((data) => {
            setIsLoading(false);
             toast.success(data.message)
        }).catch(err => {
            console.error(err);
            setIsLoading(false);
             toast.error('Something went wrong!')
        });
    }
    
    return (
        <>
            <div className="page_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12 my-5">
                            <div className="bg-white">
                                <div className="row">
                                    <div className="col-lg-12 col-md-7 order-md-last d-flex align-items-stretch">
                                        <div className="w-100 p-md-5 p-4">
                                            <h3 className="mb-4 txt-dark">Contact Us</h3>
                                            <form onSubmit={handleContact}>
                                                <input type="hidden" name="token" value="55d1cbfb801169a3188f6f7d742b6e60" />
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="label" for="name">Full Name</label>
                                                            <input type="text" className="form-control rounded-0" name="name" id="name" placeholder="Name" required="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="label" for="email">Email Address</label>
                                                            <input type="email" className="form-control rounded-0" name="email" id="email" placeholder="Email" required="" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12 mt-3">
                                                        <div className="form-group">
                                                            <label className="label" for="#">Message</label>
                                                            <textarea name="message" className="form-control rounded-0" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <button type="submit" className="button button-primary mt-3 px-3 py-2">
                                                                {isLoading ? 'Submitting...' : 'Submit'}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default contact
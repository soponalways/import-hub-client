import React, { useState } from 'react';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault(); 
        toast.success("Check you inbox please")
    }
    return (
        <div className='min-h-screen min-w-screen bg-base-200 flex justify-center items-center px-2 md:px-4 space-y-4'>
            <div className='w-full max-w-md p-8 space-y-6 bg-base-100 rounded-2xl shadow-lg hover:shadow-xl'>
                <h1 className='text-3xl font-bold text-center text-primary'>Forgot your password</h1>
                <div>
                    <form onSubmit={handleSubmit} className='space-y-4'>
                        {/* Email */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        {/* Send Code Button */}
                        <div>
                            <button type='submit' className='btn btn-outline hover:btn-primary'>Send Request Email</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Policy",
    description: "This is our policy page",
    openGraph:{
        type:"website",
        url:"https://ecommerce.sovanthron.com/",
        title:"Create Next App",
        description: 'An e-commerce website is one that allows people to buy and sell goods.',
        images:"",
    },
}

export default function PolicyPage() {
    return (
        <main className='container mx-auto mt-5 mb-10 px-4 sm:px-6 lg:px-8 bg-orange-200 '>
            <h1 className='text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-10'>Our Policy</h1>
            <ul className='list-disc pl-5'>
                <li className='mt-10'>
                    <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-black mb-4'>Privacy Policy</h2>
                    <p className='leading-7'>Protecting your privacy is of utmost importance to us. Our Privacy Policy outlines how we collect, use, and safeguard your personal information. Rest assured that any data collected is handled securely and used only for the purposes outlined in our policy.
                    </p>

                </li>
                <li className='mt-10'>
                    <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-black mb-4'>Terms of Service:</h2>
                    <p className='leading-7'>By using our website and purchasing products from us, you agree to abide by our Terms of Service. These terms govern the use of our website, payment procedures, shipping and delivery, returns and refunds, and intellectual property rights.</p>
                </li>
                <li className='mt-10'>
                    <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-black mb-4'>Privacy Policy</h2>
                    <p className='leading-7'>We value your privacy and are committed to protecting your personal information. We only collect information necessary to process your order and do not share this information with any third parties.</p>
                </li>

                <li className='mt-10'>
                    <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-black mb-4'>Shipping and Delivery Policy:</h2>
                    <p className='leading-7'>We strive to deliver your orders promptly and efficiently. Our Shipping and Delivery Policy provides details on shipping methods, estimated delivery times, and any associated costs. Please review this policy for information on shipping restrictions and order tracking options.</p>
                </li>
                <li className='mt-10 mb-10'>
                    <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-black mb-4'>Returns and Refunds Policy:</h2>
                    <p className='leading-7'>We take the security of your payment information seriously. Our Payment Security Policy explains the measures we have in place to protect your sensitive data during transactions, ensuring a safe and secure shopping experience.</p>
                </li>

                <li className='mt-10 mb-10'>
                    <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-black mb-4'>Contact Us:</h2>
                    <p className='leading-7'>If you have any questions, concerns, or feedback regarding our policies or your shopping experience, please don't hesitate to contact us. Our dedicated customer support team is here to assist you and address any inquiries promptly.</p>
                </li>

            </ul>
        </main>
    )
}
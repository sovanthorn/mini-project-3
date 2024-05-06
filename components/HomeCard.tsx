import React from 'react'

export default function HomeCard() {
  return (
    <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
            <div className="text-center">
                <h2 className="font-semibold dark:text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">Follow Us on Website and instagram</h2>
                <p className="font-normal text-base leading-6 dark:text-gray-400 text-gray-600 mt-4 lg:w-5/12 md:w-9/12 mx-auto">Follow us on instagramto know more benefic about skincare and product</p>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 mt-10">
                <div className="relative group">
                    <img src="img7.png" alt="" className="lg:block hidden w-full" />
                    <img src="https://i.ibb.co/mNPBgQN/pexels-alana-sousa-3294250-1-1.png" alt="A picture of a sitting dog" className="lg:hidden block w-full" />
                    <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/social-1-svg1.svg" alt="" />
                    </div>
                </div>
                <div className="relative group">
                    <img src="img9.png" alt="" className="lg:block hidden w-full" />
                    <img src="https://i.ibb.co/YD8nNMR/pexels-leah-kelley-1449667-1-1.png" alt="Smiling Girl" className="lg:hidden block w-full" />
                    <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/social-1-svg1.svg" alt="instagram" />
                    </div>
                </div>
                <div className="relative group">
                    <img src="img10.png" alt="Men Posing" className="lg:block hidden w-full" />
                    <img src="https://i.ibb.co/myWxfSm/pexels-spencer-selover-775358-1-1.png" alt="Men Posing" className="lg:hidden block w-full" />
                    <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/social-1-svg1.svg" alt="instagram" />
                    </div>
                </div>
                <div className="relative group">
                    <img src="img9.png" alt="" className="lg:block hidden w-full" />
                    <img src="https://i.ibb.co/5cDQZ2r/pexels-chevanon-photography-1108099-1-1.png" alt="2 puppies" className="lg:hidden block w-full" />
                    <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/social-1-svg1.svg" alt="instagram" />
                    </div>
                </div>
            </div>
        </div>
  );
}

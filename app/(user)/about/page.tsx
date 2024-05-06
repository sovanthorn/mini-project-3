import React from "react";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "AboutUs",
    description: "This is our aboutUs page",
    openGraph:{
        type:"website",
        url:"https://ecommerce.sovanthron.com/",
        title:"Create Next App",
        description: 'An e-commerce website is one that allows people to buy and sell goods.',
        images:"",
    },
}

export default function about() {
  return (
    <main>
      <section className="flex flex-col justify-center items-center py-28 bg-[#ee827b] text-gray-100 text-center">
        <h1 className="text-3xl uppercase font-bold">About Us</h1>
        <p className="pt-10 lg:px-[350px]">
        we believe that beauty should be empowering, uplifting, and accessible to everyone. With a commitment to quality, sustainability, and customer satisfaction, we're more than just a cosmetic store—we're a destination for self-expression, self-care, and confidence enhancement.
        </p>
      </section>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative flex">
              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Why Choose Us
                </h2>

                <div className="mt-8 text-[#b73e23]">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <div>
                        <h3 className="text-sm text-gray-900">
                        Quality Products: Emphasize the exceptional quality of your products. Highlight any certifications, premium ingredients, or innovative formulations that set your cosmetics apart.
                        </h3>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10"
                      >
                        <path d="M16.881 4.345A23.112 23.112 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.593 21.593 0 0 0 1.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.593.772-2.468a17.116 17.116 0 0 1-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0 0 18 11.25c0-2.414-.393-4.735-1.119-6.905ZM18.26 3.74a23.22 23.22 0 0 1 1.24 7.51 23.22 23.22 0 0 1-1.41 7.992.75.75 0 1 0 1.409.516 24.555 24.555 0 0 0 1.415-6.43 2.992 2.992 0 0 0 .836-2.078c0-.807-.319-1.54-.836-2.078a24.65 24.65 0 0 0-1.415-6.43.75.75 0 1 0-1.409.516c.059.16.116.321.17.483Z" />
                      </svg>

                      <div>
                        <h3 className="text-sm text-gray-900">
                        Customer Satisfaction: Assure customers of a positive shopping experience. Mention your commitment to excellent customer service, easy returns, and responsive support.
                        </h3>
                      </div>
                    </li>
                    

                    <li className="flex items-start gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10"
                      >
                        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                        <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                        <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                      </svg>

                      <div>
                        <h3 className="text-sm text-gray-900">
                          Fast & Free Shopping: Enjoy the convenience of fast
                          and free shipping on all orders, ensuring your items
                          arrive promptly.
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-96">
                <img
                  alt=""
                  src="img12.png"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


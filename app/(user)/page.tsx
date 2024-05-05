"use client";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";
import { fetchUserProfile } from "@/redux/features/userProfile/userProfileSlice";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Partner from "@/components/partner/Partner";
import ProductList from "@/components/product/ProductList";
export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, []);

  // if user is not signed in
//   if (!session) {
//     return (
//       <main className="w-full h-screen flex flex-col justify-center items-center">
//         <p className="text-2xl mb-2">Not Signed In</p>
//         <button
//           className="bg-blue-600 py-2 px-6 rounded-md text-white mb-2"
//           onClick={() => signIn("google")}
//         >
//           Sign in with google
//         </button>
//         <button
//           className="bg-none border-gray-300 border py-2 px-6 rounded-md mb-2"
//           onClick={() => signIn("github")}
//         >
//           Sign in with github
//         </button>
//       </main>
//     );
//   }

  return (
    <main>
      <section className="relative  bg-[url(https://png.pngtree.com/background/20211215/original/pngtree-portrait-of-a-beautiful-woman-in-summer-with-long-hair-in-picture-image_1485253.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute max-w-[1200px] inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto  max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-rose-700">
                {" "}
                Forever Home.{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
{/*      
        <Partner />
      <section className="p-44">
      </section> */}
	  <section className="max-w-[1200px] mx-auto py-4">
		<ProductList/>
	  </section>
    </main>
  );
}

// "use client";
// import { useRouter } from "next/navigation";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { useEffect } from "react";
// import { fetchUserProfile } from "@/redux/features/userProfile/userProfileSlice";
// import { useSession, signIn, signOut } from "next-auth/react";
// import Image from "next/image";
// import { useGetProductsQuery } from "@/redux/services/product";

// export default function page() {
//   // Get products with generated hook
//     const { data, error, isLoading } = useGetProductsQuery({
//         page: 1,
//         pageSize: 10,
//     });

//   const state = useAppSelector((state) => state.auth.token);
//   console.log("Global State: ", state);

//   console.log("Data: ", data);
//   console.log("Error: ", error);
//   console.log("Is Loading: ", isLoading);

//   const { data: session } = useSession();
//   // console.log(session);
//   const router = useRouter();
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     dispatch(fetchUserProfile());
//   }, []);

//   // if user is not signed in
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

//   return (
    
//     <>
//     Successfully Login
//     </>
//   );
// }

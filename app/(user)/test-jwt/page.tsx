'use client'
import { error } from 'console';
import React, { useState } from 'react'

export default function TestJWT() {
    const [accessToken, setAccessToken]=useState("");
    const [user, setUser] = useState(null);
   

    const handleLogin = async ()=>{
        const email = "nounsovannthon@gmail.com";
        const password = "sovanthorn2802"

        fetch(process.env.NEXT_PUBLIC_API_URL + '/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({email,password}),
        }).then(res =>res.json()).then(data=>{
          console.log("Data in jwt test:", data);
          setAccessToken(data.accessToken);
          setUser(data.user);
        }).catch(error =>{
          console.log(error);
        });
    };

    // // handle create product by using rtk 
    // const handleCreateWithRTK = async()=>{

    // }
    //handle patial update
    const handlePartialUpdate = async ()=>{
      const body = {

        //will change it again when finish writing

        name :"causual wardrob update",
        
      };

      //this price will change when finish write this code

    fetch(`${process.env.NEXT_PUBLIC_DJANGO_API_URL}/api/products/${499} `,{
      method:"PATCH",
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    }).then((res)=>res.json())
    .then((data)=> {
      console.log("Data from refresh token: ", data);
            setAccessToken(data.accessToken);
    })
    .catch((error) => {
      console.log(error);
    });

    
    };
  return (
    <main className='h-screen grid place-content-center '>
      <h1 className='text-5x1'>TestJWT</h1>
      <button onClick={handleLogin} className="my-4 p-4 bg-blue-600 rounded-xl text-3xl text-gray-100">Login</button>
      <button 
      onClick={handlePartialUpdate}
       className="my-4 p-4 bg-blue-600 rounded-xl text-3xl text-gray-100">
        Partial Update
        </button>
     
      </main>
  )
}

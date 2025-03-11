import React from 'react'
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input.jsx"   
import {Button} from "@/components/ui/button"

import { Courier_Prime } from 'next/font/google'

const courierPrime = Courier_Prime({
  weight: ['400', '700'], // Specify font weights
  subsets: ['latin'], 
  display: 'swap',
})

const page = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100 {courierPrime.className}'>
      <form className='flex flex-col gap-4 p-15 w-1/4 border-black bg-white-500 rounded-xl'>
      <Label>Username</Label>
      <Input placeholder="trkrishna" type="text" id="username" name="username"/>
      <Label>Password</Label>
      <Input placeholder="****" type="password" id="password" name="password"/>
      <Button
      //  onClick={()=>{LogIn()}}
       >Login</Button>
      </form>
    </div>
  )
}

export default page
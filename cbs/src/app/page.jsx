import React from 'react'
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input.jsx"   
import {Button} from "@/components/ui/button"
const page = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
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
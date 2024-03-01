import React from 'react'
import {Label, TextInput,Button} from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3  max-w-3xl mx-auto flex-col md:flex-row">
        {/* {left} */}
        <div className="flex-1">
        <Link to="/" className='font-bold dark:text-white text-4xl'><span className='px-2 py-1 bg-red-600  rounded-lg text-white'>Blogging</span>Spot</Link>
        <p className='mt-2 font-bold'>Sign Up Now!!</p>
        </div>
        {/* {right} */}
        <div className="flex-1">
          <form >
            <div>
            <Label value="Your username"/>
            <TextInput 
            type='text'
            placeholder='username'
            id='email'/>
            </div>
            <div>
            <Label value="Your email"/>
            <TextInput 
            type='text'
            placeholder='email'
            id='username'/>
            </div>
            <div>
            <Label value="Your username"/>
            <TextInput 
            type='text'
            placeholder='username'
            id='username'/>
            </div>
            <div> 
            <Button type='submit'  className='mt-2 w-full ' color='green'>
              SignUp
            </Button>
           </div>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span className='font-semibold'>Have an account?</span>
            <Link to="/sign-in" className='text-blue-500'>Sign In</Link>
        </div>
          </div>
      </div>
    </div>
  )
}

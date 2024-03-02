import React, { useState } from 'react'
import {Label, TextInput,Button, Alert,Spinner} from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice'


export default function SignIn() {
  const navigate = useNavigate(); // Access navigate function from react-router-dom
  const [formData, setFormData] = useState({}); // State for form data
  const {loading, error: errorMessage} = useSelector(state => state.user)
  const dispatch = useDispatch();

  // Handle changes in form inputs
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value.trim()});
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if required fields are filled out
    if ( !formData.email || !formData.password)
      return dispatch(signInFailure('Please fill out all the fields'))

    try {
     dispatch(signInStart())
      // Send form data to backend API for signip
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });

      // Parse response data
      const data = await res.json();

      // Check if signup was unsuccessful
      if (data.success === false) {
        dispatch(signInFailure(data.message))
      }
      // If signup was successful and response is okay, navigate to sign-in page
      if (res.ok) {
        dispatch(signInSuccess(data))
        navigate('/');
      }
    } catch(error) {
      dispatch(signInFailure(error.message))
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row">
        {/* {left} */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-red-600 rounded-lg text-white">Blogging</span>Spot
          </Link>
          <p className="mt-2 font-bold">SignIn Now!!</p>
        </div>
        {/* {right} */}
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            
            {/* Email input */}
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            {/* Password input */}
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="abcd1243"
                id="password"
                onChange={handleChange}
              />
            </div>
            {/* Submit button with loading indicator */}
            <div>
              <Button type="submit" className="mt-2 w-full " color="green" disabled={loading}>
                {
                  loading ? (
                    <>
                    <Spinner size='sm'/>
                    <span className='pl-3'> loading ...</span>
                    </>
                  ) : 'Sign In'
                }
              </Button>
            </div>
          </form>
          {/* Sign-in link */}
          <div className="flex gap-2 text-sm mt-5">
            <span className="font-semibold">Have don't an account?</span>
            <Link to="/sign-up" className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {/* Error message */}
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

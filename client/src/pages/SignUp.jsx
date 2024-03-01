import React, { useState } from 'react'
import {Label, TextInput,Button, Alert,Spinner} from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
  const navigate = useNavigate(); // Access navigate function from react-router-dom
  const [formData, setFormData] = useState({}); // State for form data
  const [errorMessage, setErrorMessage] = useState(null); // State for error message
  const [loading, setLoading] = useState(false); // State for loading indicator

  // Handle changes in form inputs
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value.trim()});
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if required fields are filled out
    if (!formData.username || !formData.email || !formData.password)
      return setErrorMessage("Please fill out all the fields");

    try {
      setLoading(true); // Set loading state to true
      setErrorMessage(null); // Clear any previous error message

      // Send form data to backend API for signup
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });

      // Parse response data
      const data = await res.json();

      // Check if signup was unsuccessful
      if (data.success === false) {
        return setErrorMessage(data.message); // Set error message from backend
      }

      setLoading(false); // Set loading state to false

      // If signup was successful and response is okay, navigate to sign-in page
      if (res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message); // Set error message if an error occurs
      setLoading(false); // Set loading state to false
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
          <p className="mt-2 font-bold">Sign Up Now!!</p>
        </div>
        {/* {right} */}
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            {/* Username input */}
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="username"
                id="username"
                onChange={handleChange}
              />
            </div>
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
                  ) : 'Sign Up'
                }
              </Button>
            </div>
          </form>
          {/* Sign-in link */}
          <div className="flex gap-2 text-sm mt-5">
            <span className="font-semibold">Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
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

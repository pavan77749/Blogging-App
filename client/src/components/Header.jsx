import React from 'react'
import {Button, Navbar,NavbarToggle,TextInput} from 'flowbite-react'
import {Link,useLocation} from 'react-router-dom'
import {AiOutlineSearch } from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'


export default function Header() {
  const path = useLocation();
  return (
    <Navbar className="border-b-2">
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl dark:text-white font-semibold'><span className='px-2 py-1 bg-red-600  rounded-lg text-white'>Blogging</span>Spot</Link>

      <form >
        <TextInput type='text' placeholder='Search...' rightIcon={AiOutlineSearch} className='hidden lg:inline'/>
        </form>
         <Button 
         className='w-12 h-10 lg:hidden ' color='red' pill>
         <AiOutlineSearch/>
         </Button>
        
         <div className='flex gap-2'>
         <Button className='w-12 h-10 hidden sm:inline' color='red' pill>
          <FaMoon/>
         </Button>
        <Link to='/sign-in'>
          <Button className='w-22 h-10  sm:inline text-center border-none ' color='red' outline>
            Sign In
          </Button>
        </Link>
        <NavbarToggle/>
         </div>
         <Navbar.Collapse >
         < Navbar.Link active={path === '/'} as={'div'}>
         <Link to='/' >
         Home</Link>
         </Navbar.Link>
         < Navbar.Link active={path === '/about'} as={'div'}>
         <Link to='/about'>
         About</Link>
         </Navbar.Link>
         < Navbar.Link active={path === '/projects'} as={'div'}>
         <Link to='/projects'>
         Projects</Link>
         </Navbar.Link>
        </Navbar.Collapse>
      
        
    </Navbar>
  )
}

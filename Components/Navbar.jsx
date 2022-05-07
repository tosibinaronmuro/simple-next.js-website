import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Navbar() {
  return (
    <nav>
        <div className="mr-auto ml-5">
            <Image  width={'60px'} height={'60px'} src="/logo.png" alt="" />
        </div>
       <Link href='/'><a>Home</a></Link> 
       <Link href='/About'><a>About</a></Link> 
       <Link href='/Tosiron/Users'><a>Users</a></Link> 

    </nav>
  )
}
 
export default Navbar
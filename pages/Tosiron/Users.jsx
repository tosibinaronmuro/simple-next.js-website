import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Home.module.css';
 
export const getStaticProps= async ()=>{
    
 const response =await axios.get('http://jsonplaceholder.typicode.com/users');
  console.log(response)
  return{
      props:{tosiron:response.data}
  }
 
}

function Users({tosiron}) {
  return (
    <div className=''> 
    <Head>
      <title>{"Tosiron's list | Users"}</title>
    </Head>
    <h1>all users</h1>
    {tosiron.map((user)=> 
   <Link href={'/Tosiron/'+ user.id } key={user.id}>
       <a className={styles.single}>
           <h3>{user.name}</h3>
           <h4>{user.email}</h4>
       </a>
   </Link>
    )}
    
    </div>
  )
}

export default Users
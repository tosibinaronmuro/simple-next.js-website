import React from "react";
import axios from 'axios'
import  Head  from "next/head";
import  Link  from "next/link";
import { useRouter } from "next/router"
 export const getStaticPaths=async ()=>{
     const res= await axios.get('http://jsonplaceholder.typicode.com/users')

     const paths=res.data.map((item)=>{
return {
    params:{Id:item.id.toString()}
}
     })
     return {
        paths ,
        fallback:false,
     }
 }
 export const getStaticProps= async (context)=>{
    
    const id=context.params.Id
    const response =await axios.get('http://jsonplaceholder.typicode.com/users/'+ id);
     console.log(response)
     return{
         props:{tosiron:response.data}
     }
    
   }
  
   
function Details({tosiron}) {
    const router = useRouter();
  return <div>
      <Head>
          <title>{"Tosiron's list | user"}</title>
      </Head>
      
      <div className="content">
      <a className="back" onClick={()=>{router.back()}}>back</a>
          
          <h1>
              User Details 
          </h1>
          <hr />
          <h2>Name: {tosiron.name}</h2>
          <h3>Username: {tosiron.username}</h3>
          <h3>Email: {tosiron.email}</h3>
          <h3>Address: {tosiron.address.suite},{tosiron.address.street},{tosiron.address.city}</h3>
          <h4>tel:{tosiron.phone}</h4>
          
      </div>
  </div>;
}

export default Details;

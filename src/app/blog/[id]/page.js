import { notFound } from 'next/navigation';
import React from 'react'

export default function BlogPage({params}) {
    //console.log(`params : ${JSON.stringify(params)}`); 
    const {id} = params;
    if(id > 8){
        notFound();
    }
  return (
    <div className='mt-5'>the blog id is: {id}</div>
  )
}

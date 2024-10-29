import Button from '@/app/components/Button';
import Image from 'next/image';
import React from 'react'
import thumb from '@/public/images/one.jpg'

export default function Mission() {
  return (
    <main className="mt-10">
        <div>This is mission page!</div>
        <hr />
        <div className="w-[400px]">
          <Image placeholder='blur' src={thumb} alt='node.js image' quality={100}/>
        </div>
        <Button/>
    </main>
  )
}
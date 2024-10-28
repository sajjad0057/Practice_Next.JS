import React from 'react'

export default function AboutLayout({children}) {
  return (
    <div>
        <nav className="mt-20">Mission | Vision</nav>
        {children}
    </div>
  )
}

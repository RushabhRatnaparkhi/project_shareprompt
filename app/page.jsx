import React from 'react'
import Feed from '@components/Feed'

const Home = () => {
  return (
   <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
        Discover and share
        <br className='max-md:hidden'/>
        <span className='orange_gradient text-center'>AI powered prompt</span>
    </h1>
    <p className='desc text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur cum mollitia ullam. Quasi cum dicta natus vitae dolorem autem.
    </p>
    <Feed/>
   </section>
  )
}

export default Home

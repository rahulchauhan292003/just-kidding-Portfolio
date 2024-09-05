import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='bg-slate-800 h-svh '>
      <div className='flex gap-6'>
      <div className='p-14'>
        <h2 className='text-yellow-600 text-xl font-semibold hover:text-lg'><a href='https://github.com/rahulchauhan292003/todo-list/blob/a221fd72fdf57950ba40ac866b7512e479f42228/todo/src/components/Jokesapi.jsx'>Random jokes</a></h2>
        <p className='text-justify text-gray-200'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat magnam adipisci nostrum iusto ipsum perspiciatis, rerum iste. Minus quas delectus numquam dolorum, porro quisquam doloribus totam laboriosam voluptate quod et.</p>
      </div>
      <div className='p-14'>
        <h2 className='text-yellow-600 text-xl font-semibold hover:text-lg'><a href='https://github.com/rahulchauhan292003/todo-list/blob/a221fd72fdf57950ba40ac866b7512e479f42228/todo/src/components/Gitapi.jsx'>Github Api</a></h2>
        <p className='text-gray-200 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem minima, at exercitationem odio commodi eligendi architecto laudantium magni alias? Quis iure eligendi nam error laboriosam, rem debitis repellendus quisquam?</p>
      </div>
      <div className='p-14'>
        <h2 className='text-yellow-600 text-xl font-semibold hover:text-lg'><Link>Chatterly</Link></h2>
        <p className='text-gray-200 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque laborum alias maiores adipisci dolor totam, cupiditate necessitatibus eius itaque praesentium voluptas facere doloribus veniam veritatis maxime aspernatur? Id, quis omnis!</p>
      </div>
      <div className='pr-40 pt-96 h-24 w-12'>
        <button className='bg-orange-400 h-16 w-32 rounded ring-1 text-lg font-bold hover:bg-orange-500'><Link to={'/moreprojects'}>More..</Link></button>
      </div>

      </div>
    </div>
  )
}

export default Projects

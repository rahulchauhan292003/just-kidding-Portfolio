import React from 'react'

const Contact = () => {
  return (
    <>
      <div>
        <div className='h-28 bg-slate-800 w-svw'>

        </div>
        <div className='h-72 bg-slate-900 w-svw flex '>
          <div className='text-white p-14 from-neutral-400 text-5xl'>
          <p>Let's start a </p>
          <p>Project together...</p>
          </div>
          <div className='  pl-24'>
          <form className='p-4 gap-2 flex'>
            <input type="text" placeholder='name' className='rounded'/> <br />
            <input type="email" placeholder='email' className='rounded'/>
           </form>
<form className='p-4 '>
  <input type="text" placeholder='subject' className='w-96 rounded'/> <br /> <br />
  <input type="text" placeholder='message' className='w-96 h-20 rounded p-1'/> <br /><br />
  <button className='bg-orange-300 p-2 rounded hover:bg-orange-600'>Submit</button>
</form>
          </div>
        </div>
        <div className='h-28 bg-slate-800 w-svw'>

        </div>
      </div>
    </>
  )
}

export default Contact

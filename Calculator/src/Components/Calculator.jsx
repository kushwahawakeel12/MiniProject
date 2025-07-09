import React, { useState } from 'react'

function Calculator() {
  const [result, setResult] = useState('')
   
  const clickHandler = (e)=>{
    setResult(result.concat(e.target.value))
  }
  const clearScreen = ()=>{
    setResult('')
  }

  const calculate = ()=>{
    setResult(eval(result).toString())
  }
  return (
    <div className='bg-gray-800 flex justify-center text-center h-screen w-full items-center'>

      <div className='bg-red-300 h-120 w-90'>
       <div className='bg-red-300  h-12 w-90'>
        <input  className='border-4 border-black h-15 font-stretch-expanded w-90 text-right outline-none text-black' type="text" value={result}  placeholder='enter'/>
     
     <div className='keyword'>
      <div className='text-left'>
        <input onClick={clearScreen} type="button"  value="c" className=' rounded-lg m-5 w-12 h-10 bg-red-100'/>
         <input onClick={clickHandler}  type="button"  value=">" className='  rounded-lg  m-5  w-12 h-10 bg-red-100'/>
          <input onClick={clickHandler}  type="button"  value="%" className=' rounded-lg  m-5  w-12 h-10 bg-red-100'/>
           <input onClick={clickHandler}  type="button"  value="/" className=' rounded-lg  m-5  w-12 h-10 bg-red-100'/>
          

      </div>
     </div>

     <div className='keyword'>
      <div className='text-left'>
        <input onClick={clickHandler} type="button"  value="7" className=' rounded-lg m-5 w-12 h-10 bg-red-100'/>
         <input onClick={clickHandler}  type="button"  value="8" className='  rounded-lg  m-5  w-12 h-10 bg-red-100'/>
          <input onClick={clickHandler}  type="button"  value="9" className=' rounded-lg  m-5  w-12 h-10 bg-red-100'/>
           <input onClick={clickHandler}  type="button"  value="*" className=' rounded-lg  m-5  w-12 h-10 bg-red-100'/>
          

      </div>
     </div>

     <div className='keyword'>
      <div className='text-left'>
        <input onClick={clickHandler}  type="button"  value="4" className=' rounded-lg m-5 w-12 h-10 bg-red-100'/>
         <input onClick={clickHandler}  type="button"  value="5" className='  rounded-lg  m-5  w-12 h-10 bg-red-100'/>
          <input onClick={clickHandler}  type="button"  value="6" className=' rounded-lg  m-5  w-12 h-10 bg-red-100'/>
           <input onClick={clickHandler}  type="button"  value="-" className=' rounded-lg  m-5  w-12 h-10 bg-red-100'/>
          

      </div>
     </div>

     <div className='keyword'>
      <div className='text-left'>
        <input onClick={clickHandler}  type="button"  value="1" className=' rounded-lg m-5 w-12 h-10 bg-red-100'/>
         <input onClick={clickHandler}  type="button"  value="2" className='  rounded-lg  m-5  w-12 h-10 bg-red-100'/>
          <input onClick={clickHandler}  type="button"  value="3" className=' rounded-lg  m-5  w-12 h-10 bg-red-100'/>
           <input onClick={clickHandler}  type="button"  value="+" className=' rounded-lg  m-5  w-12 h-10 bg-red-100'/>
          

      </div>
     </div>

     <div className='keyword'>
      <div className='text-left'>
        <input onClick={clickHandler}  type="button"  value="0" className=' rounded-lg m-5 w-12 h-10 bg-red-100'/>
         <input onClick={clickHandler}  type="button"  value="00" className='  rounded-lg  m-5  w-12 h-10 bg-red-100'/>
          <input onClick={clickHandler}  type="button"  value="." className=' rounded-lg  m-5  w-12 h-10 bg-red-100'/>
           <input onClick={calculate} type="button"  value="=" className=' rounded-lg  m-5  w-12 h-10 bg-red-100'/>
          

      </div>
     </div>
       </div>
       
   
      </div>


    </div>
  )
}

export default Calculator
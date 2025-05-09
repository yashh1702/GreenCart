import React from 'react'
import {  categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Categories = () => {

    const {navigate} = useAppContext(); //yha mai curly braces lagnba bul gya tha bina uske chlega nhi

  return (
    <div className='mt-16'>
        <p className='text-2xl md:text-3xl font-medium'>Categories</p>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6
        xl:grid-cols-7 mt-6 gap-6'>

        {categories.map((category,index) => (
            <div key={index} className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'
            style={{backgroundColor: category.bgColor}}
            onClick={()=>{
               navigate(`/products/${category.path.toLowerCase()}`);
               scrollTo(0,0);
            }}
            >
                <img 
                className='group-hover:scale-108 transition max-w-28'
                 src={category.image} alt={category.text}/>
                <p className='text-sm font-medium'>{category.text}</p>
            </div>
        ))}

            
        </div>
    </div>
  )
}

export default Categories
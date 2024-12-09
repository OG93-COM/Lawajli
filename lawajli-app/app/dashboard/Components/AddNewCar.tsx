"use client"

import { TCategory } from '@/app/types';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaRegImages } from 'react-icons/fa';



export default function AddNewCar() {

    const [title, setTitle] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [destination, setDestination] = useState("");
    const [content, setContent] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [publicId, setPublicId] = useState("");
    const [categoryList, setCategoryList] = useState<TCategory[]>([])
    const [error, setError] = useState("");

    useEffect(()=>{
      const getDataCat = async () => {
        try {
          const res = await axios.get("/api/categories");
          if (res.status === 200) {
            setCategoryList(res.data);
          }
        } catch (error) {
          console.log("Erro Fetch DaTA Front ", error);
        }
        return null;
      };
      getDataCat()
    },[])

    console.log(categoryList)

  return (
    <div className='min-w-[500px] w-[600px] tic'>
    <h1 className="title-page">Add new car</h1>
    <form className="p-6" >
      <input

        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="vehicle"
        type="text"
        placeholder="Your Car Here... Exp: Passat" required
      />
      <div className='flex gap-2'>
        <input
            className="shadow appearance-none border rounded mt-4 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="number"
            placeholder="Phone Number..." required
            />
            <input
            className="shadow appearance-none border rounded mt-4 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Your Location Here... Exp : Bizerte" required
            />
      </div>

        
        <input
            className="shadow appearance-none border rounded mt-4 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="destination"
            type="text"
            placeholder="Prefered Destination..."
            />

        <div className="flex flex-col justify-center items-center gap-2 hover:scale-105 duration-300 bg-orange-50 h-28 w-full mt-4 text-orange-400 font-semibold text-xs rounded-xl border border-orange-300 border-dashed cursor-pointer">
             <FaRegImages size={24} /> Upload Image for the post
        </div>

      <textarea
        className="shadow appearance-none border rounded w-full mt-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="title"
        rows={5}
        placeholder="Description"
      />

      <div className="my-4">
        <select className="block appearance-none w-full uppercase bg-white border border-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" >
          <option value={""}>Select Category</option>
          {categoryList?.map((item:TCategory) => (
            <option key={item.id} value={item.catName} >
              {item.catName}
            </option>
          ))}
        </select>
      </div>
      <button
        className="btn-orange w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Create
      </button>
    </form>
  </div>
  )
}

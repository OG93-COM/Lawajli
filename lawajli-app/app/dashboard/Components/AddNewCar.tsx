"use client"

import { TCategory } from '@/app/types';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaRegImages } from 'react-icons/fa';
import { IoIosAddCircleOutline } from 'react-icons/io';



export default function AddNewCar() {

    const [vehicleName, setVehicleName] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [destination, setDestination] = useState<string[]>([]);
    const [destinationInput, setDestinationInput] = useState("");
    const [content, setContent] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [publicId, setPublicId] = useState("");

    const [categoryList, setCategoryList] = useState<TCategory[]>([])
    const [error, setError] = useState("");

    const router = useRouter()

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

    const addDestination = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      if (destinationInput.trim() !== "") {
        setDestination((prev) => [...prev, destinationInput]);
        setDestinationInput("");
      }
    };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // if (!vehicleName || !content || !phone || !location) {
      
    //   setError("Title and content Are required");
    //   return;
    // } else {setError("")}
    try {
      const res = await axios.post("/api/vehicles", {
        vehicleName,
        phone,
        location,
        destination,
        content,
        imgUrl,
        selectedCategory,
        publicId,
      });
      if (res.status === 200) {
        setError("");
        router.push("/");
      } 
    } catch (err) {
      setError("Post cant be ceated");
    }
  };

  return (
    <div className='min-w-[500px] w-[600px] tic'>
    <h1 className="title-page">Add new car</h1>
    <form className="p-6" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setVehicleName(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="vehicle"
        type="text"
        placeholder="Your Car Here... Exp: Passat" 
      />
      <div className='flex gap-2'>
        <input
            onChange={(e) => setPhone(e.target.value)}
            className="shadow appearance-none border rounded mt-4 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="number"
            placeholder="Phone Number..." required
            />
            <input
            onChange={(e) => setLocation(e.target.value)}
            className="shadow appearance-none border rounded mt-4 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Your Location Here... Exp : Bizerte" required
            />
      </div>

        <div className='flex gap-2'>
        <input
            onChange={(e) => setDestinationInput(e.target.value)}
            value={destinationInput}
            className="shadow appearance-none border rounded mt-4 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="destination"
            type="text"
            placeholder="Prefered Destination..."
            />
            <button
            onClick={addDestination}
            className="flex items-center gap-2 px-3 mt-4 bg-orange-600 rounded-md text-sm font-semibold text-white hover:bg-orange-500 duration-300"
          >
            <IoIosAddCircleOutline size={18} /> Add
          </button>
        </div>

        {destination?.length > 0 && (
          <div className="my-4 flex items-center gap-2">
            {destination.map((item, idx) => (
              <div key={idx} className="  bg-sky-500 rounded-lg px-4 py-2 text-sm font-bold text-white">
                  {item}
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col justify-center items-center gap-2 hover:scale-105 duration-300 bg-orange-50 h-28 w-full mt-4 text-orange-400 font-semibold text-xs rounded-xl border border-orange-300 border-dashed cursor-pointer">
             <FaRegImages size={24} /> Upload Image for the post
        </div>

      <textarea
        onChange={(e)=> setContent(e.target.value)}
        className="shadow appearance-none border rounded w-full mt-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="title"
        rows={5}
        placeholder="Description"
      />

      <div className="my-4">
        <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="block appearance-none w-full uppercase bg-white border border-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" >
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
      
    {error && <div className='text-sm font-bold text-red-700 mt-5'>{error}</div>}
    </form>
  </div>
  )
}

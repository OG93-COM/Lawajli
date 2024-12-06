import { TCategory } from '@/app/types';
import axios from 'axios';
import React from 'react'

const getDataCat = async () => {
    try {
      const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/categories`);
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      console.log("Erro Fetch DaTA Front ", error);
    }
    return null;
  };

export default async function AddNewCar() {

    const categoryList = await getDataCat();

  return (
    <div>
    <h1 className="title-page">Add new car</h1>
    <form className="p-6" >
      <input

        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="title"
        type="text"
        placeholder="Your Car Here... Exp: Passat"
      />
      <input
        className="shadow appearance-none border rounded mt-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="title"
        type="text"
        placeholder="Your Car Here... Exp: Passat"
        />

      <textarea
        className="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="title"
        rows={5}
        placeholder="Content"
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

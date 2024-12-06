import { catItem } from '@/data'
import CatItems from "./CatItems"
import Link from 'next/link'
import React from 'react'
import { TCategory } from '../types';
import axios from 'axios'

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

export default async function Categories() {
    const categoryList = await getDataCat();

  return (
    <div className="flex justify-center items-center flex-wrap gap-4">
      {categoryList && categoryList.map((itemcat:TCategory, idx:string) => (
        <Link key={idx} href={itemcat.pageLink}>
          <CatItems name={itemcat.catName} imgcat={itemcat.catImg}/>
        </Link>
      ))}
    </div>
  )
}

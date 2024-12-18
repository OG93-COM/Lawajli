"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";

const DeleteCarBtn = ({id}:{id:string}) => {
  const router = useRouter()

  const removeImage = async (publicId:string) => {
    try {
      const res = await axios.post('api/removeImg', {publicId})
    } catch (error) {
      console.log("Image Cant be Rremoved ", error)
    }
  }

  const handleDelete = async () => {
    const confirmed = window.confirm("Are You Sure to Delete this car ", )
    if(confirmed){
      try {
        const res = await axios.delete(`/api/vehicles/${id}`)
        if (res.status === 200){
          const vehicle = res.data
          const {publicId} = vehicle;
          await removeImage(publicId)
          console.log("Car deleted 🚮")
          router.push("/dashboard/my-vehicles")
        }
      } catch (error) {
        return null
      }
    }
  };

  return (
    <div onClick={handleDelete} className="text-white bg-red-500 p-2 rounded-lg flex items-center hover:scale-105 duration-300 cursor-pointer gap-1">
      <AiOutlineDelete size={18} color="white" />
      <p>Delete</p>
    </div>
  );
};

export default DeleteCarBtn;

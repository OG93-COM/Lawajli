import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prismadb";
import { auth } from "@/app/lib/auth";

export async function GET(){
    try {
        const allVehicles = await prisma.vehicles.findMany()
        return NextResponse.json(allVehicles)
    } catch (error) {
        console.log(error)
        return NextResponse.json("Get Data Category Failed ❌")
    }
    return NextResponse.json({message: "Get data Category ✅"})
}

export async function POST(req: Request) {

    const session = await auth();
    if(!session){
        return NextResponse.json({error:"not authentificated"},{status:401})
    }

    const {vehicleName, phone, location, destination, content, imgUrl, selectedCategory, publicId } = await req.json()
    const userEmail = session?.user?.email as string
    const userName = session?.user?.name as string
    const userImg = session?.user?.image as string

    console.log(vehicleName, phone, location, destination, content, imgUrl, selectedCategory, publicId)
    
    if(!vehicleName || !phone || !location || !content) {
        return NextResponse.json({error:"Vehicle and Content Are Required"},{status:500})
    }

    try {
        const newVehicle = await prisma.vehicles.create({
            data: {
                vehicleName,
                phone,
                location,
                destination,
                content,
                imgUrl,
                catName: selectedCategory,
                publicId,
                userEmail,
                userName,
                userImg,
                status: "Pending"
            }
        })
        console.log("Vehicle Created 📝")
        return NextResponse.json(newVehicle)
    } catch (error) {
        return NextResponse.json({message:"Could Not Create the Vehicle ❌ "})
    }
}
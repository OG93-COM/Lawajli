import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prismadb";
import { auth } from "@/app/lib/auth";

export async function GET(req: Request, {params}:{params:{vehicleid:string}}) {
    const id = params.vehicleid
    try {
        const onePost = await prisma.vehicles.findUnique({where:{id}})
        return NextResponse.json(onePost)
    } catch (error) {
        return NextResponse.json({message:"Get Post by ID Failed❌"},{status:500})
        }
}

export async function PUT(req:Request, {params}:{params:{vehicleid:string}}) {

    const session = await auth()
    if(!session){
        return NextResponse.json({error:"not authentificated"},{status:401})
    }

    const {vehicleName, phone, location, destination, content, imgUrl, selectedCategory, publicId } = await req.json()
    const id = params.vehicleid
    try {
        const updatedVehicle = await prisma.vehicles.update({where:{id},
            data:{
                vehicleName,
                phone,
                location,
                destination,
                content,
                imgUrl,
                catName: selectedCategory,
                publicId,
                status: "Pending"
        }})
        return NextResponse.json(updatedVehicle)
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"Vehicle cant be modified ❌"})
    }
}

export async function DELETE(req:Request, {params}:{params:{vehicleid:string}}) {
    const session = await auth()
    if(!session){
        return NextResponse.json({error:"not authentificated"},{status:401})
    }
    
    const id = params.vehicleid
    try {
        const vehicle = await prisma.vehicles.delete({where:{id}})
        return NextResponse.json(vehicle)
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"Car can't be deleted ❌"})
    }
}
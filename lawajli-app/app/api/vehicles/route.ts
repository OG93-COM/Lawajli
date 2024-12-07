import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prismadb";

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
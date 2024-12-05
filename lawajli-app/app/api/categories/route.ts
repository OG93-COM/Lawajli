import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prismadb";

export async function GET(){

    try {
        const allCategories = await prisma.category.findMany()
        return NextResponse.json(allCategories)
        
    } catch (error) {
        console.log(error)
        return NextResponse.json("Get Data Category Failed ❌")
    }

    return NextResponse.json({message: "Get data Category ✅"})
}
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prismadb";

export async function GET(req: Request, {params}:{params:{vehicleid:string}}) {
    const id = params.vehicleid
    try {
        const onePost = await prisma.vehicles.findUnique({where:{id}})
        return NextResponse.json(onePost)
    } catch (error) {
        return NextResponse.json({message:"Get Post by ID Failed❌"},{status:500})
        }
}
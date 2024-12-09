export type TCategory = {
    id: string,
    catName: string,
    catImg: string,
    pageLink: string
}

export type TVehicles = {
    id: string,
    vehicleName: string,
    userName: string,
    phone:string,
    location: string,
    destination?: string[],
    imgUrl: string,
    content: string,
    catName: string,
    userEmail: string,
    userImg?: string,
    status: "Active" | "Pending" | "Disabled",
    publicId: string,
    createdAt: string,
}

import Image from 'next/image'

export default function CatItems({name, imgcat}) {
  return (
    <div className='cat-item flex flex-col justify-center items-center gap-5 cursor-pointer hover:shadow-md'>
        <Image src={imgcat} width={225} height={140} alt={name}/>
        <h1 className='text-3xl font-bold text-white uppercase'>{name}</h1>
    </div>
  )
}

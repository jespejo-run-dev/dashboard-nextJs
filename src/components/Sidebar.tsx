import React from 'react'
import { IoBrowsersOutline, IoCalculator, IoFootballOutline, IoHeartOutline, IoLogoReact } from 'react-icons/io5'
import { SidebarMenuItem } from './SidebarMenuItem'
import Image from 'next/image'

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={20}/>,
        title: 'Dashboard',
        subTitle: 'Visualizacion'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={20} />,
        title: 'Counter',
        subTitle: 'Contador Client Side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoFootballOutline size={20} />,
        title: 'Pokemons',
        subTitle: 'Generacion Estatica'
    },
    {
        path: '/dashboard/favorites',
        icon: <IoHeartOutline size={20} />,
        title: 'Favoritos',
        subTitle: 'Global State'
    }
]

export const Sidebar = () => {
  return (
    <div
        style={{width: '400px'}} 
        id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">

        <div id="logo" className="my-4 px-6">
            <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                <IoLogoReact className='mr-2' />
                <span>Dash</span>
                <span className="text-blue-500">8</span>.
            </h1>
            <p className="text-slate-500 text-sm">Manage your actions and activities</p>
        </div>

        <div id="profile" className="px-6 py-10">
            <p className="text-slate-500">Welcome back,</p>
            <a href="#" className="inline-flex space-x-2 items-center">
                <span>
                    <Image className="rounded-full w-8 h-8"
                        src={`https://images.unsplash.com/photo-1542909168-82c3e7fdca5c`}
                        width={0}
                        height={0}
                        style={{ width: 'auto', height: '50px' }}
                        priority={false}
                        alt=""
                    />
                </span>
                <span className="text-sm md:text-base font-bold">
                    Edward Tompson
                </span>
            </a>
        </div>

        <div id="nav" className="w-full px-6">

            {
                menuItems.map(item => (
                    <SidebarMenuItem key={item.path} {...item}  />
                ))
            }


        </div>

    </div>
  )
}

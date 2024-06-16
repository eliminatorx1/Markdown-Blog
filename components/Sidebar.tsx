
import { NEXT_CACHE_IMPLICIT_TAG_ID } from "next/dist/lib/constants";
import Home from "./HomeData"
import { Children } from "react";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import HomeImage from "./HomeImage";
import Header from "./Header";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface sidebarProps{
    children: React.ReactNode;
}
const Sidebar:React.FC<sidebarProps> = ({
    children
})=>{
    return (
        <div className="flex h-full">
           <div className="hidden md:flex
            flex-col
            gap-y-2
            bg-black
            h-full
            w-[300px]
            p-2
           ">
           <Box className="
               h-[200px]
           ">
             <Header>

             </Header>

           </Box>
           <Box className="overflow-y-auto h-full py-4 px-4">
                <SidebarItem >

                </SidebarItem>

           </Box>
           
           </div>
           <div>
            
           </div>
           <main className="h-full flex-1 overflow-auto py-2">
            <div className="widht:400px height:300px">
                <HomeImage>

                </HomeImage>
            </div>
            
            <div className=" bg-neutral-900
                rounded-lg
                
                my-2
                px-4
                overflow-y-auto
                h-full
                w-full">
                    
            <div className="flex justify-center py-3 text-sl text-sky-400 font-bold">
               <Link href= '/'>
                 <p>Anuj solanki</p>
               </Link>
               
            </div> 
            <div className="leading-7">
            {children}

            </div>
             
             
            
           
            </div>
           </main>

        </div>
    )
}

export default Sidebar;
import { memo, useState } from 'react'
import icons from '../Assets/Mercu icons.png'
import icons2 from '../Assets/MercuIcons.png'
import { useNavigate } from 'react-router-dom'
import { Calendar, ChalkboardTeacher, ChartBar, House, SignOut} from '@phosphor-icons/react'


const IconsSidebar = memo(({Icon, title, className, funcButton}) => (
    <div className={`flex flex-row w-full  h-19 items-center justify-start ${className} hover:cursor-pointer`} onClick={(e) => funcButton(e)}>
        <Icon size={35} weight="fill"/>
        <h2 className='ml-2'>{title}</h2>
    </div>
))


const Sidebar = ({isSideBar, setIsSideBar}) => {
const navigate = useNavigate()
    return(
        <div
        onMouseEnter={() => setIsSideBar(true)} onMouseLeave={() => setIsSideBar(false)} className={`${isSideBar ? 'w-64' : 'w-24'} font-['Poppins'] relative transition-all duration-500  h-[98vh] bg-white flex flex-col items-center shadow-[0px_0px_5px_-2px_black] rounded-r-xl`}>
            <div className='w-[90%]  my-4 items-center h-full'>
                {isSideBar ?
                <div className='relative flex w-full h-full flex-col justify-between transition-opacity duration-500'>
                    <div className='relative w-full h-19 bg-gray-400 flex flex-col items-center'>
                        <img
                        src={icons}
                        width={150}
                        height={150}
                        className={`absolute transition-opacity duration-500 ${isSideBar ? 'opacity-100' : 'opacity-0'}`}
                        />

                        <img
                        src={icons2}
                        width={50}
                        height={50}
                        className={`absolute transition-opacity duration-300 ${isSideBar ? 'opacity-0' : 'opacity-100'}`}
                        />
                    </div>
                    <div className='w-full h-[40%] text-sm text-[--primary-color] font-semibold flex flex-col justify-between'>
                        <IconsSidebar Icon={House} title='Dashboard' className={'hover:cursor-pointer'}/>
                        <IconsSidebar Icon={ChartBar} title='Details' funcButton={() => navigate('details')}/>
                        <IconsSidebar Icon={Calendar} title='Meeting Schedule'/>
                        <IconsSidebar Icon={ChalkboardTeacher} title='Payment dosen'/>
                    </div>
                    <div className='w-full items-center flex text-[--primary-color] flex font-semibold'>
                        <IconsSidebar Icon={SignOut} title='Logout' className={'justify-center'}/>
                    </div>
                </div>
                :
                <div className='relative flex w-full h-full flex-col justify-between transition-opacity duration-500'>
                    <div className='relative w-full h-19 bg-gray-400 flex flex-col items-center'>
                    <img
                        src={icons}
                        width={150}
                        height={150}
                        className={`absolute transition-opacity duration-500 ${isSideBar ? 'opacity-100' : 'opacity-0'}`}
                        />

                        <img
                        src={icons2}
                        width={50}
                        height={50}
                        className={`absolute transition-opacity duration-300 ${isSideBar ? 'opacity-0' : 'opacity-100'}`}
                        />
                    </div>
                    <div className='w-full h-[40%] text-sm text-[--primary-color] font-semibold flex flex-col justify-between'>
                        <IconsSidebar className={'justify-center'} Icon={House}/>
                        <IconsSidebar className={'justify-center'} Icon={ChartBar} funcButton={() => navigate('details')}/>
                        <IconsSidebar className={'justify-center'} Icon={Calendar}/>
                        <IconsSidebar className={'justify-center'} Icon={ChalkboardTeacher}/>
                    </div>
                    <div className='w-full items-center flex text-[--primary-color] flex font-semibold'>
                        <IconsSidebar Icon={SignOut} className={'justify-center'}/>
                    </div>
                </div>
            }
            </div>
        </div>
    )
}

export default Sidebar 
import { Outlet } from "react-router-dom"
import Sidebar from "../Component/Sidebar"

const AdminPage = ({isSidebar, setIsSidebar}) => {
    return(
        <div className="w-full h-[100vh] items-center flex">
            <Sidebar isSideBar={isSidebar} setIsSideBar={setIsSidebar}/>
            <div className="w-full flex items-center h-full">
                <Outlet/>
            </div>
        </div>
    )
}

export default AdminPage
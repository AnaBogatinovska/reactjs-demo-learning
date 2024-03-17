import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <>
            <div style={{flex: 1}}>
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout;
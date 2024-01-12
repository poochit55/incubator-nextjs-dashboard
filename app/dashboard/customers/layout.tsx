import SideNav from "@/app/ui/dashboard/sidenav";

export default function layout({ children }:{ children:React.ReactNode }){
    return (
        <div className="md:flex h-screen mx-auto">
            <div>
                {/* <SideNav /> */}
            </div>
            <div>{children}</div>
        </div>
    )
}
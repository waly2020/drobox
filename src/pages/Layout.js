const Layout = ({children}) =>{
    return (
    <main className="w-full min-h-screen">
        <div className="max-w-[1000px] mx-auto px-4">
        {children}
        </div>
    </main>
    );
}
export default Layout;
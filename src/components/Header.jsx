import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="fixed w-full z-10">
            <div className="w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-center font-bold text-white"><p className="subtitle-gradient">Sitio bajo desarrollo. 2024 <a href="https://github.com/GenaDeev">©GenaDev</a> | <a href="https://genahost.vercel.app/">©GenaHost</a></p></div>
            <nav className="navbar bg-transparent backdrop-blur-md text-gray-800">
                <div className="flex-1">
                    <NavLink to="/" className="double btn btn-ghost text-2xl">
                        <span>🌙</span>
                        <div className="flex flex-col">
                            <span className="inline-block text-xs font-bold tracking-tighter truncate">COMI</span>
                            BuenasNoches
                        </div>
                    </NavLink>
                </div>
                <div className="flex-none menu hidden sm:block">
                    <ul className="bg-transparent rounded-t-none p-2 flex gap-4">
                        <li><NavLink to="/ursu" className="bg-white">Ursu 🌊</NavLink></li>
                        <li><NavLink to="/hele" className="bg-white">Hele 🌻
                        </NavLink></li>
                        <li><NavLink to="/ivan" className="bg-white">Ivan 🖤</NavLink></li>
                        <li><NavLink to="/lolita" className="bg-white">Lolita 💌
                        </NavLink></li>
                    </ul>
                </div>
                <div className="flex-none menu sm:hidden">
                    <ul className="menu menu-horizontal text-lg px-1">
                        <li>
                            <details>
                                <summary>Opciones</summary>
                                <ul className="bg-gray-100 rounded-t-none p-2">
                                    <li><NavLink to="/ursu" className="bg-white">Ursu 🌊</NavLink></li>
                                    <li><NavLink to="/hele" className="bg-white">Hele 🌻</NavLink></li>
                                    <li><NavLink to="/ivan" className="bg-white">Ivan 🖤</NavLink></li>
                                    <li><NavLink to="/lolita" className="bg-white">Lolita 💌</NavLink></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="opacity-50 shadow-2xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-[2px]"></div>
        </header>
    )
}
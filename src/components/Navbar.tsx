import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <nav className="bg-normal flex h-[100px] w-full items-center justify-between px-12">
            <img
                src="/ideatrade.svg"
                alt="ideatrade logo"
                className="h-full"
            />
            <div className="font-noto-sans flex gap-16 text-xl font-bold text-white">
                <Link
                    to={'/'}
                    className={`relative transition-all after:absolute after:right-1/2 after:bottom-0 after:h-[2px] after:w-full after:translate-x-1/2 after:scale-0 after:rounded-full after:bg-white after:transition-all after:duration-300 after:content-[""] hover:after:scale-100 ${pathname === '/' && 'after:scale-100'}`}
                >
                    ค้นหานักศึกษาฝึกงาน
                </Link>
                <Link
                    to={'/profile'}
                    className={`relative transition-all after:absolute after:right-1/2 after:bottom-0 after:h-[2px] after:w-full after:translate-x-1/2 after:scale-0 after:rounded-full after:bg-white after:transition-all after:duration-300 after:content-[""] hover:after:scale-100 ${pathname === '/profile' && 'after:scale-100'}`}
                >
                    โปรไฟล์
                </Link>
                <Link
                    to={'/about'}
                    className={`relative transition-all after:absolute after:right-1/2 after:bottom-0 after:h-[2px] after:w-full after:translate-x-1/2 after:scale-0 after:rounded-full after:bg-white after:transition-all after:duration-300 after:content-[""] hover:after:scale-100 ${pathname === '/about' && 'after:scale-100'}`}
                >
                    เกี่ยวกับเรา
                </Link>
            </div>
            <div className="text-normal flex gap-8">
                <Link
                    to={'/auth/employee/login'}
                    className="cursor-pointer rounded-full bg-white px-4 py-2 font-bold transition-all duration-300 hover:scale-105"
                >
                    เข้าสู่ระบบ
                </Link>
                <Link
                    to={'/auth/employee/register'}
                    className="cursor-pointer rounded-full bg-white px-4 py-2 font-bold transition-all duration-300 hover:scale-105"
                >
                    เข้าสู่ระบบบริษัท
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;

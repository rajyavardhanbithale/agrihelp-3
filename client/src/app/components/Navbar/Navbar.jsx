import Link from "next/link";
import AuthNotiy from "../Sections/AuthNotify";
import Cookies from "js-cookie";


export default function Navbar(props) {
    const auth = props.isAuth;

   

    return (
        <div className="flex justify-center w-full">
            <header className="flex flex-wrap sm:justify-start w-3/4 sm:flex-nowrap z-50 text-sm py-4 px-5 navbar__blur">
                <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className="flex justify-center align-middle items-center">
                        <img src="https://avatars.githubusercontent.com/u/111964247?s=400&u=b924200140787bf3ee6a08d4e04465a3770cac9b&v=4" className="w-10 inline-flex justify-center align-middle items-center bg-slate-800 p-0.5 rounded-xl" alt="" />
                        <a className="flex-none align-middle text-xl font-semibold dark:text-white px-3" href="#">
                            RAGE
                        </a>
                    </div>
                    <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5">
                        <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Early Access</a>
                        <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Generations</a>

                        <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                            {auth ?
                                <div> <Link href="/">Dashboard</Link></div>
                                :
                                <div> <Link href="/login">Sign IN</Link></div>
                            }
                        </div>
                    </div>
                </nav>
            </header>
            {auth && <AuthNotiy value={auth} />}
        </div>
    );
}

import Link from "next/link";
import AuthNotiy from "../Sections/AuthNotify";
import Cookies from "js-cookie";


export default function Navbar(props) {
    const auth = props.isAuth;



    return (
        // <div className="flex justify-center w-full">
        //     <header className="flex flex-wrap sm:justify-start w-3/4 sm:flex-nowrap z-50 text-sm py-4 px-5 navbar__blur">
        //         <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        //             <div className="flex justify-center align-middle items-center">
        //                 <img src="https://avatars.githubusercontent.com/u/111964247?s=400&u=b924200140787bf3ee6a08d4e04465a3770cac9b&v=4" className="w-10 inline-flex justify-center align-middle items-center bg-slate-800 p-0.5 rounded-xl" alt="" />
        //                 <a className="flex-none align-middle text-xl font-semibold dark:text-white px-3" href="#">
        //                     RAGE
        //                 </a>
        //             </div>
        //             <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5">
        //                 <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Early Access</a>
        //                 <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Generations</a>

        //                 <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        //                     {auth ?
        //                         <div> <Link href="/">Dashboard</Link></div>
        //                         :
        //                         <div> <Link href="/login">Sign IN</Link></div>
        //                     }
        //                 </div>
        //             </div>
        //         </nav>
        //     </header>
        //     {auth && <AuthNotiy value={auth} />}
        // </div>

        <>
            <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-teal-800 text-sm py-3">
                <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className="flex flex-row items-center justify-between">
                        <a className="flex items-center" href="#">
                            <img src="/assets/nav.png" className="w-20 filter invert" alt="Logo" />
                            <span className="ml-4 text-white font-bold text-xl">AGRIHELP</span>
                        </a>
                        <div className="sm:hidden">
                            <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-image-1" aria-controls="navbar-image-1" aria-label="Toggle navigation">
                                <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                                <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>
                        </div>
                    </div>
                    <div id="navbar-image-1" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                            <a className="font-medium text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-current="page">Temporary Navbar</a>
                            <a className="font-medium text-white hover:text-gray-400  dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">To</a>
                            <a className="font-medium text-white hover:text-gray-400  dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Be </a>
                            <a className="font-medium text-white hover:text-gray-400  dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Removed</a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

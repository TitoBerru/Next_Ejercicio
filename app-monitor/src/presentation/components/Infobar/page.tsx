import Image from 'next/image'
import Link from 'next/link';

function Infobar() {
    return (
        <div className='flex flex-row'>

            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl  p-4">


                    <div id="navbar-user">
                        <ul className="flex flex-col font-semibold p-4 ml-80 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link href="#" className="block py-2 px-3 text-gray-900 rounded " />Usuario Conectado: Hector
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-3 text-gray-900 rounded " />Legajo: 12
                            </li>
                            <li>
                            <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <Image className="w-8 h-8 rounded-full" src="/public/images/img1.jpg" width={500} height={500} alt="user photo" />
                        </button>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    );
}

export default Infobar;
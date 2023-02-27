export default function Navbar(){
    return (
        <header className="bg-purple-500 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font medium text-black mb-4 md:mb-0">
                    <a href="#about" className="m1-3 text-xl">
                        Delawn Brent Hobbs
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-f md:py-1 md:pl-4 md:border-black-700  flex flex-wrap items-center text-base justify-center ">
                    <a href="#prework" className="mr-5 hover:text-black">
                        Previous Work
                    </a>
                    <a href="#Services" className="me-5 hover:text-black">
                        Services
                    </a>
                </nav>
                <a href="#contact" className="inline-flex items-center bg-yellow-300 border-0 py-1 px-3 focus:outline-none hover:bg-purple-700 rouded text-base mt-4 md:mt-0">
                    Contact Me
                </a>
            </div>
        </header>
    );

    
};
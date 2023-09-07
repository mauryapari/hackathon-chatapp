import Link from 'next/link';
import ThemeToggle from "@/components/ui/ThemeToggle";
import {currentUser} from "@clerk/nextjs";

const Navbar = async () => {

    const user = await currentUser();

    return (
        <nav className="p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link href="/" className="text-4xl font-bold relative">
                        Hackathon Chat-app
                    </Link>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="#" className={"hover:text-red-400"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className={"hover:text-red-400"}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className={"hover:text-red-400"}>
                            Contact
                        </Link>
                    </li>
                    {user ? (
                        <li>
                            <Link href="/client" className={"bg-red-500 border border-red-500 rounded-full py-2 px-2"}>
                                Go to Chat-app
                            </Link>
                        </li>
                    ) : null}
                    <ThemeToggle />
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

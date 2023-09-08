import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";

const Navbar = async () => {
  const user = await currentUser();
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl">
          <Link
            href="/logo-dark.svg"
            className="text-4xl relative flex items-center"
          >
            <Image src="/logo-dark.svg" alt="My Logo" width={60} height={60} />
            ChatSync
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="#" className={"font-medium hover:text-red-light"}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className={" font-medium hover:text-red-light"}>
              About
            </Link>
          </li>
          <li>
            <Link href="#" className={"font-medium hover:text-red-light"}>
              Contact
            </Link>
          </li>
          {user ? (
            <li>
              <Link
                href="/client"
                className={
                  "font-medium text-white bg-red border rounded-full py-3 px-3"
                }
              >
                Go to Chat-app
              </Link>
            </li>
          ) : null}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

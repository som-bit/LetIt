import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";
import { getServerSession } from 'next-auth'
import { authOptions } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";
import SearchBar from "./SearchBar";

const Navbar = async () => {

    const session = await getServerSession(authOptions)

    return <div className='fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2'>
        <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>

            {/*logo*/}
            <Link href='/' className='flex gap-2 items-center'>
                <Icons.logo className="h-10 w-10 sm:h-8 sm:w-8" />
                <p className="hidden text-zinc-700 text-sm font-medium md:block"> LETIT </p>
            </Link>
            <SearchBar />
            {/*if the user is authenticated than we show user account nav bar with the drop down menu*/}
            {session?.user? (
              <UserAccountNav user={session.user} />
            ) : (
                <Link href='/sign-in' className={buttonVariants()}> Sing in</Link>
            )}


        </div>


    </div>

}

export default Navbar;






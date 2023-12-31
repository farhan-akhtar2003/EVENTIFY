import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full border-b">
      {/* WRAPPER IS A CUSTOM CLASSES YOU CAN SEE ITS DETAILS IN GLOBALS.CSS */}
      <div className="wrapper flex items-center justify-between">
        {/* /: HOME PAGE */}
        <Link href="/" className="w-36">
          <Image // LOGO FOR OUR PICPOST IN HEADER SECTION
            src="/assets/images/logo.svg" width={128} height={38}
            alt="Evently logo" 
          />
        </Link>
  

{/* USE CLERK FOR AUTHENTICATION PAGESSSS */}
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            {/* NAVITEMS ie NAVBARSS WILL BE STAYED HIDDEN UNTIL THE DEVICE IS MOBILE SIZE TYPES BCZ OF hidden classnAme css */}
            <NavItems/>
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            {/* MOBILENAV IS A SIDEBAR ITEM FOR NAVITEMS FOR SMALL SIZE DEVICE WIDTH */}
            <MobileNav />
          </SignedIn>
          <SignedOut> 
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header
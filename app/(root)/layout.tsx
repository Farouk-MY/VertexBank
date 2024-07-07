import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const loogedIn = {firstname : "Farouk" , lastname: "Messay" }
    return (
 

        <main className="flex h-screen w-full font-inter">
            <SideBar user={loogedIn} />

            <div className="flex size-full flex-col">
              <div className="root-layout">
                <Image src='/icons/logo.svg' width={30} height={30} alt="menu icon"/>
                <div>
                  <MobileNav user={loogedIn}/>
                </div>
              </div>
            {children}
            </div>
        </main>
    );
  }
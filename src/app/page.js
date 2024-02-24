import Image from "next/image";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import { TableDemo } from "./components/PatientsList";

export default function Home() {
  return (
    <main >
      <div className="flex flex-col h-screen ">
      {/* NavBar */}
      <NavBar />

      {/* Main Content Section */}
      <div className="flex flex-1 overflow-hidden h-screen  ">
        {/* SideBar */}
        <SideBar />

        {/* Content Area */}
        <div className="flex-1 p-4 overflow-y-auto">
          {/* Hero Section */}
          <div className=" text-black py-8">
            
            <TableDemo />

          </div>

          {/* Main Content */}
          
        </div>
      </div>
    </div>
    </main>
  );
}

import Image from 'next/image';
import Logo from '../assets/logo.png'
import { Button } from "@/components/ui/button"
import ProfilePicture from './ProfilePicture';
// import Link from 'next/link';

export default function NavBar() {
    return (
    <div className=' flex justify-between p-4  '>
        <div className='flex items-center'>
        <Image
        src={Logo}
        width={50}
        height={50}
        alt='logo'
        />
        <span className=' text-color-blue font-semibold text-lg ml-2'> PATIENT MANAGER </span>
    </div>
    <div className='flex items-center space-x-4 ml-auto'>
        {/* <link href='/AddPatient'> */}
            {/* <a> */}
            <Button className='bg-[#0e35b7] text-white ' variant="outline">Add new patient + </Button>
            {/* </a> */}
        {/* </link> */}
    <ProfilePicture/>
    </div>


    </div>

)
}

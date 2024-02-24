
import Image from 'next/image';
import User from '../assets/user.png'
const ProfilePicture = ({ src, alt }) => {
    return (
        <div className="relative w-10 h-10 overflow-hidden rounded">
        <Image
            src={User}
            alt={alt}
            width={40}  
            height={40} 
            layout="responsive"
            className="object-cover"
        />
        </div>
    );
};

export default ProfilePicture;

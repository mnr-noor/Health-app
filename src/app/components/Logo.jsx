import Image from 'next/image';

const Logo =()=>{
    return(
        <div>
        <Image
        src="/assets/logo1.png"
        alt='Logo'
        width={100}
        height={100}
        />
        </div>
    )

}
export default Logo;



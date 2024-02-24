import SigninForm from './components/form'
import { redirect } from 'next/navigation';
// import {readUser} from "@/utils/supabase/readUser"
import { readUser } from '../../../utils/supabase/readUser';

export default async function page() {
    const {data} = await readUser()
    if (data.session){
        redirect('/')
    }



return(
    <div>
        <SigninForm/>
    </div>
)
}

// const SignUp = () => {
//     return (
//     <div>
//         <SigninForm/>
//     </div>
//     )
// }

// export default SigninForm

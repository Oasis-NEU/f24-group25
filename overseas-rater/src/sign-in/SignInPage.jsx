import Navbar from '../navbar/navbar';
import SignInBox from './SignInBox';
export default function SignInPage(){
    return (
        <div>
            <Navbar/>
            <div className="h-64"/>
            <SignInBox/>
         </div>
    )
}
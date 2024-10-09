import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAccount } from "~/lib/context/account-context"
import Login from "../components/login";
import Register from "../components/register";

const LoginTemplate = () => {
    const {loginView,member,reterivingMember} = useAccount();
    const [currentView,_] = loginView;
    const router = useRouter();
    useEffect(() => {
        if(!reterivingMember && member){
            router.push("")
        }
    },[member,reterivingMember,router]);
    return(
        <div className="flex min-h-screen w-full h-full items-center justify-center">
            {currentView === "sign-in"? <Login/> : <Register/>}
        </div>
    )
}

export default LoginTemplate;
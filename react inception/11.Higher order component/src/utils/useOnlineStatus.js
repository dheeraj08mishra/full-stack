import { useState,useEffect } from "react";

const useOnlineStatus = () => {
    const [currentStatus, setCurrentStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setCurrentStatus(true);
        })
        window.addEventListener("offline",()=>{
            setCurrentStatus(false);
        })
    },[]);

return currentStatus;
}
export default useOnlineStatus;
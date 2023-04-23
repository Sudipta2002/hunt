import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [currentClueIndex, setCurrentClueIndex] = useState(parseInt(localStorage.getItem("stage")) || 0);
    const [score, setScore] = useState(parseInt(localStorage.getItem("score")) || 0);
    const [username,setUsername]=useState("");
    const [start, setStart] = useState(false);
    const [isAdmin, setisAdmin]= useState(Boolean(localStorage.getItem("admin"))||false);
    const navigate = useNavigate();
    

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userInfo);
        // console.log(user,userInfo);
        if (!userInfo) {
            navigate('/');
        }
        // console.log(typeof(currentClueIndex));
        if(currentClueIndex===4){
            localStorage.setItem("score", 0);
            localStorage.setItem("stage", 0);
            setCurrentClueIndex(0);setScore(0);
        }else{
            localStorage.setItem("score", score);
            localStorage.setItem("stage", currentClueIndex);
        }
        console.log((isAdmin));
        localStorage.setItem("admin", Boolean(isAdmin));
    }, [navigate,score,currentClueIndex,start,isAdmin]);

    return <UserContext.Provider value = {
        { user, setUser, currentClueIndex,isAdmin, setisAdmin, setCurrentClueIndex,start, setStart, score, setScore ,setUsername,username }
    } > { children } </UserContext.Provider>
};
export const UserState = () => {
    return useContext(UserContext);
}
export default UserProvider;
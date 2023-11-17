import { createContext , useState, useEffect } from "react";

const UserContext = createContext();
export default function Context({children}) {
   const [dataContainer , setDataContainer] = useState([]);
   const [open, setOpen] = useState(false);
    async function  fetchInfo(url) {
        const res =await fetch(`${url}`);
        const response = await res.json();
        return response;
    }

    return (
        <UserContext.Provider  value = {{dataContainer , setDataContainer , fetchInfo , open , setOpen}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext};




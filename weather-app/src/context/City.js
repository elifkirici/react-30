import { createContext, useState,useContext } from "react";


 const CityContext= createContext()
const Provider =({children})=>{
    const [selectedCity, setselectedCity] = useState("İstanbul");
    const [Api,setApi]=useState([])
  const data = {
    selectedCity,
    setselectedCity,
    Api,
    setApi,
    
  };
  
    return(

<CityContext.Provider value={data}>
{children}
</CityContext.Provider>
    )
}
export const useCity =()=> useContext(CityContext)
export default Provider

   

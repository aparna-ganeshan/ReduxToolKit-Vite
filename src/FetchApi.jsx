
import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchdata } from "./ReduxToolKitFetchApi"

const UsersComp = ()=>{

    let dispatch = useDispatch()

    let sect = useSelector((getstate)=>{
       // console.log("data from component getting")
        console.log(getstate.first)
        return getstate.first

    });

    useEffect(()=>{
        dispatch(fetchdata());
    },[])

    
    return(

        
        <>
        <h1>Data Lists</h1>
        
        <button onClick={()=>{
              dispatch(fetchdata());
        }}>Data Get</button>
        {/* <h1>{sect}</h1> */}
        </>
    )
 }
 export default UsersComp
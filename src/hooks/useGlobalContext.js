import { useContext } from "react"
import { MovieContext } from "../context/MovieContext"

const useGlobalContext = ()=>{
    return (
        useContext(MovieContext)
    )
}

export default useGlobalContext;
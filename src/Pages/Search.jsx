/* eslint-disable react/prop-types */
import { useEffect } from "react"
import Card from "../Components/Card"
import CentralizedData from "./CentralizedData"
import { useSearchParams } from "react-router-dom"


function Search({pathing}) {
   let [searchParams] = useSearchParams()
   let queryTerm = searchParams.get("q")
  let {data} =  CentralizedData(pathing, queryTerm)
    useEffect(() => {
        document.title = data
    })
    console.log("D", data)
  return (
    <>
        <main className="container">
        <div style={{display:"flex", gap:"50px", justifyContent:"space-around", marginTop:"20px", flexWrap:"wrap"}}>
       {data.map((value) => (
        <Card key={value.id} movie={value}/>
      ))}
       </div>
        </main>
    </>
  )
}

export default Search
/* eslint-disable react/prop-types */
import { useEffect } from "react"
import Card from "../Components/Card"
import CentralizedData from "./CentralizedData"

 function Home({title, pathing}) {

  let {data } = CentralizedData(pathing)

  useEffect(()=> {
    document.title=title
  })
  return (
    <>
       <div style={{display:"flex", gap:"50px", justifyContent:"space-around", marginTop:"20px", flexWrap:"wrap"}}>
       {data.map((value) => (
        <Card key={value.id} movie={value}/>
      ))}
       </div>
    </>
  )
}
export default Home


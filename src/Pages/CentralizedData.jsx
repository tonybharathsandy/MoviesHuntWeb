import { useEffect, useState } from 'react'

function CentralizedData(pathing, queryTerm) {
        let [data, setData] = useState([])
    let apiKey = "b3e0a5a56c6255f3768a75efed8a036b"
let url = `https://api.themoviedb.org/3/${pathing}?api_key=${apiKey}&query=${queryTerm}`
useEffect(() => {
 async  function dataFetch(){
      fetch(url) .then((response) => response.json()).then((response) => setData(response.results))
   }
   dataFetch()

}, [url])

  return {data};
}

export default CentralizedData
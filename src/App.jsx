import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'
import Logo from './assets/Logo.svg'
import Loader from './components/Loader'
import Pagination from './components/Pagination'


function App() {

  const [dataApi, setDataApi] = useState({})
  const [loader, setLoader] = useState(true)
 

  const randomId = Math.floor(Math.random() * (126 - 1) + 1)
  useEffect( () => {
    setLoader(true)
    axios
      .get (`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(resp => {
        setDataApi(resp.data)
        setTimeout( () => {
          setLoader(false)
        }, 1500)
          
      })
      .catch(error => console.error(error))
    
  }, [] )

  

  



  return (
    <div className="App">
      {
        loader && <Loader/>
      }
      

      <div className='Logo'>
        <img src={Logo} alt="" />
      </div>
      <Location
      data = {dataApi}
      set = {setDataApi}/>

      <ul className='Resident-Container'>
        {
          dataApi.residents?.map( residents => (
            <ResidentInfo
            key={ residents.id }
            residentInfo={ residents }
            />
          ))
        }

      </ul> 

    
      

    </div>
  )
}

export default App

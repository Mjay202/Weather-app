import NavBar from './components/NavBar';
import cloudsun from './cloud-sun.svg';
import SearchBtn from './components/SearchBtn';
import {useEffect, useState} from 'react'


function App() {


const [lat, setlat] = useState("")
const [lon, setlon] = useState("")
const [errorMsg, seterrorMsg] = useState("")
const API_Call = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ef9276329ac5fd068880b69228e91654"



useEffect(() => {
  // fetch(API_Call)
  // .then(response => response.json())
  // .then(res =>{
  //   console.log(res)
  // })

  navigator.geolocation.getCurrentPosition((position)=>{
      console.log("Latitude is " + position.coords.latitude)
      console.log("Longitude is " + position.coords.longitude)
  })
}, [])



  return (
     <>

      <header >
        <NavBar/>
        <SearchBtn/>
      </header>
      <main>

        {/* Location and date */}
          <section>

            <div className="container my-2 mx-3 p-3 location-header">
              <div className="row col-12 d-flex justify-content-center">
                
                <div className="col-5 address">
                  <h1 className='location'> London</h1>
                  <h6 className='date'> Monday 26 August</h6>
                </div>

                <div className="col-5 align-self-center d-flex justify-content-end wth-main">
                  <h3>Mostly Sunny</h3>
                </div>
              </div>
            </div>
          </section>

        {/* Weather data */}
          <section className='w-data'>

            
            
            <div className="container mb-2">
              <div className="row d-flex   justify-content-center">
                <div className="col-8 g-3 cloud-temp p-3">
                  <div className="d-flex p-6 justify-content-center row">
                    <div className="col align-self-center  cloud">
                        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" className="bi bi-cloud-sun" viewBox="0 0 16 16">
                          <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/>
                          <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
                        </svg>
                        
                    </div>
                    <div className="col temp align-self-center">
                      <h1 className='temp-now'>21°</h1>
                      <h5 className='f-text'>Feels like</h5>
                    </div> 
                  </div>
                    <hr />
                </div>
                <div className="col-8 g-3 align-self-center weather-data">
                  <div className="row row-cols-3">
                      <div className="col">
                        <h3>23°</h3>
                        <h5>High</h5>
                      </div>
                      <div className="col">
                        <h3>23%</h3>
                        <h5>Rain</h5>
                      </div>
                      <div className="col">
                        <h3>7mph</h3>
                        <h5>Wind</h5>
                      </div>
                  </div>
                  <div className="row row-cols-3">
                      <div className="col">
                        <h3>20°</h3>
                        <h5>Low</h5>
                      </div>
                      <div className="col">
                        <h3>23</h3>
                        <h5>Pressure</h5>
                      </div>
                      <div className="col">
                        <h3>23</h3>
                        <h5>Humidity</h5>
                      </div>
                  </div>
                          
                </div>
                
              </div>
            </div>
          </section>

          {/* Weather Today */}
          <section>
            
              <div className="container weather-today mt-3">
                <div className="">
                  <h2 className='h-text mt-3'>Today's weather</h2>
                  <hr/>
                </div>
                <div className="container w-today">
                  <div className="row col-12">
                      <div className="card col-4 text-center bg-transparent g-1">
                        <div className="card-body">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent text-white">An </li>
                            <img src={cloudsun}  alt=""  className="align-self-center icon img-fluid"/>
                            <li className="list-group-item bg-transparent text-white">A </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card col-4 text-center bg-transparent g-1">
                        <div className="card-body">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent text-white">An </li>
                            <img src={cloudsun}  alt=""  className="align-self-center icon img-fluid"/>
                            <li className="list-group-item bg-transparent text-white">A </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card col-4 text-center bg-transparent g-1">
                        <div className="card-body">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent text-white">An </li>
                            <img src={cloudsun}  alt=""  className="align-self-center icon img-fluid"/>
                            <li className="list-group-item bg-transparent text-white">A </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card col-4 text-center bg-transparent g-1">
                        <div className="card-body">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent text-white">An </li>
                            <img src={cloudsun}  alt=""  className="align-self-center icon img-fluid"/>
                            <li className="list-group-item bg-transparent text-white">A </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card col-4 text-center bg-transparent g-1">
                        <div className="card-body">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent text-white">An </li>
                            <img src={cloudsun}  alt=""  className="align-self-center icon img-fluid"/>
                            <li className="list-group-item bg-transparent text-white">A </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card col-4 text-center bg-transparent g-1">
                        <div className="card-body">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent text-white">An </li>
                            <img src={cloudsun}  alt=""  className="align-self-center icon img-fluid"/>
                            <li className="list-group-item bg-transparent text-white">A </li>
                          </ul>
                        </div>
                      </div>
                  </div>
                </div>
                  
              </div>
          
          
          </section>

          <footer className='mt-5'>
            <div className="container-fluid d-flex justify-content-center">
              <h4 className='text-white'>@Camun Technologies</h4>
            </div>
          
          </footer>   
      </main>
     </>
  );
}

export default App;

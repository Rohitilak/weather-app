import './App.css'
import WeatherApp from './components/WeatherApp'

function App() {

  return (
    <>
      <div className='weather-containter'>
        <div className='app'>
          <h3>Rohit Weather App</h3>
        </div>
        <div>
          <WeatherApp />
        </div>
      </div>
    </>
  )
}

export default App
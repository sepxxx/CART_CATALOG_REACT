import styles from "./Home.module.css"
import {cars as carsData} from './cars.data.js'
import CarItem from "./car-item/CarItem.jsx"
import {useMemo} from 'react'
import {useState} from 'react'
import CreateCarForm from "./create-car-form/CreateCarForm.jsx"

const Home = () => {
    //const filteredCars = useMemo(() => 
    //cars.filter(car => car.price > 20000), [])
    const [cars, setCars] = useState(carsData)
    return (
        <div>
            <CreateCarForm setCars={setCars}/>
            <h1>Cars catalog</h1> 
            <div>
                {cars.length ? (
                    cars.map(car => (
                        <CarItem key={car.id} car={car}/>
                    ))
                ): (
                    <p>There are no cars</p>
                )}
            </div>
        </div>
    )
  }
  
  export default Home
  
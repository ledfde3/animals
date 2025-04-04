import{useState} from 'react'

import './App.css'

import AnimalsShow from './AnimalsShow'

function getRandomAnimal(){
  const animals =['cat','bird','dog','gator','horse']
  return animals[Math.floor(Math.random()* animals.length)]
}
console.log(getRandomAnimal())
function App(){
  const[animals, setAnimals]= useState()
  const handleClick=()=>{
    setAnimals([...animals, getRandomAnimal()])
  }
  const renderAnimals =animals.map((animal, index)=>{
    return <AnimalsShow type={animal} key ={index}/>
  })


  return (
    <>
    <h1>Animals app</h1>
    </>
  )
}

export default App
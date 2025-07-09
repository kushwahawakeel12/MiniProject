import React, { useEffect } from 'react'
import { useState } from 'react'
import './Meal.css'

export const Meal = () => {

  const [mealData, setMealData] = useState([])
  const [area, setArea] = useState('Indian')
  const [inputData, setInputData] = useState('')

  useEffect(() => {

    const fetchDataFromApi = async () => {
      const Api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      const data = await Api.json()
      console.log("api data = ", data)

      setMealData(data.meals)
    }
    fetchDataFromApi()

  }, [area])

  const submitHandler = async (e) => {
    e.preventDefault()

    const Api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`)
    const data = await Api.json()

    console.log("search by  = ", data.meals)
    setMealData(data.meals)
    setInputData("")
  }

  return (
    <>





      <div className='mx-auto text-center'>
        <form onSubmit={submitHandler} className='mx-auto text-center my-3 '>
          <input onChange={(e) => setInputData(e.target.value)} type="text" value={inputData} />
        </form>
        <button onClick={() => setArea('Indian')} type='button' className='btn btn-outline-primary mx-3' >Indian</button>

        <button onClick={() => setArea('American')} type='button' className='btn btn-outline-warning mx-3'
        >American</button>

        <button onClick={() => setArea("Thai")} type='button' className='btn btn-outline-light mx-3'>Thai</button>
        <button onClick={() => setArea("Canadian")} type='button' className='btn btn-outline-info mx-3'>Canadian</button>
        <button onClick={() => setArea("British")} type='button' className='btn btn-outline-danger mx-3'>British</button>
        <button onClick={() => setArea('Russian')} type='button' className='btn btn-outline-success mx-3'>Russian</button>

      </div>

      <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '60px', margin: '30px' }}>
        {

          mealData.map((meal) => <div key={meal.idMeal} style={{ textAlign: 'center' }}  >
            <div>
              <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: "220px", border: "2px solid blue", borderRadius: "10px" }} />
            </div>
            <h5>{meal.strMeal}</h5>
          </div>)
        }
      </div>
    </>
  )
}

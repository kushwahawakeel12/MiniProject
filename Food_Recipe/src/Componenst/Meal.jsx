import React, { useEffect } from 'react'
import { useState } from 'react'

export const Meal = () => {

  const [mealData, setMealData] = useState([])

  useEffect(() => {

    const fetchDataFromApi = async () => {
      const Api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)
      const data = await Api.json()
      console.log("api data = ", data)

      setMealData(data.meals)
    }
    fetchDataFromApi()

  }, [])

  return (
 <>
 {/* <div className='max-auto text-center margin-10'>

 <button type="button" class="btn btn-outline-primary max-3">Primary</button>

  
<button type="button" class="btn btn-outline-secondary">Secondary</button>



<button type="button" class="btn btn-outline-success">Success</button>



<button type="button" class="btn btn-outline-danger">Danger</button>




<button type="button" class="btn btn-outline-warning">Warning</button>


<button type="button" class="btn btn-outline-info">Info</button>

</div> */}




<div className='mx-auto text-center'>
  <button type='button' className='btn btn-outline-primary mx-3'>Indian</button>

  <button type='button' className='btn btn-outline-primary mx-3'>American</button>
  <button type='button' className='btn btn-outline-primary mx-3'>Thai</button>
  <button type='button' className='btn btn-outline-primary mx-3'>Canadian</button>
</div>

      <div style={{display:"flex" ,justifyContent:'center',alignItems:'center',flexWrap:'wrap' ,gap:'60px'}}>
        {

          mealData.map((meal) => <div key={meal.idMeal}style={{textAlign:'center'}}  >
            <div>
            <img src={meal.strMealThumb} alt={meal.strMeal} style={{width:"220px",border:"2px solid blue",borderRadius:"10px"}} />
          </div>
            <h5>{meal.strMeal}</h5>
          </div>)
        }
      </div>
 </>
  )
}

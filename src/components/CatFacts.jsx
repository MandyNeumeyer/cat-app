import React from 'react'
import Cat from '../assets/cat-facts.png'
import './CatFacts.scss'

const CatFacts = ({data, fetchData}) => {
  return (
    <div className='CatFacts'>
        <div></div>
        <h1><img src={Cat} alt="cat" /></h1>
        <div className="factBox">
        <p>{data.fact}</p>
        </div>
        <button  onClick={fetchData}>GET NEW FACT</button>
    </div>
  )
}

export default CatFacts

import React, {useState} from 'react'
import "./Card.css"

function Card(name, about, job) {

    
  return (
    <div className='Card'>
        <div className="upper-container">
            <div className="image-container">
                <img src="https://i2-prod.walesonline.co.uk/news/uk-news/article23927263.ece/ALTERNATES/s1200c/0_F038F02A-D11F-11EC-A042-0A2111BCB09D.jpg" alt="" height="100px" width="100px"/>
            </div>
        </div>
        <div className="lower-container">
            <h3> {`marky agaste`} </h3>
            <h4> {`owner`} </h4>
            <p> {`Lorem ipsum , dolor sit amet consectetur adipisicing elit. Voluptatum libero nam fuga, tempore in sit placeat nostrum doloribus ipsum dolore velit distinctio quidem exercitationem laboriosam aliquam aspernatur culpa quos quod.`} </p>
            <button>Visit more</button>
        </div>
    </div>
  )
}

export default Card
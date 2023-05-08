'use client'
import React, {useState} from 'react'
export default function List() {
let product =  ['tomato', 'potato', 'cucumber']
let [count, countUpdate] = useState([100,200,300]) //자동 재 랜더링
    return (
      <div>
        <h2>Products</h2>
        {
          /** for문이 안되서 map으로 처리 */
          product.map((item,i)=>{
            return (
              <div className="food" key={i}>
                <img src={`/food${i}.png`} className="food-img"/>
                <h4>{item} $40</h4>
                <span>{count[i]}</span>
                <button onClick={()=>{ 
                  let copy = [...count] //reference type 관련
                  copy[i]++
                  countUpdate(copy) }}>+</button>
                <button onClick={()=>{ 
                  let copy = [...count] //reference type 관련
                  copy[i]--
                  countUpdate(copy) }}>-</button>
              </div>
            )
          })
        }
        {/* <div className="food">
          <h4>{product[0]} $40</h4>
        </div>
        <div className="food">
          <h4>{product[1]} $40</h4>
        </div> */}
      </div>
    )
  } 
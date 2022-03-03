import React, { useState } from 'react'
import "../styles/style.css"
import data from '../Data/data'
import Landing from './Landing'
function Card({img, name, desciption})
{
    return (
        <div className='card'>
            <div className='image'><img src={img} alt="" />
            </div>
            <h2>{name}</h2>
            <p>{desciption}</p>
            <button className='primary-button'>Learn More</button>
        </div>
    )
}
function Home() {
    const [tag, settag] = useState('All');
  return (
    <div className='home_section'>
        <Landing />
        <div className="tabs">
            <span className={tag ==='All'?'active':''} onClick={e=>settag('All')} >All</span>
            <span className={tag ==='seasonable'?'active':''} onClick={e=>settag('seasonable')}>seasonable crops</span>
            <span className={tag ==='suitable'?'active':''} onClick={e=>settag('suitable')}>suitable crops</span>
            <span className={tag ==='seeds'?'active':''} onClick={e=>settag('seeds')}>seeds</span>
            <span className={tag ==='tools'?'active':''} onClick={e=>settag('tools')}>farming tools and instruments</span>
        </div>
          <div className="card_wrapper">
              {
                  (tag === 'All') ?
                      data.map((item) => (<Card img={item.img} name={item.name} desciption={item.description} />))
                      :
                      data.map((item)=> {
                          if(item.tag === tag) {
                              return (<Card img={item.img} name={item.name} desciption={item.description} />)
                          }
                      })
              }
          </div>
    </div>
  )
}

export default Home
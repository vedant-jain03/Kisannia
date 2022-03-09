import React, { useContext, useState } from 'react'
import "../styles/style.css"
import data from '../Data/data'
import Landing from './Landing'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Button } from '@mui/material';
import { currentDescription } from '../App';
import { useHistory } from 'react-router-dom';
import Footer from './Footer';

function Card({ img, name, blog_desciption, tags, full_data }) {
    const {description, setdescription} = useContext(currentDescription);
    const history = useHistory();
    function handlesubmit() {
        setdescription(full_data);
        history.push('/blog')
    }
    return (
        <div className='card'>
            <div className='image'><img src={img} alt="" />
            </div>
            <h2>{name}</h2>
            <p>{blog_desciption}</p>
            <button className='primary-button' onClick={handlesubmit} >Learn More</button>
        </div>
    )
}
function Home() {
    const [tag, settag] = useState('All');
    return (
        <div className='home_section'>
            <Landing />
            <div className="tabs">
                <span className={tag === 'All' ? 'active' : ''} onClick={e => settag('All')} >All</span>
                <span className={tag === 'Crops' ? 'active' : ''} onClick={e => settag('Crops')}>Crops</span>
                <span className={tag === 'Seeds' ? 'active' : ''} onClick={e => settag('Seeds')}>Seeds</span>
                {/* <span className={tag === 'Equipements' ? 'active' : ''} onClick={e => settag('Equipements')}>Equipements</span> */}
                <span className={tag === 'Irrigation' ? 'active' : ''} onClick={e => settag('Irrigation')}>Irrigation</span>
                <span className={tag === 'Soil' ? 'active' : ''} onClick={e => settag('Soil')}>Soil</span>
                <span className={tag === 'Fertilizer' ? 'active' : ''} onClick={e => settag('Fertilizer')}>Fertilizer</span>
                <span className={tag === 'Farming Techniques' ? 'active' : ''} onClick={e => settag('Farming Techniques')}>Farming Techniques</span>
            </div>
            <div className="card_wrapper">
                {
                    (tag === 'All') ?
                        data.map((item) => (<Card img={item.img} name={item.name} blog_desciption={item.description} tags={item.tags} full_data={item} />))
                        :
                        data.map((item) => {
                            if (item.tag === tag) {
                                return (<Card img={item.img} name={item.name} blog_desciption={item.description} tags={item.tags} full_data={item}/>)
                            }
                        })
                }
            </div>
            <Footer />
        </div>
    )
}

export default Home
import React, { useContext } from 'react'
import "../styles/style.css"
import ReactMarkdown from "react-markdown";
import {marked} from "marked"
import { currentDescription } from '../App';

function Blog() {
    const {description, setdescription} = useContext(currentDescription);
    return (
        <div className='blog_page'>
            <div className="wrapper">
                <h1 className='heading'>{description.name}</h1>
                <div className="image_wrapper">
                <img src={description.img} alt="" />
                </div>
                <div className='desc_wrapper'>
                <div className="marked" dangerouslySetInnerHTML={{__html: marked.parse(description.description)}}></div>
                </div>
            </div>

        </div>
    )
}

export default Blog
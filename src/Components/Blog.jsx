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
                <p dangerouslySetInnerHTML={{__html: marked.parse(description.description)}}></p>
            </div>

        </div>
    )
}

export default Blog
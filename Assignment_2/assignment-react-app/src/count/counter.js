import React from 'react'
import * as BIIcons from 'react-icons/bi';
import * as AIIcons from 'react-icons/ai';
import './counter.css'

let Counter = (props) => {
    return(
        
        <div className = 'Counter' style={{background: props.bgColor}}>
            <center>
            <div className = 'count'>{props.count}</div>
            <div className = 'Buttons'>
                <button className="btn" onClick = {() => {props.addition()}}><AIIcons.AiOutlinePlus /></button>
                <button className="btn" onClick = {() => {props.reset()}}><BIIcons.BiRefresh /></button>
                <button className="btn" onClick = {() => {props.substract()}}><AIIcons.AiOutlineMinus /></button>
            </div>
            </center>
        </div>
    )
}

export default Counter;
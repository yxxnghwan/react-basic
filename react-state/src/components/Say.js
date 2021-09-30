// ./src/components/Say.js
import React, {useState} from 'react'

function Say() {
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('black');
    const onClickEnter = () => {
        setMessage('안녕하세요');
    }
    const onClickExit = () => {
        setMessage('안녕히 가세요');
    }
    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickExit}>퇴장</button>
            <h1 style={{color: color}}>{message}</h1>
            <button style={{color: 'red'}} onClick={
                () => {
                    setColor('red')
                }
            }>
                Red</button>
            <button style={{color: 'green'}} onClick={
                () => {
                    setColor('green')
                }
            }>
                Green</button>
            <button style={{color: 'blue'}} onClick={
                () => {
                    setColor('blue')
                }
            }>
                Blue</button>
        </div>
    )
}

export default Say



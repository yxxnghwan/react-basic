import React, {useState} from "react";


const InputSample = () => {

    const [text, setText] = useState('');

    const onChange = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
    }

    const onReset = () => {
        setText('');
    }

    return (
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    )
}

export default InputSample;
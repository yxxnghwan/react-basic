import React from "react";

function Children1() {
    return(
        <p>
            1: Hello React!
        </p>
    )
}

const Children2 = () => {
    return(
        <p>
            2: Hello React!
        </p>
    )
}

const Children3 = () => <p>3: Hello React!</p>

const Hello = (props) => {
    return (
        <div>
            <Children1/>
            <Children2/>
            <Children3/>
            <p>
                안녕하세요 {props.name} 입니다.
            </p>
            Function Type Component
        </div>
    )
}

export default Hello;
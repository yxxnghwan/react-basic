import React from 'react';

const Instructions = ({steps}) => {
    return (
        <div>
            <section className="instructions">
                <h3>조리 절차</h3>
                {steps.map((step, index) => {
                    return <p key={index}>{step}</p>;
                })}
            </section>
        </div>
    );
};

export default Instructions;
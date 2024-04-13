import React from "react";

const Counter = ({ digitOne, digitTwo, digitThree, digitFour }) => {
    return (
        <div className="row">
            <div className="shadow-sm col border bg-light border rounded mx-1 d-flex flex-column justify-content-center align-items-center text-center" style={{ height: "300px" }}><i className="fas fa-clock"></i></div>
            <div className="shadow-sm col border bg-light border rounded mx-1 d-flex flex-column justify-content-center align-items-center text-center" style={{ height: "300px" }}>{digitFour % 10}</div>
            <div className="shadow-sm col border bg-light border rounded mx-1 d-flex flex-column justify-content-center align-items-center text-center" style={{ height: "300px" }}>{digitThree % 10}</div>
            <div className="shadow-sm col border bg-light border rounded mx-1 d-flex flex-column justify-content-center align-items-center text-center" style={{ height: "300px" }}>{digitTwo % 10}</div>
            <div className="shadow-sm col border bg-light border rounded mx-1 d-flex flex-column justify-content-center align-items-center text-center" style={{ height: "300px" }}>{digitOne % 10}</div>
        </div>
    );
}

export default Counter;

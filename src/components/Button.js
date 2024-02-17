import React from "react";
import "../App.css";

const Button = (props) => {
    return (
        <input
            type="button"
            value={props.value}
            className={props.class}
            onClick={props.clickHandler}
        />
    );
};

export default Button;

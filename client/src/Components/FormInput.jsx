
import React from "react"
import { CssTextField, useStyles } from "./styling/InputStyling"


export default function FormInput({ inputLabel, inputName, inputType, inputValue, updateInput }) {
    const inputStyle = useStyles();

    return (
        <CssTextField
            className={inputStyle.margin}
            type={inputType}
            label={inputLabel}
            variant="outlined"
            id={inputName}
            name={inputName}
            value={inputValue}
            onChange={updateInput}
        />
    )
}
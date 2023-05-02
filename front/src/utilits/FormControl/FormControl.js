import React from "react";
import classes from "./FormControl.module.css"
import Select from 'react-select';

export function Input({ input, meta, ...props }) {
    const hasError = meta.error && meta.touched;
    return (
        <div >
            <input className={` ${classes.formControl}  ${hasError ? classes.error : ""}`}
                   {...input} {...props} />
            {hasError && <span className={classes.errorSpan}>{meta.error}</span>}
        </div>
    );
}



export function FormSelect ({ input, ...rest }) {
    return(
        <div>
            <Select {...input} {...rest} />
        </div>
    );
}


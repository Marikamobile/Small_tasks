import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import {makeStyles, OutlinedTextFieldProps, TextField} from "@material-ui/core";

type DefaultSelectPropsType = OutlinedTextFieldProps
type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: any) => void
}
const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        variant,
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: object[] = options ? options.map((op, i) =>
        <option value={op} key={op + '-' + i}>{op}</option>) : [];

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <TextField fullWidth variant="outlined" select onChange={onChangeCallback} SelectProps={{
            native: true,

        }} {...restProps} color='primary'>
            {mappedOptions}
        </TextField>
    )
}

export default SuperSelect

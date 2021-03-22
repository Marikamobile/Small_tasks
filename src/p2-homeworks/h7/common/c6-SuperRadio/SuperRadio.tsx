import React, {ChangeEvent} from 'react'
import {
    Checkbox,
    FormControl,
    FormControlLabel, InputProps,
    makeStyles,
    ThemeProvider
} from "@material-ui/core";
import {Favorite, FavoriteBorder} from "@material-ui/icons";
import {amber, deepPurple} from "@material-ui/core/colors";
import {theme} from "../Theme/Theme";

type DefaultRadioPropsType = InputProps
type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: theme.spacing(1),
    },
    highlight: {
        backgroundColor: 'red',
    },
    palette: {
        primary: {
            main: 'amber',
            contrastText: amber[900],
            color: amber[900]
        }
    },
    label: {
        color: amber[900]
    }
}));

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const classes = useStyles();
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <FormControlLabel className={classes.root}
                          control={<Checkbox icon={<FavoriteBorder/>} checked={value === o}
                                             checkedIcon={<Favorite/>} color='primary'/>}
                          label={o} key={o + '-' + i}
        />
    )) : []

    return (<ThemeProvider theme={theme}>
            <FormControl>
                {mappedOptions}
            </FormControl></ThemeProvider>
    )
}

export default SuperRadio

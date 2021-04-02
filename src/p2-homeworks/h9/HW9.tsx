import React from 'react'
import Clock from './Clock'
import {makeStyles, Typography} from "@material-ui/core";
const useStyles = makeStyles( {
    typography: {
        color: 'white',
        fontFamily: "Raleway Light",
        textAlign: 'center'
    }})
function HW9() {
    const classes = useStyles()

    return (
        <div>
            <hr/><Typography variant='h6' className={classes.typography}>HOMEWORK DATE-TIME</Typography>


            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    )
}

export default HW9

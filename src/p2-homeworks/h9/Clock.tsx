import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {Card, CardActions, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        backgroundImage: 'linear-gradient(45deg, rgba(254, 107, 139, 0.8), rgba(255, 142, 83, 0.8))',
        width: '200px',
        textAlign: 'center',
        margin: 'auto',
        padding: '10px'
    },
    buttons: {
        textAlign: "center",
        margin: 'auto',
    },

    button: {
        width: '80px',
        fontSize: '10px'
    },
    typography: {
        color: 'white'
    }
})

function Clock() {
    const classes = useStyles()
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)

    }

    const stringTime = date?.toLocaleTimeString() || <br/>
    const stringDate = date?.toLocaleDateString() || <br/>

    return (<>
            <Card className={classes.card}>
                <Typography className={classes.typography} onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}>
                    {stringTime}

                </Typography>
                {show && (
                    <Typography className={classes.typography}>
                        {stringDate}
                    </Typography>
                )} </Card>
            <div className={classes.buttons}>
                <SuperButton onClick={start} className={classes.button}>start</SuperButton>
                <SuperButton onClick={stop} className={classes.button}>stop</SuperButton>
            </div>
        </>
    )
}

export default Clock

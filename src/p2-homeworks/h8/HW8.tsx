import React, {useState} from 'react'
import {checkAC, homeWorkReducer, sortAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]
const useStyles = makeStyles(theme => ({

    card: {
        backgroundImage: 'linear-gradient(45deg, rgba(254, 107, 139, 0.8), rgba(255, 142, 83, 0.8))',
        width: '400px',
        margin: 'auto',
    },
    cardContent: {
        textAlign: "center",
        margin: 'auto',

    },
    container: {
        margin: 'auto',

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
        color: 'white',
        fontFamily: 'montserrat',
        marginLeft: "10px",
        marginTop: '-20px'
    },
    typographyH5: {
        color: 'white',
        fontFamily: 'Raleway Light',
        textAlign: 'center',
        marginBottom: '10px'
    }
}))

function HW8() {
    const classes = useStyles()
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any


    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
            {`${p.name} - ${p.age} по паспорту`}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(people, sortAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(people, sortAC('down')))
    const check18 = () => setPeople(homeWorkReducer(people, checkAC(18)))

    return (
        <div className={classes.container}>
            <hr/>
            <Typography variant={"h5"} className={classes.typographyH5}> HOMEWORK 8</Typography>

            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                </CardContent>
                <Typography variant={"h6"} className={classes.typography}> {finalPeople}</Typography>

            </Card>
            <div className={classes.buttons}>
                <SuperButton onClick={sortUp} className={classes.button}>sort up</SuperButton>
                <SuperButton onClick={sortDown} className={classes.button}>sort down</SuperButton>
                <SuperButton onClick={check18} className={classes.button}>check 18</SuperButton>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8

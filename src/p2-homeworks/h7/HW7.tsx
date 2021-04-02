import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import {Card, CardActions, CardContent, FormControl, makeStyles, ThemeProvider, Typography} from "@material-ui/core";
import {theme} from "./common/Theme/Theme";

const arr = ['x', 'y', 'z']
const useStyles = makeStyles({
    card:{
        width: '400px',
        margin: 'auto',
       marginBottom: '20px',
        marginTop: '20px',
        backgroundImage: 'linear-gradient(45deg, rgba(254, 107, 139, 0.8), rgba(255, 142, 83, 0.8))',

},
    select:{
        /*backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  */  },
    typography:{
        fontFamily: 'Raleway Light',
        textAlign: 'center'
    }
})
function HW7() {
    const [value, onChangeOption] = useState<string | undefined>(arr[1])
const classes = useStyles();
    return (<ThemeProvider theme={theme}>
        <Card className={classes.card}><CardContent>
            <Typography variant='h4' className={classes.typography}>HOMEWORK SELECT</Typography>
        </CardContent>

            {/*should work (должно работать)*/}
            <CardActions>
                <SuperSelect className = {classes.select}
                    variant={'outlined'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </CardActions>
            <CardActions>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </CardActions>

            {/*<hr/>
            для личного творчества, могу проверить
            <AlternativeSuperSelect/>
            <AlternativeSuperRadio/>
            <hr/>*/}
        </Card>
        </ThemeProvider>
    )
}

export default HW7

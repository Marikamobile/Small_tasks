import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import {Card, CardActions, CardContent, FormControl, ThemeProvider, Typography} from "@material-ui/core";
import {theme} from "./common/Theme/Theme";

const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState<string | undefined>(arr[1])

    // @ts-ignore
    return (<ThemeProvider theme={theme}>
        <Card><CardContent>
            <Typography variant='h2'>homeworks 7</Typography>
        </CardContent>

            {/*should work (должно работать)*/}
            <CardActions>
                <SuperSelect
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

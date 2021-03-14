import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import './HW6.css'

function HW6() {
    const [value, setValue] = useState<string>('')
    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        let newValue = restoreState('editable-span-value', value)
        setValue(newValue)
    }

    return (
        <div className='homework-6'>
            <hr/>
            <h3>Editable Span</h3>

            {/*should work (должно работать)*/}
            <div className='editable-span'>
                <SuperEditableSpan

                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6

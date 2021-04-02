import {UserType} from "../HW8";
const SORT = 'SORT'
const CHECK = 'CHECK'
type sortAT = {
    type: typeof SORT,
    playload: 'up' | 'down'
}
type checkAT = {
    type: typeof CHECK
    playload: number
}
type homeWorkReducerType = sortAT | checkAT
export const homeWorkReducer = (state: UserType[], action: homeWorkReducerType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'SORT': {
            let newState = [...state]
           action.playload === 'up'? newState.sort((a, b) => (a.name > b.name) ? 1 : -1)
               : newState.sort((a, b) => (a.name > b.name) ? -1 : 1)
            return newState
        }
        case 'CHECK': {
            return [...state].filter(p => p.age>=18)
        }
        default: return state
    }
}
export const checkAC=(playload: number): checkAT=>{
    return{
        type: CHECK,
        playload
    }
}
export const sortAC=(playload: 'up' | 'down'): sortAT=>{
    return{
        type: SORT,
        playload
    }
}
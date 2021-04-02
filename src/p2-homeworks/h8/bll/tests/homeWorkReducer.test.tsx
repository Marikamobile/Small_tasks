import React from 'react'
import {checkAC, homeWorkReducer, sortAC} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, sortAC('up'))

    console.log(newState)
     expect(newState).toStrictEqual([
         {_id: 1, name: 'Александр', age: 66},
         {_id: 3, name: 'Виктор', age: 44},
         {_id: 4, name: 'Дмитрий', age: 40},
         {_id: 5, name: 'Ирина', age: 55},
         {_id: 2, name: 'Коля', age: 16},
         {_id: 0, name: 'Кот', age: 3}
     ])
    expect(initialState).toBe(initialState)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, sortAC('down'))
expect(newState).toStrictEqual([
    {_id: 0, name: 'Кот', age: 3},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 5, name: 'Ирина', age: 55},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 1, name: 'Александр', age: 66}
])
    expect(initialState).toBe(initialState)

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, checkAC(18))
expect(newState.length).toBe(4)
expect(newState.map(p=>p.age)[0]).toBeGreaterThanOrEqual(18)
expect(newState.map(p=>p.age)[1]).toBeGreaterThanOrEqual(18)
expect(newState.map(p=>p.age)[2]).toBeGreaterThanOrEqual(18)
expect(newState.map(p=>p.age)[3]).toBeGreaterThanOrEqual(18)
expect(initialState).toBe(initialState)
})

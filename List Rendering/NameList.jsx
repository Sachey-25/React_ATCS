import React from 'react'
import Person from './Person'

function NameList() {
    //I would like to initialize the variables
    const names = ['Sachin','Tendulkar']
    const persons=[
        {
            id:101,
            name:'Sachin',
            age:'28',
            skill:'React'
        },
        {
            id:102,
            name:'Rathan',
            age: '29',
            skill:'Java'
        },
        {
            id:103,
            name:"Roshan",
            age:'29',
            skill:'Manageral'
        },
        {
            id:104,
            name:'Mahima',
            age:'40',
            skill:'JavaDev'
        }]
        const personList = persons.map(person => <Person key={person.name}
            person={person} /> )
        const NameList = names.map((name,index) =>
            <h2 key={index}>{index} : {name}</h2>
        )
  return (
      <div>
          {NameList}
          {personList}
      </div>
  )}
export default NameList
import React from 'react'
import './assets/css/style.css'
import Cards from './Cards'
import cardItem from './cardItem'

const App = () => {
  return (
    <div> 
    <h2>All The Cards Are Here</h2>
      <Cards img = {cardItem[0].image} name = {cardItem[0].name} des = {cardItem[0].des} />
      <Cards img = {cardItem[1].image} name = {cardItem[1].name} des = {cardItem[1].des} />
      <Cards img = {cardItem[2].image} name = {cardItem[2].name} des = {cardItem[2].des} />
      <Cards img = {cardItem[3].image} name = {cardItem[3].name} des = {cardItem[3].des} />
      <Cards img = {cardItem[4].image} name = {cardItem[4].name} des = {cardItem[4].des} />
      <Cards img = {cardItem[5].image} name = {cardItem[5].name} des = {cardItem[5].des} />
      <Cards img = {cardItem[6].image} name = {cardItem[5].name} des = {cardItem[6].des} />
      <Cards img = {cardItem[7].image} name = {cardItem[5].name} des = {cardItem[7].des} />
      <Cards img = {cardItem[8].image} name = {cardItem[5].name} des = {cardItem[8].des} />
    </div>
  )
}

export default App

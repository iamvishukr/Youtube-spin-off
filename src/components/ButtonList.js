import React from 'react'
import Button from './Button'


const ButtonList = () => {
  const list = ["All", "Music", "Gaming", "Live", "News", "Football", "Funny"];
  
  return (
    <div className='flex gap-3'>
        {list.map((item) => {
         // console.log(item);
         return <Button name={item} key={item} />
        })}
        {/* <Button name="All"/>
        <Button name="Music"/>
        <Button name="Gaming"/>
        <Button name="Live"/>
        <Button name="News"/>
        <Button name="Football"/>
        <Button name="Funny"/> */}
    </div>
  )
}

export default ButtonList
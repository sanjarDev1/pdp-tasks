import React from 'react'

const Todo = ({item}) => {
  return (
    <div className='row'>
    <div className="col-md-1">
        <input style={{transform:'scale(2)'}} type={'checkbox'} id={'checkbox/' + item.id} checked={item.completed}/>
    </div>
    <div className="col-md-5">
        <h3><label htmlFor={'checkbox/' + item.id}>{item.title}</label></h3>
    </div>
    </div>
  )
}

export default Todo
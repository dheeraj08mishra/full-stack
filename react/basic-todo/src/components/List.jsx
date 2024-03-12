import React from 'react'

function List(props) {
    return (
        <div className='list'>
            <ul>
                {props.taskArr && props.taskArr.map((task,index)=>{
                    return <li key={index}>{task}<button onClick={()=>props.handleDelete(index)}>Delete</button></li>
                })}
            </ul>
        </div>
    )
}

export default List;
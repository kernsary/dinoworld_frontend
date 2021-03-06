import React from 'react'

const MoveButton = (props) => {

  const handleMove = () => {
    props.onMove(props.id)
  }

  if(props.foodType === "plants"){
    return(
      <button onClick={handleMove}>Move</button>
    )
  }
  return (<div></div>)
}

export default MoveButton

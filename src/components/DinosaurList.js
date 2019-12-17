import React, {Component} from 'react'
import DeleteButton from './DeleteButton'
import MoveButton from './MoveButton'
import FeedButton from './FeedButton'
import Request from '../helpers/request.js'

class DinosaurList extends Component {

  constructor(props){
    super(props)
    this.state = {
      dinosaurNodes: []
    }
  }

  render(){

  const request = new Request();
  const requestsToMake = this.props.dinosaurs.map(dinosaur => {
    return request.get('/dinosaurs/'+dinosaur.id)
  })

  Promise.all(requestsToMake)
  .then(data => {
    this.setState({dinosaurNodes: data.map((dinosaur, index) => {
            return(
              <li key={index} className="dinosaur-item">
              <h4>{dinosaur._embedded.species.name}</h4>
              <FeedButton dinosaur={dinosaur} dinosaurs={this.props.dinosaurs} onDelete={this.props.onDelete}/>
              <DeleteButton id={dinosaur.id} onDelete={this.props.onDelete}/>
              </li>

            )
  })
})
})

  // request.get('/dinosaurs/'+dinosaur.id)
  // .then(data => console.log(data))

  // const dinosaurNodes =
  // props.dinosaurs
  // .map((dinosaur) => {
  //   const request = new Request()
  //
  //
  //   return (
  //     .map((dinosaur, index) => {
  //         return(
  //           <li key={index} className="dinosaur-item">
  //           <h4>{dinosaur._embedded.species.name}</h4>
  //           <FeedButton dinosaur={dinosaur} dinosaurs={props.dinosaurs} onDelete={props.onDelete}/>
  //           <DeleteButton id={dinosaur.id} onDelete={props.onDelete}/>
  //           </li>
  //
  //         )
  //       }
  //
  //     )
  //   )
  // )


return(
  <>
    <ul>
      {this.state.dinosaurNodes}
    </ul>
  </>
)
}
}

export default DinosaurList

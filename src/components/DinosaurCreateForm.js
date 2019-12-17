import React, {Component} from 'react'

class DinosaurCreateForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      species: null,
      paddock: null
    }

    this.handleSpecies = this.handleSpecies.bind(this)
    this.handlePaddock= this.handlePaddock.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  handleSpecies(event){
    this.setState(
      {species: "http://localhost:8080/species/" + event.target.value}
    )
  }

  handlePaddock(event){
    this.setState(
      {paddock: "http://localhost:8080/paddocks/" + event.target.value}
    )
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.createDinosaur(this.state)
  }

  render(){

    const paddockNodes = this.props.paddocks.map((paddock, index) => {
      return(
        <option key={index} value={paddock.id}>{paddock.name}</option>
      )
    }
  )

  const speciesNodes = this.props.species.map((species, index) => {
    return(
      <option key={index} value={species.id}>{species.name}</option>
    )
  }
)

  return(
    <div>
    <h1>Add a new dinosaur</h1>
    <form onSubmit={this.handleSubmit}>
    <select onChange={this.handleSpecies}>
    <option disabled selected>Choose species</option>
    {speciesNodes}
    </select>
    <select onChange={this.handlePaddock}>
    <option disabled selected>Choose paddock</option>
      {paddockNodes}
    </select>
    <button type="submit">Save</button>
    </form>
    </div>
  )
}

}

export default DinosaurCreateForm

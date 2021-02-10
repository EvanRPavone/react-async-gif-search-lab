import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  state = {
    gifs:[],
    search:''
  }

  fetchGifs = () =>{
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC`).then(res=>res.json())
      .then(json => this.setState({gifs: json.data.slice(0,3)}, ()=>{console.log(this.state.gifs)})
    );
  }

  handleSubmit = (info) => {
    this.setState({
      search:info
    },this.fetchGifs())

  }



  componentDidMount(){
    console.log(this.state)
  }

  render(){
    return(
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

}
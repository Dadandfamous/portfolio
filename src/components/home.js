import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// export default function Home(props) {
//   return (<h1>Welcome to class!</h1>)
// }

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>
           <Link to="/">Instagram</Link>
        </h1>
      </div>
    )
  }
}




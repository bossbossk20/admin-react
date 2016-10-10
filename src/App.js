import React, { Component } from 'react'
import AppBar from './Component/AppBar'

class App extends Component {
  render () {
    return (
      <div>
        <div>
            <div>
                <div/>
                <div>
                  <div>
                    <AppBar/>
                  </div>
                  {this.props.children}
                </div>
                <div/>
            </div>
        </div>
      </div>
    )
  }
}

export default App

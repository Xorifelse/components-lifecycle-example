import React, { Component } from 'react'

const echo = (...params) => console.log('B: ', ...params)


class ClassComponent extends Component {
  state = {
    firstname: '',
    lastname: '',
    ignore: true
  }
  componentWillMount(){
    echo('componentWillMount()')
  }

  componentDidMount(){
    echo('componentDidMount()')
  }

  componentWillUnmount(){
    echo('componentWillUnmount()')
  }

  shouldComponentUpdate(nextProps, nextState){
    echo('shouldComponentUpdate()', 'props', this.props, nextProps, 'state', this.state, nextState)

    // Should we ever be in a scenario where we should only rerender on a particular data change
    const ignore = this.state.ignore === nextState.ignore
    const listen = true

    // Because we are skipping a render, the input still contains the value of the previous render
    // When you make a change to the input, it uses that value to reupdate the state.
    // So don't be fooled, the onChangeHandler is called!

    return ignore || listen
  }

  onChangeHandler = (e) => { // this is a class variable, that holds a function that has access to "this" on a callback.
    const { name, value } = e.target // tree shaking `name` and `value` from the event.target object
    console.log('updating this.state.' + name, 'with "' + value + '"' )

    this.setState({
      ...this.state, // copy entire current state, this "copy" will make the component rerender regardless what has changed.
      [name]: value // update event value (assign value to key)
    })
  }

  render(){
    echo('rendering')

    return (
      <>
        <h1>{this.props.title}</h1>
        <input name="firstname" placeholder="firstname" value={this.state.firstname} onChange={this.onChangeHandler} />
        <input name="lastname" placeholder="lastname" value={this.state.lastname} onChange={this.onChangeHandler} />
        <input name="ignore" placeholder="ignore" value={this.state.ignore === true ? '' : this.state.ignore || ''} onChange={this.onChangeHandler} />
      </>
    )
  }
}

export default ClassComponent
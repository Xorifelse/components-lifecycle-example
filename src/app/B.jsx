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

    // Here we can specifically listen to what value has changed
    const condition_a = this.state.ignore === nextState.ignore // did state.ignore change?
    const condition_b = true // sample code, trigger render regardless.

    return condition_a || condition_b
  }

  onChangeHandler = (e) => { // this is a class variable, that holds a function that has access to "this" on a callback.
    const { name, value } = e.target // tree shaking `name` and `value` from the event.target object
    echo(`updating this.state.${name} with '${value}'`)

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
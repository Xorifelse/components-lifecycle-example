import React, { Component } from 'react'

const echo = (...params) => console.log('C: ', ...params)


interface ITypescriptClassComponentState {
  firstname: string
  lastname: string
  ignore: boolean
}

interface ITypescriptClassComponentProps {
  title: string
}

class TypescriptClassComponent extends Component<ITypescriptClassComponentProps, ITypescriptClassComponentState> {
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

    return this.state.ignore === nextState.ignore // skip render when state.ignore is being modified
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
    const { title } = this.props
    const { firstname, lastname, ignore } = this.state 

    return (
      <>
        <h1>{title}</h1>
        <input name="firstname" placeholder="firstname" value={firstname} onChange={this.onChangeHandler} />
        <input name="lastname" placeholder="lastname" value={lastname} onChange={this.onChangeHandler} />
        <input name="ignore" placeholder="ignore" value={ignore === true ? '' : ignore || ''} onChange={this.onChangeHandler} />
      </>
    )
  }
}

export default TypescriptClassComponent
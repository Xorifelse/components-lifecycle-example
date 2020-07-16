
import React, { useState, useEffect } from 'react';

const echo = (...params) => console.log('A: ', ...params)

function FunctionComponent(props) {
  // Seperate states
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [ignore, setIgnore] = useState(true)

  // wrap our different state setters to one callback
  // this is a fuction, that just returns a function
  const setter = (fn) => (e) => fn(e.target.value)

  // Singular state like class components
  // const [state, setState] = useState({})
  // setState({
  //   ...state,          // copy current state
  //   firstname: 'value' // asign / update: key value pair
  // })

  useEffect(() => {
    echo('useEffect', 'componentDidMount()')
  }, [])

  useEffect(() => {
    echo('useEffect', 'shouldComponentUpdate()')
  }, [firstname, lastname, ignore])

  echo('rendering')

  return (
    <>
      <h1>{props.title}</h1>
      <input name="firstname" placeholder="firstname" value={firstname} onChange={setter(setFirstname)} />
      <input name="lastname" placeholder="lastname" value={lastname} onChange={setter(setLastname)} />
      <input name="ignore" placeholder="ignore" value={ignore === true ? '' : ignore || ''} onChange={setter(setIgnore)} />
    </>
  )
}

export default FunctionComponent
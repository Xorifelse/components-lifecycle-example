import React from 'react';

import ExampleA from './app/A'
import ExampleB from './app/B'
import ExampleC from './app/C'

export default () => (
  <>
    <ExampleA title="this is a function component with hooks" />
    <ExampleB title="this is a class component" />
    <ExampleC title="this is a class component with typescript"/>
  </>
)

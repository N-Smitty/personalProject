import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Dog 1', value: 1 },
  { key: 2, text: 'Dog 2', value: 2 },
  { key: 3, text: 'Dog 3', value: 3 },
]

const DropdownComp = () => (
  <Dropdown clearable options={options} selection />
)

export default DropdownComp;

//this will be to select a specific dog to account
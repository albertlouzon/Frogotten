import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Filters = () => (
  <div>
    <span>FILTERS: </span>
    <FilterLink className='commonButton' filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
  </div>
)

export default Filters
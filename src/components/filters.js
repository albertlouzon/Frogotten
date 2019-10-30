import React from 'react'
import FilterLink from '../containers/FilterLink'
import { filters } from '../actions/todoActions'

const Filters = () => (
    <div>
        <span>Show: </span>
        <FilterLink filter={filters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={filters.IN_PROGRESS}>Active</FilterLink>
        <FilterLink filter={filters.FINISHED}>Completed</FilterLink>
    </div>
)

export default Filters

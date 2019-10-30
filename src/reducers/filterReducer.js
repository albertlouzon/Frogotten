import { filters } from '../actions'

const visibilityFilter = (state = filters.ALL, action) => {
    switch (action.type) {
        case 'FILTER':
            return action.filter;
        default:
            return state
    }
}

export default visibilityFilter

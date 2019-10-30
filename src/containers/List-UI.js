import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import List from '../components/list'
import { filters } from '../actions'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case filters.ALL:
            return todos
        case filters.FINISHED:
            return todos.filter(t => t.completed)
        case filters.IN_PROGRESS:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.filters)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)

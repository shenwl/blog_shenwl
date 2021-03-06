// 精简版redux，用于理解redux及其主要api
// 还需理解react-redux, 中间件

export function createStore(reducer, middleWare) {
    if(middleWare) {
        return middleWare(createStore)(reducer)
    }
    let currentState = {}
    let currentListeners = {}

    function getState() {
        return currentState
    }
    function subscribe(listener) {
        currentListeners.push(listener)
    }
    function dispatch(action) {
        currentState = reducer(currentState, action)
        currentListeners.forEach(v => v())
        return action
    }

    // 初始化action
    dispatch({type: '@REDUX_INIT'})
    return {
        getState,
        subscribe,
        dispatch,
    }
}

export applyMiddleWare(middleWare) {
    return createStore => (...args) => {
        const store = createStore(...args)
        const dispatch = store.dispatch

        const midApi = {
            getState: store.getState,
            dispatch: (...args) => dispatch(...args)
        }
        dispatch = middleWare(midApi)(store.dispatch)
        return {
            ...store,
            dispatch
        }
    }
}

function bindActionCreateor(creator, dispatch) {
    return (...args) => dispatch(creator(...args))
}

export function bindActionCreators(creators, dispatch) {
    let bound = {}
    Object.keys(creators).forEach(v => {
        let creator = creators[v]
        bound[v] = bindActionCreateor(creator, dispatch)
    })
    return bound
}

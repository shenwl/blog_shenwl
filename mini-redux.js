// 精简版redux，用于理解redux及其主要api
// 还需理解react-redux, 中间件

export function createStore(reducer) {
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

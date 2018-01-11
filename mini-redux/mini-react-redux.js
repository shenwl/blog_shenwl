// mini-react-redux
import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from './mini-redux'

// connect负责链接组件，把redux里的数据放到组件的属性里, HoC
// 1. 接收一个组件，把state里的一些数据放进去，返回一个组件
// 2. 数据变化的时候，能够通知组件
export const connect = (mapStateToProps=state=>state, mapDispatchToProps={}) => (WrapComponent) => {
    return class ConnectComponent extends React.Component {
        static contextTypes = {
            store: PropTypes.object
        }
        constructor(props, context) {
            super(props, context)
            this.state = {
                props: {}
            }
        }
        componentDidMount() {
            const {store} = this.context
            store.subscribe(() => this.update())
            this.update()
        }
        update() {
            const {store} = this.context
            const stateProps = mapStateToProps(store.getState())
            // 方法不能直接给，因为需要dispatch，要用dispatch把action包一层
            const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch)
            this.setState({
                props: {
                    ...stateProps,
                    ...dispatchProps,
                    ...this.state.props
                }
            })
        }
        render() {
            return (
                <WrapComponent {...this.state.props}></WrapComponent>
            )
        }
    }
}

// Provider，把store放到context里，所有的子元素可以直接取到store
export class Provider extends React.Component {
    static childContextTypes = {
        store: ProtoTypes.object
    }
    constructor(props, context) {
        super(props, context)
        this.store = props.store
    }
    getChildContext() {
        return {store: this.store}
    }
    render() {
        // 只渲染子元素
        return this.props.children
    }
}

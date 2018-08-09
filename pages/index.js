import React, {Component} from 'react'
import {connect} from 'react-redux'

class Index extends Component {
    render () {
        return (
            <div>
                <h1>home</h1>
            </div>
        )
    }
}

export default connect()(Index)
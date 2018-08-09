import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/style.scss'

class Layout extends Component {
    render () {
        return (
            <div className='layout'>
                { this.props.children }
            </div>
        )
    }
}

export default connect()(Layout)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSurveys } from 'actions'

class SurveysList extends Component {
  renderSurveys () {
    return this.props.surveys.map(({
      _id, title, body, dateSent, yes, no, lastResponded
    }) => {
      return (
        <div className='card blue-grey lighten-5 z-depth-3' key={_id}>
          <div className='card-content'>
            <span className='card-title'>{title}</span>
            <p>
              {body}
            </p>
            <p className='right'>
              Sent On: {new Date(dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className='card-action blue-grey lighten-4'>
            <div className='z-depth-1 chip green darken-1 white-text'>Yes: {yes}</div>
            <div className='z-depth-1 chip red darken-1 white-text'>No: {no}</div>
            <div className='right'>
              Last vote: {lastResponded
                ? new Date(lastResponded).toLocaleDateString()
                : 'none'
              }
            </div>
          </div>
        </div>
      )
    })
  }
  componentDidMount () {
    this.props.fetchSurveys()
  }
  render () {
    return (
      <div style={{ padding: 10 }}>
        {this.renderSurveys()}
      </div>
    )
  }
}

const mapStateToProps = ({ surveys }) => ({
  surveys
})

export default connect(mapStateToProps, { fetchSurveys })(SurveysList)

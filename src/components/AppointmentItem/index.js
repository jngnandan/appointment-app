
import React, { Component } from 'react'

export class AppointmentItem extends Component {
  render(props) {
    const { currentList, bookmarkStar } = this.props
    const { id, title, date, isActive } = currentList

    const starAppoinment = () => {
      bookmarkStar(id)
    }

    return (
      <div className='m-2 border-2 border-gray-500 rounded py-1 w-44 pl-2 px-1 flex flex-row justify-between items-center'>
        <div>
          <h1 className='font-medium'>{title}</h1>
          <p>Date: {date}</p>
        </div>
        <button onClick={starAppoinment}>
          {isActive ?
            <img className='h-7' src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png" /> :
            <img className='h-7' src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png" />
          }
        </button>
      </div>
    )
  }
}

export default AppointmentItem

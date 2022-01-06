
import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import AppointmentItem from '../AppointmentItem/index'
const appointmentList = [
  {
    id: uuidv4(),
    title: "Nandan",
    date: "10/06/1996",
    isActive: false,
  },
]

export class Appointments extends Component {
  state = {
    currentList: appointmentList,
    title: "",
    date: ""
  }

  addAppointment = (event) => {
    event.preventDefault();
    const { title, date, appointmentList } = this.state

    const newAppointment = {
      id: uuidv4(),
      title,
      date,
    }

    this.setState(prevState => ({
      currentList: [...prevState.currentList, newAppointment],
      title: "",
      date: ""
    }))

  }

  addTitle = (event) => {
    this.setState({ title: event.target.value })
  }
  addDate = (event) => {
    this.setState({ date: event.target.value })
  }


  bookmarkStar = (id) => {
    console.log("this is like")

    this.setState(prevState => ({
      currentList: prevState.currentList.map(eachItem => {
        if (id === eachItem.id) {
          return { ...eachItem, isActive: !eachItem.isActive }
        }
        return eachItem
      })
    }))

  }


  render(props) {
    const { currentList, date } = this.state
    return (
      <div className='bg-gradient-to-t from-purple-400 to-pink-400 h-screen flex flex-col justify-center items-center'>
        <div>
          <div className='card px-8 py-6 w-full bg-white shadow rounded flex flex-row justify-between items-center'>
            <form onSubmit={this.addAppointment} className='mr-6'>
              <h1 className='text-xl font-semibold text-gray-700 py-2'>Add Appointment</h1>

              <div className='flex flex-col'>
                <label className="text-sm text-gray-500" for="username" >TITLE</label>
                <input onChange={this.addTitle} className='rounded border-2 border-gray-500 py-2 px-4' type="text" placeholder='Title' />
              </div>

              <div className='flex flex-col'>
                <label className="text-sm text-gray-500 mt-2" for="username" >DATE</label>
                <input id="date" value={date} onChange={this.addDate} className='rounded border-2 border-gray-500 py-2 px-4' type="date" />
              </div>

              <button type="submit" className='rounded px-6 py-2 text-white mt-4 bg-violet-500 hover:bg-violet-600'>Add</button>
            </form>

            <img className='h-28 ' src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png" />
          </div>
        </div>
        <hr />
        <h1 className='text-2xl font-bold text-left py-3'>Appointments</h1>
        <div className='flex flex-row justify-start '>
          <div className='flex flex-wrap justify-center items-center'>
            {currentList.map(eachItem => (
              <AppointmentItem bookmarkStar={this.bookmarkStar} currentList={eachItem} key={eachItem.id} />
            ))}
          </div>
        </div>

      </div>
    )
  }
}
export default Appointments

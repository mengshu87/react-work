import React,{Component} from 'react'
import BigCalendar from 'react-big-calendar'
import events from './events'

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])


class Calendar extends Component{

    render(){
        return(
            <div>
                <BigCalendar
                    events={events}
                    views={allViews}
                    step={60}
                    showMultiDayTimes
                    defaultDate={new Date(2015, 3, 1)}
                />
                123
            </div>
        )
    }
}
export default Calendar;

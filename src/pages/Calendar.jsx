import React from 'react';
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
  ViewsDirective,
  ViewDirective,
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../data/dummy';
import  Header  from '../components/Header';

function Calendar() {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
       selectedDate={new Date(2021,0,10)}
      >
        <ViewsDirective>
          <ViewDirective option='Day' />
          <ViewDirective option='Week' />
          <ViewDirective option='WorkWeek' />
          <ViewDirective option='Month' />
          <ViewDirective option='Agenda' />
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  );
}

export default Calendar;

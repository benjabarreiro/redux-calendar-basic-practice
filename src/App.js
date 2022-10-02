import './App.css';
import { Calendar } from './components/Calendar';
import { useDispatch } from 'react-redux';
import {resetAllAppointments} from './features/calendar'

function App() {
  const dispatch = useDispatch()
  const resetCalendarHanlder = () => dispatch(resetAllAppointments())
  return (
    <div className="App">
      <Calendar />
      <button onClick={resetCalendarHanlder}>Reset</button>
    </div>
  );
}

export default App;

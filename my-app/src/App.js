import Array from './array/Array';
import Calendar from './calendar/Calendar'
import User from './user/User'
import Counter from './counter/Counter'
import ArrayState from './arraystate/ArrayState';
import Timer from './timer/Timer'

function App() {
  const name = "Diego";
  return (
    <>
      <Timer />
      <ArrayState />
      <Counter />
      <User />
      <Calendar />
      <Array />
      
      <div>Hello {name}</div>
    </>
  );
}

export default App;

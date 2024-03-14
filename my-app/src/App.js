import Array from './array/Array';
import Calendar from './calendar/Calendar'
import User from './user/User'


function App() {
  const name = "Diego";
  return (
    <>
      <User />
      <Calendar />
      <Array />
      <div>Hello {name}</div>
    </>
  );
}

export default App;

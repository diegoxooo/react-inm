import './Calendar.css'

function* getDays(){
    for(let i=0; i<31; i++){
        yield i+1;
    }
}

export default function Calendar(){
    function handlerClicker(ev){
        console.log(ev.target.textContent)
    }
    
    const days = [...getDays()];

    return(
        <div className='calendar'>
        {days.map(day=><div onClick={handlerClicker} className="day" key={day}>{day}</div>)}
        </div>
    )
}
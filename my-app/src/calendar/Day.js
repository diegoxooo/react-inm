import './Day.css';

export default function Day(props){ // Si hacemos se puede sustituir "props" por "{day, handlerDay}"
    const {day/*, handlerDay*/} = props; // Entonces esta linea desaparece

    /*function handlerClick(ev){
        ev.stopPropagation();
        handlerDay(day);
    }*/

    return (
        /* <div onClick={handlerClick} className="day">{day}</div> */
        <div data-day={day} className="day">{day}</div>
    )
}
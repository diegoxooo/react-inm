import { useEffect, useState } from "react";

function getTime(date){
    let option = {hour: 'numeric', minute: 'numeric', second: 'numeric'}
    return new Intl.DateTimeFormat('es-ES', option).format(date)
}

export function useTimer(initialDate, interval=1000){
    const [date, setDate] = useState(initialDate)

    useEffect(()=>{
        const handler = setInterval(()=>setDate(new Date()), interval)
        return ()=>clearInterval(handler)
    })
    return getTime(date)
}
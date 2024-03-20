import { useSearchParams } from "react-router-dom"

export default function Pagina2(){
    const data = useSearchParams()
    console.log(data)
    
    const result = [...data].reduce((a,v)=>{
        a[v[0]]=v[1] // debuggear esta linea para estudiar "reduce"
        return a;
    },{})

    console.log(result);

    return (
        <div>Pagina2</div>
    )
}
import { useEffect, useState } from "react";

export function useFetch(url, initialValue){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(initialValue);

    useEffect(()=>{
        fetch(url)
            .then(response=>response.json()) // Primero debemos transformar la respuesta "Response" de fetch a JSON
            .then(data=>setData(data)) // En caso de OK
            .catch(error=>setError(error)) // Cuando hay error (No se va a ejecutar ya que el fetch devuelve codigos de status que el catch no captura)
            .finally(()=>setLoading(false)) // Cuando se ha cargado
    },[url]) // Asi hacemos que "useEffect" se ejecute solo cuando la url cambie

    return {
        loading,
        error,
        data
    }
} 
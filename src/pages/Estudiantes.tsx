import { useEffect, useState } from "react";


export default function Estudiantes(props) {
    
    const [estudiantes, setEstudiantes] = useState("NA")

    useEffect(() => {
        fetch("http://localhost:5001/estudiantes")
            .then((response) => response.json())
            .then((data) => {
                console.log("Respuesta de /estudiantes:", data.estudiantes);
                setEstudiantes(data.estudiantes)
            })
            .catch((error) => {
                console.error("Error en la petición /estudiantes:", error);
            });
    }, []);
    return (
        <div>
            <h3>{estudiantes}</h3>
        </div>
    );
}

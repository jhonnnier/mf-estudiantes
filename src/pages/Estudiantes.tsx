import { mapEasingToNativeEasing } from "framer-motion";
import { useEffect, useState } from "react";
import "./Estudiantes.css";


export default function Estudiantes(props) {
    
    const [estudiantes, setEstudiantes] = useState([])

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
        <div className="estudiantes-container">
            <h3 className="estudiantes-title">Lista de Estudiantes</h3>
            <table className="estudiantes-table">
                <thead>
                    <tr className="estudiantes-thead-row">
                        <th className="estudiantes-th">Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {estudiantes.map((nombre, idx) => (
                        <tr key={idx} className="estudiantes-tr">
                            <td className="estudiantes-td">{nombre}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

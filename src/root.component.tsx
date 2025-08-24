import Estudiantes from "./pages/Estudiantes";

export default function Root(props) {
    return (
        <div style={{padding: '2rem'}}>
            <Estudiantes/>
            <section>{props.name} is mounted!</section>
        </div>
    );
}
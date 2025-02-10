const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
    <div>
        {
        props.parts.map(part =>
            <Part key={part.id} part={part} />
        )}
    </div>
)

const Part = (props) => (
    <p>
        {props.part.name} {props.part.exercises}
    </p>
)

const Total = (props) => <p><b>Total excercises: {props.parts.reduce((acc, part) => acc + part.exercises, 0)}</b></p>

const Course = ({ course }) => {
    return (<div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>)
}

export default Course
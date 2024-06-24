const Course = ({course}) => {
    return (
        <div>
            <h1>{course.name}</h1>
            {course.parts.map(part => 
                <p key={part.id}>{part.name} {part.exercises}</p>
            )}
            <p><b>Total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b></p>
        </div>
    )
}

export default Course
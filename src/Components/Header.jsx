export default function Header(props) {

    return (
        <>
            <h1>{props.content[0]}</h1>
            <p>{props.content[1]}</p>
        </>
    )
}
interface DataProps {
    name: string,
    url: string,
    id: string,
    time: string
}

export function DisplayData(props: DataProps) {
    return (
        <>
         <h2>{props.name}</h2>
         <p>{props.url}</p>
         <p>{props.id}</p>
         <p>{props.time}</p>
        </>
    )
}

export default DisplayData;
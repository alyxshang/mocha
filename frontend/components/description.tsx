interface DescriptionProps {
    heading: string,
    description: string
}

export function Description(props: DescriptionProps){
    return (
        <>
         <h2>{ props.heading }</h2>
         <p>{ props.description }</p>
        </>
    );
}

export default Description;
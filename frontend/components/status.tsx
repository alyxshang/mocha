interface StatusProps {
    heading: string,
    text: string,
}

export function PostStatus(props: StatusProps){
    return (
        <>
         <h2>{props.heading}</h2>
         <p>{props.text}</p>
        </>
    )
}

export default PostStatus;
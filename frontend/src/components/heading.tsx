import { HeadingProps } from "../lib/types";
export function Heading(props: HeadingProps): JSX.Element {
    return(
        <>
         <h1>{props.title}</h1>
        </>
    );
}

export default Heading;
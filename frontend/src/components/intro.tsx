import { IntroProps } from "../lib/types";

export function Intro(props: IntroProps): JSX.Element{
    return (
        <>
         <h2 className="sub">{props.title}</h2>
         <p className="sub">{props.description}</p>
        </>
    );
}
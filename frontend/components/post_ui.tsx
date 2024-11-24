import { PostStatus } from "./status.tsx";
import { postLink } from "../lib/loader.ts";
import { useEffect, useState } from 'preact/hooks';

interface PostFeedbackProps {
    name: string,
    link: string,
    baseUrl: string
}

export function PostFeedback(props: PostFeedbackProps){
    const [status, setStatus] = useState<number>();
    useEffect(
        () => {
            postLink(
                props.name, 
                props.link, 
                props.baseUrl
            ).then((result) => setStatus(result.ok))
            .catch((_e) => setStatus(1));
        }
    );
    if (status === 0){
        return (
            <>
             <PostStatus heading={'Result'} text={'Link submitted successfully.'}/>
            </>
        );
    }
    else {
        return (
            <>
             <PostStatus heading={'Result'} text={'Link not submitted successfully.'}/>
            </>
        );
    }
}
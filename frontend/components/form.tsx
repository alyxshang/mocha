import { baseUrl } from '../config.ts';
import { useState } from 'preact/hooks';
import { PostFeedback } from "./post_ui.tsx";

interface FormProps {
    nameLabel: string,
    urlLabel: string,
    buttonLabel: string
}

export function InputForm(props: FormProps){
    const [name, setName] = useState<string>();
    const [url, setUrl] = useState<string>();
    const [nameInput, setNameInput] = useState<string>();
    const [urlInput, setUrlInput] = useState<string>();
    const onNameChange = (e: any) => {
        e.preventDefault();
        setNameInput(e.target.value)
    }
    const onUrlChange = (e: any) => {
        e.preventDefault();
        setUrlInput(e.target.value)
    }
    return (
        <>
        <form>
         <label>{props.nameLabel}</label>
         <input value={nameInput} onChange={onNameChange}/>
         <label>{props.urlLabel}</label>
         <input value={urlInput} onChange={onUrlChange}/>
         <button type="submit" onClick={() => {setName(nameInput);setUrl(urlInput)}}>{props.buttonLabel}</button>
        </form>
        <PostFeedback baseUrl={baseUrl} name={name!} link={url!}/>
        </>
    );
}

export default InputForm;
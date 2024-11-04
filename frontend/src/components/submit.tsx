import { useState } from "react";
import { useEffect } from "react";
import { FormProps } from "../lib/types";
import { writeLinkObj } from "../lib/fetcher";

export function SubmitForm(
    props: FormProps
): JSX.Element {
    const [link, setLink] = useState('');
    const [name, setName] = useState('');
    const [sanitizedName, setSanitizedName] = useState('');
    const [sanitizedLink, setSanitizedLink] = useState('');
    const [linkWrite, setLinkWrite] = useState('');
    const [fetchAsync, setFetchAsync] = useState(false);

    const handleLinkInput = (event: any) => {
        setLink(event.target.value);
    }
    const handleNameInput = (event: any) => {
        setName(event.target.value);
    }
    const setUserInput = (event: any) => {
        event.preventDefault();
        setSanitizedLink(link);
        setSanitizedName(name);
    }
    useEffect(
        () => {
            writeLinkObj(
                sanitizedName,
                sanitizedLink
            ).then(
                (written) => {
                    if (written.link_url === sanitizedLink){
                        setLinkWrite('Link saved.');
                    } 
                    else {
                        setLinkWrite('Link coult not be saved.');
                    }
                }
            );
        },
        [fetchAsync]
    );
    const verifyWrite = () => {
        setFetchAsync(true);
    }
    return (
        <>
        <form>
         <label>{props.nameLabel}</label>
         <input
          type="text"
          value={name}
          onChange={handleNameInput}
         />
         <label>{props.linkLabel}</label>
         <input
          type="text"
          value={link}
          onChange={handleLinkInput}
         />
         <button onClick={(event: any) => {setUserInput(event); verifyWrite();}}>{props.buttonInit}</button>
        </form>
        <p>{linkWrite}</p>
        </>
    )
}
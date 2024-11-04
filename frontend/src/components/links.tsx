import {LinksProps} from '../lib/types.ts';

export function SavedLinkInfo(props: LinksProps): JSX.Element {
    const shortenedLink: string = props.baseDomain + '/' + props.recvId;
    return (
        <>
         <h2 className="sub">{props.linkHeading}</h2>
         <p className="sub">{props.recvLinkLabel + ': ' + props.recvLink}</p>
         <p className="sub">{props.recvShortenedLabel + ': ' + shortenedLink}</p>
         <p className="sub">{props.recvShasumLabel + ': ' + props.recvShasum}</p>
         <p className="sub">{props.recvTimeLabel + ': ' + props.recvTime}</p>
        </>
    )
}

export default SavedLinkInfo;
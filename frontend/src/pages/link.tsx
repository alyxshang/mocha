import { useState } from 'react';
import { useEffect } from 'react';
import { LinkObj } from '../lib/types';
import { appName } from '../../config';
import { baseHost } from '../../config';
import { linkHeading } from '../../config';
import { recvTimeLabel } from '../../config';
import { recvLinkLabel } from '../../config';
import { readLinkObj } from '../lib/fetcher';
import { Spacer } from '../components/spacer';
import { recvShasumLabel } from '../../config';
import { Heading } from '../components/heading';
import { recvShortenedLabel } from '../../config';
import { SavedLinkInfo } from '../components/links';
import { useParams } from 'react-router-dom';

export function LinkInfo() {
  const { id } = useParams<string>();
  const [data, setData] = useState<LinkObj>();
  const [success, setSuccess] = useState(false);
  useEffect(
    () => {
      readLinkObj(id!)
        .then(
        (resp) => {
          setSuccess(true);
          console.log(resp);
          setData(resp);
        }
      )
      .catch(
        (e: any) => {
          console.log(e);
          setSuccess(false);
          setData(undefined);
        }
      )
    }
  );
  if (success){
    return (
      <>
       <Heading title={appName}/>
       <Spacer/>
        <div className="main">
         <SavedLinkInfo 
          recvLinkLabel={recvLinkLabel}
          linkHeading={linkHeading}
          recvShasumLabel={recvShasumLabel}
          recvTimeLabel={recvTimeLabel}
          recvShortenedLabel={recvShortenedLabel}
          baseDomain={baseHost}
          recvLink={data!.link_url}
          recvShasum={data!.shasum}
          recvTime={data!.id}
          recvId={data!.id}
        />
        </div>
       <Spacer/>
      </>
    )
  }
  else {
    return (
      <>
       <Heading title={appName}/>
       <Spacer/>
        <div className="main">
         <h2 className="sub">{"Error!"}</h2>
         <p className="sub">{"A link with the ID " + id! + " does not exist."}</p>
        </div>
       <Spacer/>
      </>
    )
  }

}

export default LinkInfo;
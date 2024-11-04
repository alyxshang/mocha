import {appName} from '../../config';
import {subTitle} from '../../config';
import { nameLabel } from '../../config';
import { linkLabel } from '../../config';
import { buttonLabel } from '../../config';
import { Intro } from '../components/intro';
import {Spacer} from '../components/spacer';
import { appDescription } from '../../config';
import { Heading } from '../components/heading';
import { SubmitForm } from '../components/submit';

export function Home() {
  return (
    <>
     <Heading title={appName}/>
     <Spacer/>
      <div className="main">
       <Intro title={subTitle} description={appDescription}/>
       <SubmitForm nameLabel={nameLabel} linkLabel={linkLabel} buttonInit={buttonLabel}/>
      </div>
     <Spacer/>
    </>
  )
}

export default Home;
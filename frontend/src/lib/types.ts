interface HeadingProps{
    title: string
}
export type {HeadingProps};
interface IntroProps{
    title: string
    description: string
}
export type {IntroProps};
interface FormProps{
    nameLabel: string,
    linkLabel: string,
    buttonInit: string,
}
export type {FormProps};

interface LinksProps{
    linkHeading: string,
    recvLinkLabel: string,
    recvLink: string,
    recvShortenedLabel: string,
    recvId: string,
    recvShasumLabel: string,
    recvShasum: string,
    recvTimeLabel: string,
    recvTime: string,
    baseDomain: string
}
export type {LinksProps};

interface LinkObj{
    name: string,
    date_time: string,
    link_url: string,
    shasum: string,
    id: string
}
export type {LinkObj};

interface LinkWritePayload{
    name: string,
    link: string,
    time: string
}
export type {LinkWritePayload};
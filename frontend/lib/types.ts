interface HeaderComponentProps {
    heading: string
}
export type { HeaderComponentProps };

interface FeedbackComponentProps {
    nameLabel: string,
    name: string,
    dateTimeLabel: string
    dateTime: string,
    linkUrlLabel: string,
    linkUrl: string,
    shasumLabel: string,
    shasum: string,
    idLabel: string
    id: string
}
export type { FeedbackComponentProps };

interface LinkObj {
    name: string,
    date_time: string,
    link_url: string,
    shasum: string,
    id: string
}
export type { LinkObj };

interface LinkWritePayload {
    name: string,
    time: string,
    link: string
}
export type { LinkWritePayload };

interface LinkReadPayload {
    id: string,
}
export type { LinkReadPayload };
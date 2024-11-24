interface LinkPostPayload{
    name: string,
    time: string,
    link: string,
}
export type { LinkPostPayload };

interface LinkObj{
    name: string,
    date_time: string,
    link_url: string,
    shasum: string,
    id: string
}
export type { LinkObj };

interface Result<T> {
    ok: T,
    err: number
}
export type { Result };
interface HeaderProps {
    name: string
}
export function Header(props: HeaderProps){
    return (
        <>
         <h1>{ props.name }</h1>
        </>
    );
}

export default Header;
import Link from "next/link";

export default function Home(){
    return (
    <>
        <h1>Welcome to Fraejix's Website!</h1>
        <Link href="/about">Check out what this is about!</Link>
        <br/>
        <Link href="/profile">About me!</Link>
        <br/>
        <Link href="/blog">Check out my blogs!</Link>
        <br/>
        <Link href="/products">Check out my products!</Link>
    </>
    )
};
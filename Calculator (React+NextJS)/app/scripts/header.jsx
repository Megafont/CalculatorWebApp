'use client'; // This is a React directive that tells it that this is a client component


// "export default" tells NextJS that this should be rendered as the default component on the page.
export default function Header({ title })
{
    return <h1>{title ? title : 'Default title'}</h1>;
}
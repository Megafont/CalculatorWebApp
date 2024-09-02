import Calculator from './calculator.jsx';


export default function HomePage()
{
    return (
        <div>
            <Header title="Calculator" />
            <Calculator />
        </div>
    );
}


function Header(props)
{
    return <h1>{props.title ? props.title : 'Default Title'}</h1>;
}

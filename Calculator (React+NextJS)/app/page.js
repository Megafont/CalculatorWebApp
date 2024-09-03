import Header from './scripts/header'
import Calculator from './scripts/calculator'

// "export default" tells NextJS that this should be rendered as the default component on the page.
export default function HomePage()
{
    return (
        <div align="center">
            <Header title="Calculator" />
            <Calculator />
        </div>
    );
}


import { Link } from 'react-router-dom';

function header(props) {
    return (
        <div>
            <p>Hello, {props.name}</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>Category</li>
            </ul>
        </div>
    )
}

export default header;

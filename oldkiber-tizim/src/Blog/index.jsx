import './style.scss'

function Blog({ message, number }) {
    return ( 
        <>
            <h1>{message}</h1>
            <h2>{number}</h2>
        </>
     );
}

Blog.defaultProps = {
    message: 'this is message',
    number: 0
}

export default Blog;
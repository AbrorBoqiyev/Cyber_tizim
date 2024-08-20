import BlogList from '../BlogList';
import './style.scss'
import { useState } from 'react';

function Blog() {

    const [blogs, setblogs] = useState([
        {title: 'My new website', body: 'lorem ipsome...', author: 'Mario', id: 1 },
        {title: 'Welcome party!', body: 'lorem ipsome...', author: 'Yoshi', id: 2 },
        {title: 'web dev top tips', body: 'lorem ipsome...', author: 'Mario', id: 3 }
    ])

    return ( 
        <div className="vlogs">
            <BlogList blogs={blogs} title='All blogs'/>
            
        </div>
     );
}

Blog.defaultProps = {
    message: 'this is message',
    number: 0
}

export default Blog;
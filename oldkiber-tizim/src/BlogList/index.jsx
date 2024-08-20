function BlogList({blogs, title}) {

    // const blogs = props.blogs;
    // const title = props.title

    return ( 
        <div className="blog-list">
            {/* <h2>{title}</h2> */}
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h1>{blog.title}</h1>
                    <p> <i> written by </i> <b>{blog.author}</b></p>
                </div>
            ))}
        </div>
     );
}

export default BlogList;
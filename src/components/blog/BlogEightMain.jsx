import React from 'react'
import { Link } from 'react-router-dom';

const BlogGridMain = (props) => {
    const { blogID, blogImage, blogTitle, blogPublishedDate } = props;
    return (
        <>
            <div className="rts-blog-h-2-wrapper">
                <Link to={`/blog/${blogID}`} className="thumbnail">
                    <img src={`assets/images/blog/${blogImage}`} alt="Business_blog" />
                </Link>
                <div className="body text-start">
                    <span>Business Solution / by David Dolean</span>
                    <Link to={`/blog/${blogID}`}>
                        <h4 className="title">
                            {blogTitle ? blogTitle : 'How to growing your business'}
                        </h4>
                    </Link>
                </div>
            </div>
        </>

    )
}

export default BlogGridMain
import React from 'react'
import { Link } from 'react-router-dom';

const BlogGridMain = (props) => {
    const { blogID, blogImage, blogTitle, blogPublishedDate } = props;
    return (
        <>
            <div className="single-blog-one-wrapper">
                <div className="thumbnail">
                    <img src={`assets/images/blog/${blogImage}`} alt="business_Blog" />
                    <div className="blog-badge">
                        <span>{blogPublishedDate ? blogPublishedDate : 'Charlie Doyle'}</span>
                    </div>
                </div>
                <div className="blog-content">
                    <p>
                        <span>Business Solution </span>/ by David Dolean
                    </p>
                    <Link to={`/blog/${blogID}`}>
                        <h5 className="title">
                            {blogTitle ? blogTitle : 'How to growing your business'}
                        </h5>
                    </Link>
                    <Link
                        className="rts-read-more btn-primary"
                        to={`/blog/${blogID}`}
                    >
                        <i className="far fa-arrow-right" />
                        Read More
                    </Link>
                </div>
            </div>
        </>

    )
}

export default BlogGridMain
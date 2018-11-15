import React from 'react';
import {Link} from 'react-router-dom';



const BlogsCard = (props) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-header bg-secondary text-white">
                Blogs ID: {props.blogs.id}
                </div>
                    <div className="card-body">
                    <h5 className="card-title">{props.blogs.title} blogged: </h5>
                    <p className="card-text">{props.blogs.content}</p>
                    
                    <Link to={`/single/${props.blogs.id}`} className="btn btn-primary">View this Blog!</Link>
                </div>
            </div>
        </div>
    );
};

export default BlogsCard;
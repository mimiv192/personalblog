import React, { Component } from 'react';
import BlogsCard from './blogscard';


class BlogsTimeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        };
    }


    async componentDidMount() {
        try {
            let res = await fetch('/api/blogs');
            let blogs = await res.json();
            console.log(blogs);
           this.setState ({blogs});
        } catch (e) {
            console.log(e);
        }
    }
    renderBlogs() {
        return this.state.blogs.map(blog => {
            return <BlogsCard key={blog.id} blogs={blog} />
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderBlogs()}

            </div>
        );
    }
};

export default BlogsTimeline;
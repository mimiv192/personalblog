import React, { Component } from 'react';
import BlogsCard from './blogscard';


class SingleBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog:{}
        };
    }


    async componentDidMount() {
        try {
            let id= this.props.match.params.id
            let res = await fetch(`/api/blogs/${id}`);
            let blog = await res.json();
            console.log(blog);
           this.setState ({blog});
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="row">
            
             <BlogsCard blogs={this.state.blog} />

            </div>
        );
    }
};

export default SingleBlog;

import React, { Component } from 'react';
import Form from './form';

class Frontpage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: [],
        };
    }
    
    componentDidMount() {
        fetch('http://localhost:3000/api/blogs')
            .then(res => res.json())
            .then(blogs => this.setState({ blogs }))
            .catch(error => console.log('parsing failed', error))
    }

    renderBlogs() {
        return this.state.blogs.map(blog => {
            console.log(blog)
        })
    }

    onChange = updatedValue => {
        this.setState({
            fields: {
            ...this.state.fields,
            ...updatedValue
         }  
         
    });
};

    


    render() {
        return (
            <div>
                <div>
                    <Form history= {this.props.history} onChange ={fields=> this.onChange(fields) } />
                    <p>{JSON.stringify(this.state.fields,null,2)}</p>
                </div>
                {this.renderBlogs()}
            </div>
        );
    }
}
export default Frontpage;

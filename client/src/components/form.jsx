import React from 'react';

class Form extends React.Component {
    state = {
        title: " ",
        content: " ",

    };

    change = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        fetch('api/blogs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'


            },
            body: JSON.stringify( {
                title: this.state.title,
                content: this.state.content
            })
        })
        .then((res)=>{
            console.log(res);
            return res.json()

            
        }).then((data)=> {
this.props.history.push(`/single/${data.id}`)
        })
    };

    render() {
        return (
            <form>
                <input
                    name='title'
                    id= 'input1-bar' 
                    placeholder='Title'
                    value={this.state.title}
                    onChange={e => this.change(e)}
                />
                <div>
                    <br />
                    <input
                    name='content'
                    id= 'input2-bar'
                    placeholder='Content'
                    value={this.state.content}
                    onChange={e => this.change(e)}
                    />
                <button id= "submit-btn" onClick={e => this.onSubmit(e)}>Submit</button>
                </div>
            </form>
        );
    }
}

export default Form;
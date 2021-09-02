import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class AddComments extends Component {



    state = {
        formdata: {
            comment: '',
            rate: 1,
            elementId: this.props.idf
        },

    }

    handleSubmit = async (e) => {
        e.preventDefault()
        //console.log(this.state.formdata)
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
                method: 'POST',
                body: JSON.stringify(this.state.formdata),
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU1M2IzNTgxNzAwMTVjMjI2ZmEiLCJpYXQiOjE2MzAzNjg2ODcsImV4cCI6MTYzMTU3ODI4N30.7zF9OMSTNbEUMII8CAYKeF_rwaPxb_G9_eH9vW1IHhk",
                    "content-type": "application/json"
                }
            })
            if (response.ok) {
                alert('comment posted successfully !! ')
            }
        } catch (error) {
            alert(error.msg)
        }

    }

    render() {
        return (
            <>
                <Form onSubmit={(e) => this.handleSubmit(e)} style={{ border: '2px solid red' }}>
                    <Form.Group>
                        <Form.Label>rate here!</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.formdata.rate}
                            onChange={e => {
                                this.setState({
                                    formdata: {
                                        ...this.state.formdata,
                                        rate: e.target.value
                                    }
                                })
                            }}
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>comment here</Form.Label>
                        <Form.Control type="text" placeholder="enter comment..."
                            value={this.state.formdata.comment}
                            onChange={(e) => this.setState({
                                formdata: {
                                    ...this.state.formdata,
                                    comment: e.target.value
                                }
                            })
                            } />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Add Review
                    </Button>
                </Form>
            </>

        )
    }
}
export default AddComments
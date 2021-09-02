import { Component } from "react";
import { ListGroup, Row } from 'react-bootstrap'
import { RiDeleteBin3Fill } from 'react-icons/ri'
import { BiEditAlt } from 'react-icons/bi'


class FetchComments extends Component {

    state = {
        commentsfetched: [],
        decider: false
    }

    componentDidUpdate = async (prevprops) => {

        if((prevprops.id !== this.props.id)){
           
        const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.id, {
            method: 'GET',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU1M2IzNTgxNzAwMTVjMjI2ZmEiLCJpYXQiOjE2MzAzNjg2ODcsImV4cCI6MTYzMTU3ODI4N30.7zF9OMSTNbEUMII8CAYKeF_rwaPxb_G9_eH9vW1IHhk"
            }
        })
        const commentsdata = await response.json()
        //console.log(commentsdata)
        if (response.ok) {
            this.setState({
                commentsfetched: commentsdata
                

            })
            // console.log(commentsdata)
        }
       }
    }

    handledelete = async (id) => {

        console.log(id)

        const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + id, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU1M2IzNTgxNzAwMTVjMjI2ZmEiLCJpYXQiOjE2MzAzNjg2ODcsImV4cCI6MTYzMTU3ODI4N30.7zF9OMSTNbEUMII8CAYKeF_rwaPxb_G9_eH9vW1IHhk"
            }
        })
        if (response.ok) {
            alert('comment deleted successfully')
        }
    }

    render() {
        return (
            <>
                <ListGroup className='text-dark'>
                    {this.state.commentsfetched.map(ele => (

                        <ListGroup.Item key={ele._id}> {ele.comment} : <strong>rated</strong> {ele.rate}
                            <Row className='justify-content-between mt-2'>
                                <BiEditAlt color='skyblue' />
                                <RiDeleteBin3Fill color='red' onClick={(e) => this.handledelete(ele._id)} />

                            </Row>
                        </ListGroup.Item>


                    ))}

                </ListGroup>


            </>
        )
    }
}
export default FetchComments
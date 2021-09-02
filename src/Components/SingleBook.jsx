import { Component } from "react";
import { Card } from 'react-bootstrap'


import AddComments from "./AddComments";


class SingleBook extends Component {

    // state = {
    //     isclicked: false
    // }

    render() {
        // console.log(this.props.book)
        return (
            <>
                <Card style={{ height: '32rem'}} className='px-2 mt-2'
                    onClick={() => this.props.changeselectedbook(this.props.book.asin)}>
                    <Card.Img
                        variant="top"
                        src={this.props.book.img}
                        className='img-fluid'
                        style={{ width: '16rem', height: '26rem', objectFit: 'cover' }}
                    />
                    <Card.Body className='text-muted'>
                        <Card.Title>{this.props.book.title}</Card.Title>

                    </Card.Body>
                </Card>
                {/* {
                    this.state.isclicked && <FetchComments id={this.props.book.asin} />

                }
                {
                    this.state.isclicked && <AddComments idf={this.props.book.asin} />
                } */}
            </>
        )
    }
}
export default SingleBook
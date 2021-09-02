import { Component } from "react";
import { Container, Col, Row, Form } from 'react-bootstrap'
import SingleBook from "./SingleBook";
import FetchComments from "./FetchComments";
import AddComments from "./AddComments";

class BookList extends Component {

    state = {
        searchquery: '',
        selectedbook : null
    }
    // handleSubmit = () => {
    //     this.setstate({
    //         searchquery:e.target.value
    //     })
    // }
    render() {
        return (
            <>
                <Container className='mt-5 mb-3'>
                    <Row>
                    <Col md={8}>
                    <Row>
                        <Form
                            style={{ width: '100%', padding: '15px' }}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="search..."
                                    value={this.state.searchquery}
                                    onChange={e => {
                                        this.setState({
                                            searchquery: e.target.value
                                        })
                                    }} />
                            </Form.Group>
                        </Form>
                    </Row>
                    <Row>
                        {
                            this.props.books.filter(b => b.title.toLowerCase().includes(this.state.searchquery)).map(obj => (
                                <Col sm={6} md={4} lg={3} className='px-3 mt-2' key={obj.asin}>
                                    <SingleBook book={obj}  changeselectedbook = {(asin) => this.setState({
                                        selectedbook : asin
                                    })}

                                    />
                                </Col>
                            ))
                        }
                    </Row>
                    </Col>
                    <Col md={4}>
                    {this.state.selectedbook && <AddComments idf={this.state.selectedbook}/>}
                    {this.state.selectedbook && <FetchComments id={this.state.selectedbook} />}
                    
                    
                    </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default BookList
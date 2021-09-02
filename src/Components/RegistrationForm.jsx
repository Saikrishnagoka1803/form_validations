import { useState } from "react";
import { Row, Container, Col, Form, Button  } from "react-bootstrap";
import { Link, withRouter } from 'react-router-dom'

const RegistrationForm = ({location, history, match}) => {

    const [details, setdetails] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
    const [decider, setdecider] = useState(false)

      const handleInput = (key, value) => {
        setdetails({
             ...details,
              [key]: value,
        });
      }

      const validation = () => {
          let validity = false
          if (
            details.name.length >= 2 && details.surname.length >= 3 &&
            details.password.length >= 8 && details.password.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/ ) &&
            details.password === details.confirmPassword)
             {
            validity= true;
            }
            return validity
      }

      const handleRegistration = (e) => {
          e.preventDefault()
            setdecider(true)

      }

    return(
        <Container>
            <h3 className='text-success mb-3'> User Registration!!</h3>
            <Row className='justify-content-center'>
                <Col md={6}>
            {decider ? (
          <>
            <h1 className='text-info'> Registered successfully :)</h1>
            <h3 className='text-warning mb-4'> Your details:</h3>
            <p>{details.name}</p>
            <p>{details.surname}</p>
            <p>{details.email}</p>
           <Link to='/loggedintobookstore'>
            <Button className = 'mt-5' type='submit' variant='warning'> Click here to log in</Button>
            </Link>
          </>
        ) : (
                <Form onSubmit={handleRegistration}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  onChange={(e) => handleInput("name", e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  required
                  onChange={(e) => handleInput("surname", e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  required
                  onChange={(e) => handleInput("email", e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  onChange={(e) => handleInput("password", e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  onChange={(e) => handleInput("confirmPassword", e.target.value)
                  }
                />
              </Form.Group>
              <Button type="submit" disabled={!validation()} variant='success'>
                Register
              </Button>
            </Form>
        )} 
                </Col>
            </Row>
        </Container>
    )
}
export default RegistrationForm
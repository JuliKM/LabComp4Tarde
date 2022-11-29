import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";

export const Navigation = () => {

    return (
        <>
            <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="/homePosta">HOME</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/dondeEstamos">Donde Estamos</Nav.Link>
                <br></br>
                <Nav.Link href="/">Productos</Nav.Link>
                <br></br>
                <br></br>
                <br></br>        
              </Nav>
            </Navbar>
        </>
    )
}
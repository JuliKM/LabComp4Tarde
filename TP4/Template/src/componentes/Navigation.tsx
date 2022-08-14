import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap"

export const Navigation = () => {

    return (
        <>
            <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="/home">INICIO</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/ciclovida">Ciclo de Vida</Nav.Link>
              </Nav>
              <Form>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
              </Form>
            </Navbar>
        </>
    )
}
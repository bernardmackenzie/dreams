import NavbarComponent from "../components/NavbarComponent";
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import FooterComponent from "../components/FooterComponent";
const masukPage = () => {
    return (
        <>
            <div className="masuk">
                <NavbarComponent />

                <Container>
                    <Row>
                        <Col >
                            <div className="title">
                                <h2>Masuk untuk pesan kue!</h2>
                                <p>Masukkan akun yang telah terdaftar.</p>

                            </div>
                            <Form action="/home">
                                <Row>
                                    <Col >
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control Type="email" placeholder="Masukkan Email" required></Form.Control>
                                        <Form.Label>Buat Password</Form.Label>
                                        <Form.Control Type="password" placeholder="Masukkan Password" required></Form.Control>
                                        <Link to="#" className="d-flex justify-content-end mt-3">Lupa password</Link>
                                    </Col>

                                </Row>
                               
                                <Button type="submit" className="btn-utama  mt-5 w-100">Masuk</Button>

                            </Form>

                            <p className="punya-akun">belum punya akun? <Link to="/daftar">daftar</Link></p>
                        </Col>
                    </Row>
                </Container>

            </div>
            <FooterComponent />
        </>
    );
}

export default masukPage;
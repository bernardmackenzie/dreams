import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const KueRekomendasi = () => {
    return (
        <>
            <div className="kue-rekomendasi">
                <Container>
                    <h5>Rekomendasi yang kamu suka</h5>
                    <Row className="mt-3">
                        <Col lg={3}>
                            <Card >
                                <Card.Img variant="top" src="../src/assets/img-rekomen1.png" />
                                <Card.Body>
                                    <Row>
                                        <Col lg={6}>
                                            <Card.Title>Cakes</Card.Title>
                                        </Col>
                                        <Col lg={6}>
                                            <Card.Text>Mulai dari</Card.Text>
                                            {/* <Card.Title className="cost">IDR 220K</Card.Title> */}
                                            <Link to="/keranjang"> IDR 220K</Link>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3}>
                            <Card >
                                <Card.Img variant="top" src="../src/assets/img-rekomen2.png" />
                                <Card.Body>
                                    <Row>
                                        <Col lg={6}>
                                            <Card.Title>Cookies</Card.Title>
                                        </Col>
                                        <Col lg={6}>
                                            <Card.Text>Mulai dari</Card.Text>
                                            {/* <Card.Title className="cost">IDR 25k</Card.Title> */}
                                            <Link to="/keranjang"> IDR 25K</Link>
                                        </Col>

                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3}>
                            <Card >
                                <Card.Img variant="top" src="../src/assets/img-rekomen3.png" />
                                <Card.Body>
                                    <Row>
                                        <Col lg={6}>
                                            <Card.Title>Sandwitch</Card.Title>
                                        </Col>
                                        <Col lg={6}>
                                            <Card.Text>Mulai dari</Card.Text>
                                            {/* <Card.Title className="cost">IDR 35k</Card.Title> */}
                                            <Link to="/keranjang"> IDR 35K</Link>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3}>
                            <Card >
                                <Card.Img variant="top" src="../src/assets/img-rekomen4.png" />
                                <Card.Body>
                                    <Row>
                                        <Col lg={6}>
                                            <Card.Title>Bread</Card.Title>
                                        </Col>
                                        <Col lg={6}>
                                            <Card.Text>Mulai dari</Card.Text>
                                            {/* <Card.Title className="cost">IDR 90k</Card.Title> */}
                                            <Link to="/keranjang"> IDR 90K</Link>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default KueRekomendasi;
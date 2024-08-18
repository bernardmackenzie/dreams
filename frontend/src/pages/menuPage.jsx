import NavComponent from "../components/NavComponent";
import { Container, Row, Col, Button, Card } from "react-bootstrap"
// import { Link } from "react-router-dom";
import PromoComponent from "../components/PromoComponent";
import FooterComponent from "../components/FooterComponent";


const menuPage = () => {
    return (
        <>
            <div className="menu">
                <div className="hero-menu">
                    <NavComponent />
                    <Container>
                        <Row>
                            <Col lg={5}>
                                <div className="deskripsi-hero">
                                    <h1>Kami rekomendasikan menu kue terbaik.</h1>
                                    <Button variant="outline-dark">Pesan Sekarang</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>



                <div className="makanan-kue">
                    <Container>
                        <h2>Menu terbaik kami</h2>
                        <Row className="mt-3">
                            <Col lg={3}>
                                <Card >
                                    <Card.Img variant="top" src="../src/assets/img-cake-blackforest.png" />
                                    <Card.Body>
                                        <Row>
                                            <Col lg={6}>
                                                <Card.Title>Cake blackforest</Card.Title>
                                            </Col>
                                            <Col lg={6}>
                                                <Card.Text>Harga </Card.Text>
                                                <Card.Title className="cost">IDR 210K</Card.Title>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={3}>
                                <Card >
                                    <Card.Img variant="top" src="../src/assets/img-choco-cupcake.png" />
                                    <Card.Body>
                                        <Row>
                                            <Col lg={6}>
                                                <Card.Title>Choco cupcake</Card.Title>
                                            </Col>
                                            <Col lg={6}>
                                                <Card.Text>Harga </Card.Text>
                                                <Card.Title className="cost">IDR 20K</Card.Title>
                                            </Col>

                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={3}>
                                <Card >
                                    <Card.Img variant="top" src="../src/assets/img-cheese-cake.png" />
                                    <Card.Body>
                                        <Row>
                                            <Col lg={6}>
                                                <Card.Title>Cheese <br /> cake</Card.Title>
                                            </Col>
                                            <Col lg={6}>
                                                <Card.Text>Harga </Card.Text>
                                                <Card.Title className="cost">IDR 205K</Card.Title>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={3}>
                                <Card >
                                    <Card.Img variant="top" src="../src/assets/img-tiramisu-cake.png" />
                                    <Card.Body>
                                        <Row>
                                            <Col lg={6}>
                                                <Card.Title>Tiramisu <br /> cake</Card.Title>
                                            </Col>
                                            <Col lg={6}>
                                                <Card.Text>Harga </Card.Text>
                                                <Card.Title className="cost">IDR 230K</Card.Title>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <div className="makanan-cake">
                    <Container>
                        <Row className="mt-3">
                            <Col lg={3}>
                                <Card >
                                    <Card.Img variant="top" src="../src/assets/img-cake-gluten.png" />
                                    <Card.Body>
                                        <Row>
                                            <Col lg={6}>
                                                <Card.Title>Cake <br /> gluten</Card.Title>
                                            </Col>
                                            <Col lg={6}>
                                                <Card.Text>Harga </Card.Text>
                                                <Card.Title className="cost">IDR 205K</Card.Title>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={3}>
                                <Card >
                                    <Card.Img variant="top" src="../src/assets/img-cake-mufin.png" />
                                    <Card.Body>
                                        <Row>
                                            <Col lg={6}>
                                                <Card.Title>Cake <br /> mufin</Card.Title>
                                            </Col>
                                            <Col lg={6}>
                                                <Card.Text>Harga </Card.Text>
                                                <Card.Title className="cost">IDR 220K</Card.Title>
                                            </Col>

                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={3}>
                                <Card >
                                    <Card.Img variant="top" src="../src/assets/img-cake-quilling.png" />
                                    <Card.Body>
                                        <Row>
                                            <Col lg={6}>
                                                <Card.Title>Cake <br /> quilling</Card.Title>
                                            </Col>
                                            <Col lg={6}>
                                                <Card.Text>Harga </Card.Text>
                                                <Card.Title className="cost">IDR 300K</Card.Title>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={3}>
                                <Card >
                                    <Card.Img variant="top" src="../src/assets/img-chocolate-cupcake.png" />
                                    <Card.Body>
                                        <Row>
                                            <Col lg={6}>
                                                <Card.Title>Chocolate cupcake</Card.Title>
                                            </Col>
                                            <Col lg={6}>
                                                <Card.Text>Harga </Card.Text>
                                                <Card.Title className="cost">IDR 25K</Card.Title>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <PromoComponent/>
                <FooterComponent/>
                
            </div>
        </>
        
    );
}

export default menuPage;
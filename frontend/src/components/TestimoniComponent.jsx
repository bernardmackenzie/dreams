import { Container, Row, Col, Card, CardBody } from "react-bootstrap";

const TestimoniComponent = () => {
    return (
        <>
            <div className="testimoni">
                <Container>
                    <Row>
                        <Col>
                            <h5>Apa kata mereka tentang kami</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Card>
                                <Row>
                                    <Col md={6}>
                                        <img src="../src/assets/testi1.png" className="img-fluid rounded-start" alt="..." />
                                    </Col>
                                    <Col md={6}>
                                        <CardBody>
                                            <p className="card-text">“hadir untuk memenuhi keinginan Anda akan kue yang lezat dan penuh gizi.
                                                Setiap kue kami dibuat dengan cinta dan menggunakan bahan-bahan terbaik untuk memberikan pengalaman manis. ”</p>

                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card>
                                <Row>
                                    <Col md={6}>
                                        <img src="../src/assets/testi2.png" className="img-fluid rounded-start" alt="..." />
                                    </Col>
                                    <Col md={6}>
                                        <CardBody>
                                            <p className="card-text">“destinasi utama untuk pecinta kue yang mencari kenikmatan premium.
                                                Dari kue-kue klasik hingga karya seni kue modern,
                                                kami memiliki ragam pilihan yang dapat memenuhi selera semua orang.”</p>

                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card>
                                <Row>
                                    <Col md={6}>
                                        <img src="../src/assets/testi3.png" className="img-fluid rounded-start" alt="..." />
                                    </Col>
                                    <Col md={6}>
                                        <CardBody>
                                            <p className="card-text">“ Nikmati kelezatan tanpa batas dari koleksi kue-kue spesial kami yang dipersiapkan dengan teliti setiap harinya.”</p>
                                           
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default TestimoniComponent;
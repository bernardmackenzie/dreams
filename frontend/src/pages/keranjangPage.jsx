import FooterComponent from "../components/FooterComponent";
import NavComponent from "../components/NavComponent";
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const keranjangPage = () => {
    return (
        <>

            <div className="search">
                <NavComponent />
                <Container>
                    <div className="hasil">
                        <h3 className="mb-3">Keranjang belanja</h3>
                        <br />
                        <br />
                        <div className="cari">
                            <Row>
                                <Col lang={6}>
                                    <h4>Produk</h4>
                                </Col>
                                <Col lang={3}>
                                    <h4>Harga</h4>
                                </Col>
                                <Col lang={3}>
                                    <h4>Jumlah</h4>
                                </Col>
                            </Row>
                        </div>

                        <Row className="card-pilihan mb-5">
                            <Col>
                                <Row className="pilihan-maskapai">
                                    <Col lg={4}><img src="../src/assets/img-cake-mufin.png" className="img-thumbnail" alt="..."></img></Col>

                                    <Col lg={6}>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <h4>IDR 200.000</h4>

                                    </Col>
                                    <Col lg={2} className="jumlah">
                                        {/* <Form.Label></Form.Label> */}
                                        <Form.Control type="number" placeholder="" required></Form.Control>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row className="card-pilihan mb-5">
                            <Col>
                                
                                <Row className="pilihan-maskapai">

                                    <Col lg={1}>
                                        <br />
                                        <button type="button" className="btn btn-outline-primary" >✔</button>
                                        
                                    </Col>
                                    <br />
                                    <Col lg={3}>
                                    <br />
                                        <h5>Semua</h5>
                                    </Col>
                                    <Col lg={4} className="text-center">
                                    <br />
                                        <h5>Total  Rp 185.000</h5>
                                    </Col>

                                    <Col lang={4} >
                                    <div className="opsi mt-3">
                                <Button href="/info" variant="btn btn-utama">Lanjut pemesanan</Button>
                                <Link to="/home" className="ms-3">Ke beranda</Link>
                            </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                    </div>


                </Container>
                <FooterComponent />
            </div>

        </>
    );
}

export default keranjangPage;
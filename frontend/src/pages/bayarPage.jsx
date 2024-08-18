import NavComponent from "../components/NavComponent";
import { Container, Row, Col, Nav, Card, Button } from "react-bootstrap";
import { useState } from "react";
import FooterComponent from "../components/FooterComponent";


const bayarPage = () => {
    const [activeKey, setActiveKey] = useState('transfer');
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedKey) => {
        setActiveKey(selectedKey);
    };

    const renderContent = () => {
        if (activeKey === "transfer") {
            return (
                <Card className="metode">
                    <img src="../src/assets/bankbri.png" alt="" />
                    <h6>Bank Bri</h6>
                    <h5>147258369</h5>
                    <p>a.n dreams Indonesia</p>
                </Card>
            );
        } else if (activeKey === "Bni") {
            return (
                <Card className="metode">
                    <img src="../src/assets/bankbni.png" alt="" />
                    <h6>Bank Bni</h6>
                    <h5>147258369</h5>
                    <p>a.n dreams Indonesia</p>
                </Card>
            );
        } else if (activeKey === "Bca") {
            return (
                <Card>
                    <img src="../src/assets/bankbca1.png" alt="" />
                    <h6>Bank bca</h6>
                    <h5>147258369</h5>
                    <p>a.n dreams Indonesia</p>
                </Card>
            );

        }
    }


    return (
        <>
            <div className="bayar">
                <NavComponent />
                <Container>
                    <Row>
                        <Col lg={8}>
                            <h5 className="mt-5">Pilih metode pembayaran</h5>
                            <Nav variant="pills" activeKey={activeKey} onSelect={handleSelect}>
                                <Nav.Item>
                                    <Nav.Link eventKey="transfer">BRI</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Bni">BNI</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Bca">BCA</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>

                    </Row>

                    <Row>
                        <Col lg={8}>
                            {activeKey === "transfer" && renderContent()}
                            {activeKey === "Bni" && renderContent()}
                            {activeKey === "Bca" && renderContent()}
                        </Col>
                        <Col lg={4}>
                            <Card className="rincian">


                                <Row>
                                    <Col lg={6}>
                                        <p>nama kue</p>
                                        <h5>cheese cake</h5>
                                    </Col>
                                    <Col lg={6}>
                                        <p>nama pemesan</p>
                                        <h5>Budi</h5>
                                    </Col>
                                </Row>
                                <hr />
                                <p>Pilihan Pembayaran</p>
                                <img src="../src/assets/bankbri.png" alt="" />
                                <p>Tanggal pengambilan</p>
                                <h5>Senin, 15 agustus 2024</h5>
                                <p>Waktu pengambilan kue</p>
                                <h5>11.00</h5>
                                <hr />
                                <Row className="mt-3">
                                    <Col lg={6}>
                                        <h5 className="text-secondary">Total pembayaran</h5>
                                    </Col>
                                    <Col lg={6}>
                                        <h5>IDR 205.000</h5>
                                    </Col>
                                </Row>
                            </Card>
                            <Button href="/konfirmasi" variant="btn btn-utama mt-3 w-100">selanjutnya</Button>
                        </Col>
                    </Row>
                </Container>
                <FooterComponent/>
            </div>
        </>
    );
}

export default bayarPage;
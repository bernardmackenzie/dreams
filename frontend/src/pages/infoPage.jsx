import FooterComponent from "../components/FooterComponent";
import NavComponent from "../components/NavComponent";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";

const infoPage = () => {
    return (
        <>
            <div className="info">
                <NavComponent />
                <div className="detail-info">
                    <Container>
                        <Row>
                            <Col lg={8}>
                                <Form action="/bayar">
                                    <div className="title">
                                        <h5>Detail Pemesan</h5>
                                        <p>Detail ini akan digunakan memastikan Pemesanan</p>
                                    </div>

                                    <Card>

                                        

                                        <Form.Label>Nama Lengkap</Form.Label>
                                        <Form.Control type="text" placeholder="Masukkan Nama Lengkap" name="nama" required></Form.Control>

                                        <Form.Label>Nomor Telepon</Form.Label>
                                        <Form.Control type="text" placeholder="Masukkan Nomor Telepon" name="telp" required></Form.Control>

                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Masukkan Email" name="telp" required></Form.Control>

                                    </Card>

                                    
                                    <Button type="submit" variant="btn btn-utama w-100 mt-3">Lanjut Bayar</Button>
                                </Form>
                                <p className="text-secondary mt-3">*Pastikan data sudah terisi dengan benar sebelum melanjutkan.</p>
                            </Col>
                            <Col lg={4}>
                                <Card className="rincian">
                                    <Row>
                                        <Col lg={6}>
                                            <p>Nama Pemesanan</p>
                                            <h5>Budi</h5>
                                        </Col>
                                        <Col lg={6}>
                                            <p>Jenis Kue</p>
                                            <h5>Cake blackforest</h5>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <p>Tanggal Pengambilan Kue</p>
                                    <h5>Jumat, 9 Agustus 2024</h5>
                                    <p>Waktu Pengambilan Kue</p>
                                    <h5>10.00</h5>
                                    <hr />
                                    <Row className="mt-3">
                                        <Col lg={6}>
                                            <h5 className="text-secondary">Total pembayaran</h5>
                                        </Col>
                                        <Col lg={6}>
                                            <h5>IDR 210.000</h5>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <FooterComponent/>
            </div>
        </>
    );
}

export default infoPage;
import { Container, Row, Col, Button } from "react-bootstrap"

const PromoComponent = () => {
    return (
        <>
            <div className="promo">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <img src="../src/assets/ic-promo.png" alt="" className="ic-promo" />
                            <h1>Promo kue terbaik untuk kamu</h1>
                            <Button className="btn-biru">Pesan Sekarang</Button>
                        </Col>
                        <Col lg={4}>
                            <img src="../src/assets/img-promo1.png" alt="" />
                            <h5>Potongan hingga 30%</h5>
                        </Col>
                        <Col lg={4}>
                            <img src="../src/assets/img-promo2.png" alt="" />
                            <h5>Harganya cuman 10rb</h5>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default PromoComponent
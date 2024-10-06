// sebelum login

import { Container, Row, Col, Button } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";
import KueRekomendasi from "../components/KueRekomendasiComponent";
import PromoComponent from "../components/PromoComponent";
import TestimoniComponent from "../components/TestimoniComponent";
// import FooterComponent from "../components/FooterComponent";
import FeeterComponent from "../components/FeeterComponent";

const berandaPage = () => {
    return (
        <>

            <NavbarComponent />
            <div className="beranda">
                <div className="hero">
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <div className="deskripsi-hero">
                                    <h1>Kue yang sempurna untuk di nikmati!</h1>
                                    
                                    <Button variant="outline-dark">Pesan Sekarang</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>


                </div>

                <KueRekomendasi/>
                <PromoComponent />
                <TestimoniComponent />
                {/* <FooterComponent/> */}
                <FeeterComponent/>
            </div>

        </>
    )
}

export default berandaPage;
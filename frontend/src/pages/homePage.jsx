import { Container, Row, Col, Button } from "react-bootstrap";
import NavComponent from "../components/NavComponent";
import KueRekomendasi from "../components/KueRekomendasiComponent";
import PromoComponent from "../components/PromoComponent";
import TestimoniComponent from "../components/TestimoniComponent";
import FooterComponent from "../components/FooterComponent";


const homePage = () => {
    return (
        <>

            <NavComponent />
            <div className="beranda">
                <div className="hero">
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <div className="deskripsi-hero">
                                    <h1>Kue yang sempurna untuk di nikmati!</h1>
                                    {/* <p>Pesan tiket sekarang dan mulai pengalaman traveling yang menyenakan untukmu.</p> */}
                                    <Button variant="outline-dark">Pesan Sekarang</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>


                </div>
                <KueRekomendasi />
                <PromoComponent />
                <TestimoniComponent />
                <FooterComponent />
            </div>

        </>
    )
}

export default homePage;
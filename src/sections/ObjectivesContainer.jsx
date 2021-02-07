import React from 'react';
import Hero from '../components/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faComments,  faHandsHelping, faCogs, faSearchDollar,  faBookReader,  faHandHoldingMedical,} from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Objective from '../components/Objective';
import IntroSections from '../components/IntroSections';

const ObjectivesContainer = () => {

    const objs = [
        {
            iconObj: <FontAwesomeIcon icon={faBullhorn} />,
            titleObj: "Promover y Difundir",
            textObj: "En el público general el conocimiento de las tecnologías de extensión de la vida y de criónica emergentes a nivel internacional."
        },
        {
            iconObj: <FontAwesomeIcon icon={faBookReader} />,
            titleObj: "Divulgar, Educar, Concientizar",
            textObj: "Sobre la posibilidad de vivir sanos e indeﬁnidamente en el futuro, generando una mayor conciencia medioambiental y de respeto interpersonal y cultural."
        },
        {
            iconObj: <FontAwesomeIcon icon={faHandsHelping} />,
            titleObj: "Interaccionar",
            textObj: " Con las entidades internacionales equivalentes que existen desde hace años y funcionar como un nexo con entidades nacionales del ámbito de la salud."
        },
        {
            iconObj: <FontAwesomeIcon icon={faCogs} />,
            titleObj: "Articular",
            textObj: "Las iniciativas individuales que surjan en nuestro medio en estos campos de desarrollo biomédico. "
        },
        {
            iconObj: <FontAwesomeIcon icon={faSearchDollar} />,
            titleObj: "Buscar",
            textObj: "Apoyo económico de diferentes fuentes locales para solventar los gastos de funcionamiento y para la realización de capacitaciones e investigaciones cientíﬁcas tanto en el campo de la extensión de la vida como en criónica. En tal sentido contamos con el valioso apoyo de Néstor Kreimer que es una persona de sólida experiencia en la creación y manejo de este tipo de entidades de bien público. Siempre es bueno remarcar que la Fundación/ Asociación no tendrá ﬁnes de lucro. "
        },
        {
            iconObj: <FontAwesomeIcon icon={faComments} />,
            titleObj: "Promover ",
            textObj: "En el país iniciativas concretas en el campo de la investigación sobre rejuvenecimiento biológico y criónica. Es importante mencionar que los resultados de estas investigaciones tienen beneﬁcios también en otras áreas de la salud, por ejemplo, la criopreservación exitosa de órganos humanos permitiría mejorar signiﬁcativamente el sistema actual de donación de órganos."
        },
        {
            iconObj: <FontAwesomeIcon icon={faHandHoldingMedical} />,
            titleObj: "Promover la accesibilidad",
            textObj: "De las tecnologías de extensión de la vida y criónica a toda la sociedad, independientemente de su situación económica. Consideramos que las tecnologías de extensión de la vida y criónica deben ser accesibles para toda la sociedad. El avance tecnológico y su masiﬁcación irá reduciendo sus costos."
        }
    ]

    return (
        <>
            <Hero heroTitle="OBJETIVOS" />
            <section id="obj" className="py-5">
                <Container>
                    <IntroSections sectionTitle="Nuestros Objetivos" />
                    <Row className="d-flex justify-content-center">
                        {objs.map((obj, o) => {
                            return (
                                <Objective key={o} iconObj={obj.iconObj} titleObj={obj.titleObj} textObj={obj.textObj} />
                            )
                        })}
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default ObjectivesContainer;

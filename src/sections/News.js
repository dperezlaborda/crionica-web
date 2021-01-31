import React from 'react';
import  Container  from 'react-bootstrap/Container';
import Hero from '../components/Hero';
import IntroSections from '../components/IntroSections';

const News = () => {
    return (
        <>
            <Hero heroTitle="noticias" />
            <section>
                <Container>
                    <IntroSections sectionTitle="Las últimas noticias" />
                </Container>
            </section>

        </>
    )
}

export default News;
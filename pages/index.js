import React from 'react';
import Button from '../src/components/Button';
import Text from '../src/components/foundation/Text';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import Grid from '../src/components/foundation/layout/Grid';
import Box from '../src/components/foundation/layout/Box';
import Modal from '../src/components/commons/Modal';
import FormCadastro from '../src/components/patterns/FormCadastro';

export default function Home() {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <Box
      flex={1}
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      {/*
        [SOLID]
        S = Single Responsability
        O = Open Closed
        L = Liskov Substitution
        I = Interface Segregation
        D = Dependency Inversion
      */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(propsDoModal) => (
          <FormCadastro propsDoModal={propsDoModal} />
        )}
      </Modal>

      <Menu
        onCadastrarClick={() => setModalState(true)}
      />

      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '64px',
        }}
      >

        <Grid.Row>

          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 5 }}
            display="flex"
            alignItems="flex-start"
            flexDirection="column"
            justifyContent="center"
          >
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>

            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
            </Text>

            <Button
              styleButton="primary"
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={() => {
                setModalState(!isModalOpen);
              }}
            >
              Cadastrar
            </Button>
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 6 }}
          >
            <img
              alt="imagemDefault"
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>

        </Grid.Row>

      </Grid.Container>

      <Footer />
    </Box>
  );
}

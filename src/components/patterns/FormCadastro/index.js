import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import sucessAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import Button from '../../Button';
import TextField from '../../forms/TextField';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

function FormContent() {
  const [userData, setUserData] = useState({
    nome: 'Mario Souto',
    user: 'omariosouto',
  });

  const formStates = {
    DEFAULT: 'DEFAULT',
    ERROR: 'ERROR',
    DONE: 'DONE',
    LOADING: 'LOADING',
  };

  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserData({
      ...userData,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = userData.nome.length === 0 || userData.user.length === 0;

  return (

    <form
      onSubmit={(event) => {
        event.preventDefault();

        setIsFormSubmited(true);

        const userDTO = {
          username: userData.user,
          name: userData.nome,
        };

        fetch('https://instalura-api.vercel.app/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDTO),
        }).then((responseServer) => {
          if (responseServer.ok) {
            return responseServer.json();
          }
          throw new Error('erro na requisição');
        })
          .then((respostaConvertida) => {
            setSubmissionStatus(formStates.DONE);
            // eslint-disable-next-line no-console
            console.log(respostaConvertida);
          }).catch((error) => {
            setSubmissionStatus(formStates.ERROR);
            // eslint-disable-next-line no-console
            console.log(error);
          });
      }}
    >

      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder="Nome"
          name="nome"
          value={userData.nome}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          placeholder="Usuário"
          name="user"
          value={userData.user}
          onChange={handleChange}
        />
      </div>

      <Button
        styleButton="primary"
        variant="primary.main"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Cadastrar
      </Button>

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box display="flex" justifyContent="center">
          <Player
            autoplay
            loop
            src={sucessAnimation}
            style={{ height: '150px', width: '150px' }}
          />
          {/* <p> TUDO CERTO </p> */}
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box display="flex" justifyContent="center">
          <Player
            autoplay
            loop
            src={errorAnimation}
            style={{ height: '150px', width: '150px' }}
          />
          {/* <p> TUDO ERRADO </p> */}
        </Box>
      )}

    </form>

  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
              // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}

import { useNavigate } from "react-router-dom";
import { MdPerson, MdEmail, MdLock } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

import { useForm } from "react-hook-form";

import {
  Container,
  Title,
  Column,
  TitleLogin,
  SubtitleLogin,
  Row,
  Wrapper,
  Form,
} from "./styles";

const SignIn = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `/users?email=${formData.email}&senha=${formData.senha}`
      );

      if (data.length && data[0].id) {
        navigate("/home");
        return;
      }

      alert("Usuário ou senha inválido");
    } catch (e) {
      //TODO: HOUVE UM ERRO
    }
  };

  console.log("errors", errors);

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Faça seu cadastro e make the change._</SubtitleLogin>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="name"
                placeholder="Nome completo"
                leftIcon={<MdPerson />}
                name="name"
                control={control}
              />
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />
              {errors.email && <span>E-mail é obrigatório</span>}
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
              />
              {errors.senha && <span>Senha é obrigatório</span>}
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </Form>
            <Row>
              <SubtitleLogin>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </SubtitleLogin>
            </Row>
            <Row>
              <Button
                title="Ja tenho conta. Fazer login"
                fontColor="#23DD7A"
                onClick={() => navigate("/login")}
              />
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { SignIn };

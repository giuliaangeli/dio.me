import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md';
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Container, Title, Wrapper, Column, Row, TitleLogin, SubtitleLogin, ForgotPasswordText, CreateAccountText } from './style'

const Login = () => {
    const navigate = useNavigate();
    const handleClickUserHome = () => {
        navigate('/')
    }
    
    return (
        <>
        <Header/>
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu login</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form>
                        <Input placeholder="Email" leftIcon={<MdEmail/>}/>
                        <Input placeholder="Password" leftIcon={<MdLock/>} type="password"/>
                    </form>
                    <Button title={"Entrar"} variant='secundary' onClick={handleClickUserHome}/>
                    <Row>
                        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                        <CreateAccountText>Criar conta</CreateAccountText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
        </>
    )
}

export { Login }
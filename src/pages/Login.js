import "./Login.css";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router";

const Login = () => {

    const [emailInput, setEmailInput] = useState();
    const [senhaInput, setSenhaInput] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();

    const validationLogin = () => {
        if (!emailInput || !senhaInput) {
            setError("Preencha todos os campos")
        } else if (senhaInput.length < 8) {
            setError("A senha deve ter pelo menos 8 caracteres.")
        } else {
            setError('')
            navigate('/Listagem')
        }
    }

    const OnChangeEmailInput = (event) => {
        setEmailInput(event.target.value)
    }

    const OnChangeSenhaInput = (event) => {
        setSenhaInput(event.target.value)
    }

    return (

        <div>
            <body className="fundo">
                <Header title="SUPER-HERÓIS" />
                <div className="login">LOGIN</div>
                <Flex direction="column" gap={8} padding={2} justifyContent="center" alignItems="center">
                    <Input placeholder="Digite o E-mail" value={emailInput} onChange={OnChangeEmailInput} width={400} />
                    <Input placeholder="Digite a Senha" value={senhaInput} onChange={OnChangeSenhaInput} width={400} />
                    {error && <Text fontSize="20px" color="red.600">{error}</Text>}
                    <Button colorScheme="blue" onClick={validationLogin} disabled={!emailInput || !senhaInput || senhaInput.length < 8}>Acessar</Button>
                </Flex>
            </body>
        </div>
    );
}

export default Login;
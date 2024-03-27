import React, { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import method from "../../services/requests"

import Logo from "../../assets/logo.png"
import {
    Img,
    Link,
    Notification
} from "./style";

// COMPONENTS
import H1 from "../../components/h1";
import Button from "../../components/button";
import Frame from "../../components/frame";
import Label from "../../components/label";
import Input from "../../components/input";
import Container from "../../components/container";
import Footer from "../../components/footer";


//APLICAÇÃO------------------------------------------
const Home = () => {
    const navigate = useNavigate()
    const order = useRef()
    const customer = useRef()

    const [loading, setLoading] = useState(false)

    const showOrders = () => navigate('/orders')


    // CREATE ORDER
    const addOrder = async () => {
        const timer = setTimeout(() => {
            setLoading(true)
        }, 500);

        try {
            if (order.current.value == '' || customer.current.value == '') {
                alert('Preencha todos os campos.')
            } else {
                const typedOrder = order.current.value
                const typedCustomer = customer.current.value

                await method.createOrder({
                    order: typedOrder,
                    customer: typedCustomer
                })


                alert('Pedido enviado!')

                order.current.value = ''
                customer.current.value = ''
            }

        } catch (error) {
            console.log('Erro ao enviar pedido: ', error)

        } finally {
            clearTimeout(timer)
            setLoading(false)
        }
    }

    return (
        <Container>
            <Frame>
                <Img src={Logo} alt="logo" />
                <H1>Faça seu pedido!</H1>

                <Label>Pedido</Label>
                <Input type="text" ref={order}></Input>

                <Label>Cliente</Label>
                <Input type="text" ref={customer}></Input>

                <Button onClick={addOrder}>ENVIAR</Button>
                <Link onClick={showOrders}>Visualizar pedidos</Link>

                {loading &&
                    <Notification>Conectando ao <br />
                        servidor...
                    </Notification>
                }
            </Frame>

            <Footer />

        </Container>
    )
}

export default Home
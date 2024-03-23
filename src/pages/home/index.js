import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import method from "../../services/requests"

import Logo from "../../assets/logo.png"
import {
    Img,
    Link
} from "./style";

import H1 from "../../components/h1";
import Button from "../../components/button";
import Frame from "../../components/frame";
import Label from "../../components/label";
import Input from "../../components/input";
import Container from "../../components/container";


//APLICAÇÃO------------------------------------------
const Home = () => {
    const navigate = useNavigate()
    const order = useRef()
    const customer = useRef()

    const showOrders = () => navigate('/orders')


    // CREATE ORDER
    const addOrder = async () => {
        const typedOrder = order.current.value
        const typedCustomer = customer.current.value

        const { data: newOrder } = await method.createOrder({
            order: typedOrder,
            customer: typedCustomer
        })
        //     const {data: newOrder} = await axios.post('http://localhost:3001/create', {
        //         order: typedOrder,
        //         customer: typedCustomer
        // })

        alert('Pedido enviado!')

        order.current.value = ''
        customer.current.value = ''
    }

    return (
        <Container>
            <Frame>
                <Img src={Logo} alt="logo"></Img>
                <H1>Faça seu pedido!</H1>

                <Label>Pedido</Label>
                <Input type="text" ref={order}></Input>

                <Label>Cliente</Label>
                <Input type="text" ref={customer}></Input>

                <Button onClick={addOrder}>ENVIAR</Button>
                <Link onClick={showOrders}>Visualizar pedidos</Link>
            </Frame>
        </Container>
    )
}

export default Home
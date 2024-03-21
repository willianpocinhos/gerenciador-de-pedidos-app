import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import method from "../../services/requests";


import {
    Img,
    Order,
    Description,
    Client,
    Text,
    Icon,
    List,
    Msg
} from "./style";

import H1 from "../../components/h1";
import Button from "../../components/button";
import Frame from "../../components/frame";
import Container from "../../components/container";


// APLICAÇÃO--------------------------------------
const Orders = () => {
    const navigate = useNavigate()
    const [orders, setOrders] = useState([])


    const goBack = () => navigate('/')


    // READ ORDERS
    useEffect(() => {
        const fetchOrders = async () => { //Foi necessário criar essa função assíncrona dentro do useEffect para poder user o await para o axios.
            try {
                const { data: orderList } = await method.readOrders()
                // const { data: orderList } = await axios.get('http://localhost:3001/orderList')

                setOrders(orderList)

            } catch (error) {
                console.error('Erro ao buscar pedidos: ' + error)
            }
        }

        fetchOrders()
    }, [

    ]) //<- Não foi necessário passar nenhum estado para o array de dependências, pois a lista já é exibida ao abrir a página.


    // UPDATE
    const updateOrder = async (orderId, typedOrder, typedCustomer) => {

        try {
            const { data: update } = await method.updateOrder(orderId, {
                order: typedOrder,
                customer: typedCustomer
            })

            const updatedOrders = orders.map(item => item.id === orderId ? update : item)

            setOrders(updatedOrders)

        } catch (error) {
            console.error('Erro ao atualizar pedido: ' + error)
        }
    }


    // DELETE
    const deleteOrder = async (orderId) => {
        try {
            await method.deleteOrder(orderId)
            // await axios.delete(`http://localhost:3001/delete/${orderId}`)

            const remainingOrders = orders.filter(item => item.id !== orderId)

            setOrders(remainingOrders)
        } catch (error) {
            console.error('Erro ao excluir pedido: ' + error)
        }
    }

    return (
        <Container>
            <Frame>
                <Img src={Logo} alt="logo"></Img>
                <H1>Lista de Pedidos</H1>
                <List>
                    {orders.length == 0 ? (

                        <Msg>Nenhum pedido...</Msg>) : (

                        orders.map(item => (
                            <Order key={item.id}>
                                <Text>
                                    <Description
                                        value={item.order}
                                        onChange={e => 
                                            updateOrder(item.id, e.target.value, item.customer)}
                                    />

                                    <Client
                                        value={item.customer}
                                        onChange={e => updateOrder(item.id, item.order, e.target.value)}
                                    />
                                </Text>
                                <Icon>
                                    <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteOrder(item.id)} />
                                </Icon>
                            </Order>
                        )))
                    }

                </List>
                <Button onClick={goBack} transparent='true'>VOLTAR</Button>
            </Frame>
        </Container>
    )
}

export default Orders
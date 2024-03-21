const express = require('express')
const uuid = require('uuid')
const app = express()
const port = 3001
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}!`)
})


const orderList = []
const status0 = 'Being prepared...'
const status1 = 'Ready!'


//MIDDLEWARE - PASSA URL E MÉTODO
const url_method = (req, res, next) => {
    const { method, url, host } = req

    console.log(`Method: ${method}`)
    console.log(`URL: http://${host}:${port}${url}`)
    next()
}

//MIDDLEWARE - VERIFICA SE ID EXISTE
const checkOrderId = (req, res, next) => {
    const { id } = req.params
    const index = orderList.findIndex(item => item.id === id)

    if (index < 0) {
        return res.status(404).json({ message: 'Order not found!' })
    }

    req.orderIndex = index
    req.orderId = id

    next()
}


// CREATE
app.post('/create', url_method, (req, res) => {
    try {
        const { order, customer } = req.body


        const newOrder = { id: uuid.v4(), order, customer, status: status0 }

        orderList.push(newOrder)


        return res.status(201).json(newOrder)
    } catch (error){
        return res.status(500).json({error: error.message})
    }
})

// READ
app.get('/orderList', url_method, (req, res) => {
  
    return res.send(orderList)
})

// UPDATE
app.put('/update/:id', checkOrderId, url_method, (req, res) => {
    const { order, customer} = req.body

    const index = req.orderIndex
    const id = req.orderId

    const updatedOrder = { id, order, customer, status: status0 }

    orderList[index] = updatedOrder

    return res.send(updatedOrder)
})

// DELETE
app.delete('/delete/:id', checkOrderId, url_method, (req, res) => {

    const index = req.orderIndex

    orderList.splice(index, 1)

    return res.status(202).json({ message: 'The order has been deleted!' })
})

//READ 2 -> RETORNA APENAS UM PEDIDO ESPECÍFICO
app.get('/order/:id', checkOrderId, url_method, (req, res) => {
    const index = req.orderIndex

    return res.send(orderList[index])
})

//PATCH -> ALTERA O STATUS DO PEDIDO
app.patch('/ready/:id', checkOrderId, url_method, (req, res) => {

    const index = req.orderIndex

    orderList[index].status = status1

    const orderReady = orderList[index]

    return res.json({ message: '>>> THE ORDER IS READY <<<', orderReady })
})



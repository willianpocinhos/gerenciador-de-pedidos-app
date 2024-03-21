import address from './index'

class Methods{
    createOrder(info){
       return address.post('/create', info)
    }

    readOrders(){
        return address.get('/orderList')
    }

    updateOrder(orderId, info){
        return address.put(`/update/${orderId}`, info)
    }

    deleteOrder(orderId){
        return address.delete(`/delete/${orderId}`)
    }
}


const method = new Methods()

export default method

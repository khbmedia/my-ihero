class Order{
    constructor(id,created_at,restaurantName,clientInfo,orderDetail){
        this.id=id;
        this.created_at=created_at;
        this.restaurantName=restaurantName;
        this.clientInfo=clientInfo;
        this.orderDetail=orderDetail;
    }
}
export default Order;
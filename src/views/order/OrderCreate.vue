<template>
    <div id="create_order">
    <h1>Create Order</h1>
        <p>Fill out the form below to order your tickets.</p>
        <h4>Customer information</h4>
        <form @submit.prevent="addOrder">
            <div class="form-row">
            <div class="form-group col-md-6">
                <label for="firstname">First name</label>
                <input v-model="order.firstname" type="text" class="form-control" id="firstname" placeholder="First name">
            </div>
            <div class="form-group col-md-6">
                <label for="lastname">Last name</label>
                <input v-model="order.lastname" type="text" class="form-control" id="lastname" placeholder="Last name"/>
            </div>
            <div class="form-group col-md-8">
                <label for="street">Street</label>
                <input v-model="order.street" type="text" class="form-control" id="street" placeholder="Your street and number">
            </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="city">City</label>
                    <input v-model="order.city" type="text" class="form-control" id="city" placeholder="City in Switzerland">
                </div>
                <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input v-model="order.zip" type="text" class="form-control" id="inputZip" placeholder="Postleitzahl">
                </div>
            </div>
        <h4>Order details</h4>
        <div class="form-group">
            <label for="concertPassType">Concert pass:</label>
            <select v-model="order.concertPassType" class="form-control" id="concertPassType">
                <option value="1">1-DayPass</option>
                <option value="2">2-DayPass</option>
                <option value="3">3-DayPass</option>
            </select>
        </div>
        <div class="form-group">
            <label for="numOfTickets">Number of concert pass:</label>
            <select v-model="order.numOfTickets" class="form-control" id="numOfTickets">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
        <div class="form-group">
            <label for="comments">Your comments</label>
            <textarea class="form-control" id="comments" rows="3"></textarea>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary" data-toggle="modal"
                    data-target="#confirmOrder">Order now</button>
            <!-- Order confirmation -->
            <div class="modal fade" id="confirmOrder" tabindex="-1" role="dialog"
                 aria-labelledby="confirmOrderTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="confirmOrderTitle">Order confirmation</h5>
                        </div>
                        <div class="modal-body">
                            Thank you for your order! Your order-id is: {{ orderid }}.
                        </div>
                        <div class="modal-footer">
                            <button type="button" @click="proceed()" data-dismiss="modal" aria-label="Close"
                                    class="btn btn-primary">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="form-check">
                <input class="form-check-input" type="checkbox"/>
                <label class="form-check-label">
                    Keep me informed via Newsletter.
                </label>
            </div>
        </div>
    </form>

    </div>
</template>

<script>
    import store from '../../store';
    const API_URL = store.state.apiUrl;
    //const API_URL = "http://localhost:3000";
    export default {
        name: "OrderCreate",
        data: () => ({
            orders: [],
            orderid: "ch-17",
            showModal: false,
            order: {
                firstname: "",
                lastname: "",
                street: "",
                city: "",
                zip:"",
                concertPassType:-1,
                numOfTickets:-1
            }
        }),
        methods:{
            addOrder(){
                fetch(API_URL +'/api/order',
                    {
                        method: 'POST',
                        body: JSON.stringify(this.order),
                        headers: {"content-type":"application/json"}
                    })
                    .then(res => res.json())
                    .then(res => this.orderid=res.id);
            },
            proceed(){
                //redirect to oder list
                this.$router.push("/order");
            }
        }
    }
</script>

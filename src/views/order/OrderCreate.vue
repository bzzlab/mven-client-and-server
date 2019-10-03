<template>
    <div id="create_order">
    <h1>Create Order</h1>
        <p>Fill out the form below to order your tickets.</p>
        <h4>Customer information</h4>
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Seestrasse 809">
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputState">Canton</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip">
                </div>
            </div>
            <h4>Order details</h4>
        <div class="form-group">
            <label for="numOfTickets">Number of tickets:</label>
            <select class="form-control" id="numOfTickets">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
        <div class="form-group">
            <label for="delivery">Choose type of delivery (more than one selectable):</label>
            <select multiple class="form-control" id="delivery">
                <option>by email (pdf)</option>
                <option>by postal service</option>
            </select>
        </div>
        <div class="form-group">
            <label for="comments">Your comments</label>
            <textarea class="form-control" id="comments" rows="3"></textarea>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary">Order now</button>
        </div>
        <div class="form-group">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck">
                <label class="form-check-label" for="gridCheck">
                    Keep me informed via Newsletter.
                </label>
            </div>
        </div>
    </form>
    </div>
</template>

<script>
    export default {
        name: "OrderCreate"
    }
</script>
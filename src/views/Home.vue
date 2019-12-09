<template>
    <div id="home">
        <JumbotronF
                title="Concert"
                abstract="Early bird ticket order for the Frauenfeld festival 2020!"
        />
        <router-link class="nav-link" to="/order/new">
            <button type="button" class="btn btn-primary">{{label1}}</button>
        </router-link>

        <router-link class="nav-link" to="/login">
            <button type="button" class="btn btn-primary">{{label2}}</button>
        </router-link>
    </div>
</template>
<script>
// @ is an alias to /src
//import MainContainer from "@/components/ContainerMain.vue";
import JumbotronF from "../components/JumbotronF.vue";
export default {
    name: "home",
    data: function () {
        return {
            label1: "Proceed here for a new order!",
            label2: "Login"
        }
    },
    components: {
        JumbotronF
    }
};
</script>

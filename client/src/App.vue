<template>
    <v-app class="v-app">

        <v-navigation-drawer v-if="user.logged" app permanent expand-on-hover clipped>
            <Navbar :user= "user"/>
        </v-navigation-drawer>

        <v-app-bar app dark clipped-left color="primary">
            <Header />
        </v-app-bar>

        <v-main>
             <v-container app fluid fill-height>
                <router-view/>
            </v-container>
        </v-main>

        <v-footer app padless v-if="!user.logged">
            <Footer />
        </v-footer>
    </v-app>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import axios from "axios";

export default {
  name: 'App',

  data: () => ({
        sheet: false,
        icons: ["mdi-facebook", "mdi-linkedin", "mdi-instagram"],
        user: {
            firstname: null,
            lastname: null,
            logged: false,
        },
  }),

  components: {
        Footer,
        Header,
        Navbar,    
    },

mounted: function () {
        this.$router.app.$on('test', (user) => {
            this.user = user
            this.user.logged = true
            this.$router.push({ name: "home" })
            
        })
        this.verifyToken();
    },

     methods: {
        verifyToken() {
            axios
                .get(`http://192.168.86.247:3000/api/user/token`)
                
                .then((response) => {
                    this.user = response.data;
                    this.user.logged = true;
                    this.$router.push({ name: "home" })
                    .catch(() => {

                    })
                })
                .catch(() => {
                    this.user.logged = false;
                    this.$router.push({ name: "login" })
                    .catch(() => {

                    })
                })
        },

     loginuser(user) {
            this.user = user
            this.user.logged = true
            this.$router.push({ name: "home" })
        }
    },

};
</script>

<style scoped>
#app {
  background: url("bg.jpg")
    no-repeat center center fixed !important;
  background-size: cover;
}

</style>
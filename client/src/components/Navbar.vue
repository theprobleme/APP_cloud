<template>
    <div class="ma-0 pa-0">
        <v-list>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title"> {{ user.firstname + " " + user.lastname}} </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense shaped>

            <!-- Accueil -->
            <v-list-item to="/home">
                <v-list-item-icon>
                    <v-icon dark color="#e7b787"> mdi-home </v-icon>
                </v-list-item-icon>
                <v-list-item-title> Accueil </v-list-item-title>
            </v-list-item>

            <!-- Individu -->
            <v-list-item to="/card">
                <v-list-item-icon>
                    <v-icon dark color="#e7b787"> mdi-account </v-icon>
                </v-list-item-icon>
                <v-list-item-title> Utilisateurs </v-list-item-title>
            </v-list-item>

            <!-- Service -->
            <v-list-item to="/service">
                <v-list-item-icon>
                    <v-icon dark color="#e7b787"> mdi-toolbox-outline </v-icon>
                </v-list-item-icon>
                <v-list-item-title> Services </v-list-item-title>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
export default {
    props: {
        user: Object,
    },

    data() {
        return {
            messages: 0,
            show: false,
            linkDrive: null,
        };
    },

    methods: {
        date() {
            var now = new Date();
            return (
                now.getDate() +
                "/" +
                (now.getMonth() + 1) +
                "/" +
                now.getFullYear()
            );
        },
    },
};
</script>

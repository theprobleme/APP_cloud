<template>
    <v-card flat tile dark class="primary white--text text-center" width=100%>
        <v-card-text>
            <v-btn rounded v-for="(icon,i) in icons" :key="icon" class="mx-8 white--text" color="primary" v-on:click="link(i)">
                <v-icon size="30px"> {{ icon }} </v-icon>
            </v-btn>
        </v-card-text>
        <v-card-text>
            {{ new Date().getFullYear() }} à {{ new Date().getFullYear() + 1 }} — <strong> Paul LEFAY | Alexandre BOUTIN | Corentin ANDRE | Guillaume CHAPELA | Alexandre GOURIOU | Paulin GISLARD </strong>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
  watch: {
  },
    // Attribue les liens http des différences icônes
    methods: {
        link(i) {
            switch (i) {
                case 0:
                    window.open("https://eseo.fr");
                    break;
                case 1:
                    window.open(
                        "https://www.linkedin.com/school/eseo/mycompany/");
                    break;
                case 2:
                    window.open(
                        "https://www.google.com/maps/place/ESEO+Angers+-+Grande+Ecole+d'Ingénieurs+Généralistes/@47.49306,-0.5535328,17z/data=!3m1!4b1!4m5!3m4!1s0x48087918e6093a5b:0x18c2994402ec2868!8m2!3d47.49306!4d-0.5513441");
                    break;
                default:
                    break;
            }
        },
    },

    // Icones récupérées via Vuetify
    data: () => ({
        icons: ["mdi-web", "mdi-linkedin", "mdi-google-maps"],
    }),
};
</script>

<style scoped>

</style>

<template>
    <v-container height=100% class="section">
        <v-card-title class="elevation-24">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Rechercher" outlined solo hide-details> </v-text-field>
        </v-card-title>

        <v-data-table class="elevation-24 " :headers="headers0" fixed-header :items="lines" :page.sync="page" :items-per-page="itemsPerPage" :search="search" hide-default-footer @page-count="pageCount = $event"> </v-data-table> <br>
        
        <div class="pagination ">
            <v-pagination v-model="page" :length="pageCount" :total-visible="12"> </v-pagination>
        </div>
    </v-container>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            page: 1,
            pageCount: 0,
            itemsPerPage: 7,
            search: '',
            headers: [
                {
                    text: "Plaque d'immatriculation",
                    align: 'start',
                    value: "imatriculation",
                    width:"300px"
                }, {
                    align: "start",
                    text: "NOM", 
                    value: "nom",
                }, {
                    align: "start",
                    text: "Prénom", 
                    value: "prenom",
                }, {
                    align: "start",
                    text: "Voiture", 
                    value: "voiture",
                }, {
                    align: "start",
                    text: "Heure", 
                    value: "heure",
                }, {
                    align: "start",
                    text: "Minutes", 
                    value: "minutes",
                },
            ],
            lines: [],            
        };
    },

    // Lance la fonction getlines() ou ... au démarrage
    mounted: function () {
        this.getData();
    },

    methods: {
        getData() {
            axios
                .get(`http://192.168.4.66:3000/api/user/table`)
                .then((response) => {
                    this.lines = response.data;
                })   
        },
    },

    computed: {
        headers0() {
            return this.headers.map(header => Object.assign({}, header, {fixed: false}))
      },
    }
};
</script>

<style scoped>
    .section {
  margin-top: 10px;
    position: fixed;
    padding: 2em;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>

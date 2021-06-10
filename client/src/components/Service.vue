<template>
  <v-container>
    <v-row>
      <v-col cols="6" md="4">
        <v-card class="pa-2" outlined>
          <v-card class="mx-auto" max-width="374" elevation="24">
            <v-img
              height="250"
              :aspect-ratio="16 / 9"
              :src="require(`../assets/membres/${profil.profil}`)"
            ></v-img>
            <v-card-title>
              {{ profil.firstname + " " + profil.lastname }}
            </v-card-title>
            <v-card-text>
              <div class="my-4 subtitle-1">
                <v-icon> mdi-email </v-icon> : {{ profil.email }} <br />
                <v-icon> mdi-phone </v-icon> : {{ profil.phone }} <br />
                <v-icon> mdi-assistant </v-icon> : {{ profil.position }} <br />
              </div>
            </v-card-text>
          </v-card>
        </v-card>
      </v-col>

      <!-- Début de la zone des options -->
      <v-col cols="8" md="8" outlined>
        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1">
            Sélectionner un service
            <small> LAMP : création de services Linux Apache MySQL PHP </small>
            <small> S7 : création de machines virtuelles vagrant vides </small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card flat>
              <v-card-text>
                <v-autocomplete
                  autocomplete="off"
                  name="serviceNames"
                  clearable
                  v-model="serviceNames"
                  :items="serviceNamesPossibles"
                  :rules="rules"
                  required
                  label="Nom du service"
                >
                </v-autocomplete>
              </v-card-text>
            </v-card>

            <v-divider inset></v-divider>

            <v-btn color="primary" @click="e6 = 2"> Continuer </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2">
            Définir le nombre de machine virtuelles souhaitées
            <small> Ce nombre de peux pas dépasser 50 </small>
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card flat>
              <v-card-text>
                <v-autocomplete
                  autocomplete="off"
                  name="serviceNums"
                  clearable
                  v-model="serviceNums"
                  :items="serviceNumsPossibles"
                  :rules="rules"
                  required
                  label="Nombre de services à créer"
                >
                </v-autocomplete>
              </v-card-text>
            </v-card>
            <v-btn color="primary" @click="e6 = 3"> Continuer </v-btn>
            <v-btn text @click="e6 = 1"> Retour </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 3" step="3">
            Valider la création des services
            <small> C'est presque prêt ! </small>
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-btn @click="createVagrantFile" block color="primary" elevation="24" x-large> C'EST PARTI !</v-btn>
            <v-btn @click="e6 = 1" block color="secondary" elevation="24" x-large> ANNULER TOUT</v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      profil: null,
      dialog: false,
      tabs: null,
      message: "",
      type: "",
      snackbar: false,
      timeout: 3000,
      dialogDelete: false,
      e6: 1,
      serviceNums: null,
      serviceNames: null,
      serviceNamesPossibles: ["LAMP", "S7"],
      numRules: [
                (v) => !!v || "Champ requis",
            ],
      serviceNumsPossibles: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "50",
      ],
    };
  },

  mounted: function () {
    this.getUser();
  },

  methods: {
    getUser() {
      axios
        .get(`http://192.168.86.247:3000/api/user/profil`)
        .then((response) => {
          this.profil = response.data;
          console.log(this.profil);
        })
        .catch((error) => {
          switch (error.response.status) {
            case 403:
              this.$router.push({ name: "login" });
              break;

            default:
              break;
          }
        });
    },

    createVagrantFile() {
      axios
        .post(`http://192.168.86.247:3000/api/user/service`,
        {
          // DATA
          serviceNames: this.serviceNames,
          serviceNums: this.serviceNums,
        })
        .then((response) => {
          console.log(response)
        })
    }

    
  },
};
</script>

<template>
  <v-container>
    <v-data-iterator
      :items="clubs"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      hide-default-footer
    >
      <template v-slot:no-data>
        <v-alert color="white"> H </v-alert>
      </template>
      <v-row class="overflow-auto" id="container">
        <v-col
          v-for="(club, index) in clubs"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
            <v-card
              shaped
              class="mx-auto"
              color="#e7b787"
              dark
              max-width="600"
            >
              <v-card-title>
                <span class="title font-weight-light"> {{ club.firstname }}</span>
              </v-card-title>

              <v-card-text class="headline font-weight-bold">
                {{ club.lastname }}
                {{ club.email }}
              </v-card-text>

              <v-card-actions>
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                    <v-img height="50" :src="require(`../assets/membres/${club.profil}`)"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title> </v-list-item-title>
                  </v-list-item-content>

                  <v-row align="center" justify="end">
                    <span class="subheading mr-2"> {{ club.phone }} </span>

                    <span class="mr-1">  </span>

                    <span class="subheading">{{ club.position }} </span>
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
        </v-col>
      </v-row>
    </v-data-iterator>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      clubs: [],
      loading: true,
    };
  },

  computed: {
    numberOfPages() {
      return Math.ceil(this.clubs.length / this.itemsPerPage);
    },
  },

  mounted: function () {
    this.getData();
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },

    getData() {
      axios.get(`http://192.168.4.66:3000/api/user/card`).then((response) => {
        this.clubs = response.data;
        this.loading = false;
      });
    },
  },
};
</script>

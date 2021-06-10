<template>
    <div class="header">
        <div class="d-flex align-center">
            <span class="font-weight-black shrink" style="font-size: 25px"> Projet Cloud CSS  </span>

            <!-- The v-spacer component is useful when you want to fill available space or make space between two components -->
            <v-spacer> </v-spacer>

            <v-bottom-sheet v-model="sheet" persistent>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="#e7b787" dark v-bind="attrs" v-on="on">
                        Description
                    </v-btn>
                </template>

                <v-sheet class="text-center" height="150px">
                    <v-btn class="mt-3" text color="info" @click="sheet = !sheet"> Fermer </v-btn>
                    <div class="py-3">
                        Cette application permet à l'administrateur du projet CSS CLOUD de lancer la création de services parmi les
                        services disponibles 
                    </div>
                </v-sheet>
            </v-bottom-sheet>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        sheet: false,
    }),
};
</script>

<style scoped>
.header {
    width: 100%;
}
</style>
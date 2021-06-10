import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
    treeShake : true,
    defaultAssets: {
        front: {
            family: 'Libre Baskerville'
        }
    },

    theme: {
        themes: {
          light: {
            primary: '#75b2d1',
            secondary: '#e7b787',
            accent: colors.teal.darken1,
            error: colors.yellow.darken4,
          },
          dark: {
            primary: colors.blue.lighten3,
          },
        }
    }
});
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  // theme: {
  //   primary: '#ee44aa',
  //   secondary: '#424242',
  //   accent: '#82B1FF',
  //   error: '#FF5252',
  //   info: '#2196F3',
  //   success: '#4CAF50',
  //   warning: '#FFC107'
  // },
  iconfont: 'md',
  theme: {
    primary: '#4D648D',
    primaryDark: '1F3A5F',
    primaryLight: '#7C91BD',
    secondary: '#2F3131',
    secondaryDark: '#050808',
    secondaryLight: '#585A5A',
    accent: '#A239CA',
    error: '#F24C4E',
    warning: '#F7882F',
    info: '#67AECA',
    success: '#57BC90'
  }
})

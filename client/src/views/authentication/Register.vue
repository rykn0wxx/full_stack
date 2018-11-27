<template>
  <v-container fluid pa-0 ma-0>
    <img :src="require('../../assets/register-bg.jpeg')" class="blur-bg" alt="blured background">
    <v-layout justify-end row fill-height>
      <v-flex xs12 sm4>
        <v-card class="elevation-10 login__card">
          <v-form v-model="valid" class="login__form" name="user" ref="form">
            <router-link to="/" class="login__form--link">
              <AnonLogo/>
            </router-link>
            <h5 class="subheading">
              <span class="text-uppercase font-weight-medium login__form--title">Register Now</span>
              <small class="caption login__form--caption">Create your account and enjoy</small>
            </h5>
            <v-card-text class="pa-0">
              <v-text-field
                color="accent"
                class="login__form--control"
                height="30"
                validate-on-blur
                clearable
                prepend-icon="email"
                name="email"
                label="Email"
                type="email"
                required
                autocomplete="off"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat type="submit" color="info">Register</v-btn>
            </v-card-actions>
            <v-card-text>
              <p class="login__form--footer">Already have an account?
                <router-link to="/">Sign In</router-link>
              </p>
            </v-card-text>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AnonLogo from '@/components/AnonLogo'

export default {
  name: 'AuthenticationRegister',
  components: {
    AnonLogo
  },
  data() {
    return {
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      username: '',
      usernameRules: [
        v => !!v || 'Username is required',
        v => v.length >= 2 || 'Username must be greater than 2 characters'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v =>
          /^[a-zA-Z0-9]{2,32}$/.test(v) ||
          'Passwords must contain ONLY the following characters: lower case, upper case, numerics',
        v => v.length >= 2 || 'Password must be greater than 2 characters'
      ],
      password_confirmation: '',
      password_confirmationRules: [
        v => !!v || 'Password confirmation is required',
        v => v === this.password || 'Password does not match'
      ]
    }
  },
  created() {
    this.$store.dispatch('showToolbar', false)
  },
  destroyed() {
    this.$store.dispatch('showToolbar', true)
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/form';
.login__form {
  &--footer {
    a {
      text-decoration: none;
    }
  }
}
.subheading {
  margin: 20px 0 12px 0;
}
.blur-bg {
  min-width: 1024px;
  min-height: 100%;

  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  filter: blur(2px) grayscale(0.7);
}
</style>

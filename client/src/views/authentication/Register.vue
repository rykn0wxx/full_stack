<template>
  <v-container fluid pa-0 ma-0>
    <img :src="require('../../assets/register-bg.jpeg')" class="blur-bg" alt="blured background">
    <v-layout justify-end row fill-height>
      <v-flex xs12 sm4>
        <v-card class="elevation-10 login__card">
          <v-form v-model="valid" class="login__form" name="user" ref="form" @submit="submit">
            <router-link to="/" class="login__form--link">
              <AnonLogo/>
            </router-link>
            <h5 class="subheading">
              <span class="text-uppercase font-weight-medium login__form--title">Register Now</span>
              <small class="caption login__form--caption">Create your account and enjoy</small>
            </h5>
            <v-card-text class="pa-0">
              <v-text-field
                v-model="email"
                :rules="emailRules"
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
              <v-text-field
                v-model="username"
                :rules="usernameRules"
                color="accent"
                class="login__form--control"
                height="30"
                validate-on-blur
                clearable
                prepend-icon="person"
                name="username"
                label="Username"
                type="text"
                required
                autocomplete="off"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                color="accent"
                class="login__form--control"
                height="30"
                validate-on-blur
                clearable
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
                required
                autocomplete="off"
              ></v-text-field>
              <v-text-field
                v-model="password_confirmation"
                :rules="password_confirmationRules"
                color="accent"
                class="login__form--control"
                height="30"
                validate-on-blur
                clearable
                prepend-icon="lock_outline"
                name="password_confirmation"
                label="Password Confirmation"
                type="password"
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
                <router-link to="/authentication/login">Sign In</router-link>
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
import AuthService from '@/services/AuthService'

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
  methods: {
    async getToken(userObj, userData) {
      try {
        const userToken = await AuthService.login({
          auth: {
            email: userObj.email,
            password: userObj.password
          }
        })
        this.$store.dispatch('setUser', userData)
        this.$store.dispatch('setToken', userToken.data.jwt)
        this.$router.push('/')
      } catch (error) {
        this.$store.dispatch('setAlerts', error.response.data)
      }
    },
    async submit(e) {
      e.preventDefault()
      if (this.$refs.form.validate()) {
        const userObj = {
          user: {
            email: this.email,
            username: this.username,
            password: this.password,
            password_confirmation: this.password_confirmation,
            admin: false
          }
        }
        try {
          const userResponse = await AuthService.register(userObj)
          this.getToken(userObj.user, userResponse.data)
        } catch (error) {
          this.$store.dispatch('setAlerts', error.response.data)
        }
      }
    }
  },
  mounted() {
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
</style>

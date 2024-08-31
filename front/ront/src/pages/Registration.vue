<template>
  <br><br><br>
  <v-sheet
    class="position-relative background-image"
    min-height="450"
  >
    <v-row class="text-center">
      <v-col>
        <h2 class="form-title">Sign Up for a New Project!</h2>
      </v-col>
    </v-row>
    <!-- Registracija forma -->
    <form>
      <v-text-field
        v-model="state.name"
        :counter="10"
        :error-messages="v$.name.$errors.map(e => e.$message)"
        label="Name"
        required
        @blur="v$.name.$touch"
        @input="v$.name.$touch"
      ></v-text-field>

      <v-text-field
        v-model="state.surname"
        :counter="10"
        :error-messages="v$.surname.$errors.map(e => e.$message)"
        label="Surname"
        required
        @blur="v$.surname.$touch"
        @input="v$.surname.$touch"
      ></v-text-field>

      <v-text-field
        v-model="state.email"
        :error-messages="v$.email.$errors.map(e => e.$message)"
        label="E-mail"
        required
        @blur="v$.email.$touch"
        @input="v$.email.$touch"
      ></v-text-field>

      <v-text-field
        v-model="state.password"
        :error-messages="v$.password.$errors.map(e => e.$message)"
        label="Password"
        :type="showPassword ? 'text' : 'password'"
        required
        @blur="v$.password.$touch"
        @input="v$.password.$touch"
        class="mb-4"
      >
        <template v-slot:append>
          <v-icon
            @click="showPassword = !showPassword"
            class="cursor-pointer"
            size="24"
            style="margin-right: 8px;"
          >
            {{ showPassword ? 'mdi-eye-off' : 'mdi-eye' }}
          </v-icon>
        </template>
      </v-text-field>
      <v-btn
        class="me-4"
        @click="submitForm"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>

    <!-- Kartica za potvrdu -->
    <v-fade-transition hide-on-leave>
      <v-card
        v-if="dialog"
        append-icon="$close"
        class="mx-auto"
        elevation="16"
        max-width="500"
        title="Send a receipt"
      >
        <template v-slot:append>
          <v-btn icon="$close" variant="text" @click="dialog = false"></v-btn>
        </template>

        <v-divider></v-divider>

        <div class="py-12 text-center">
          <v-icon
            class="mb-6"
            color="success"
            icon="mdi-check-circle-outline"
            size="128"
          ></v-icon>

          <div class="text-h4 font-weight-bold">This receipt was sent</div>
        </div>

        <v-divider></v-divider>

        <div class="pa-4 text-end">
          <v-btn
            class="text-none"
            color="medium-emphasis"
            min-width="92"
            variant="outlined"
            rounded
            @click="dialog = false"
          >
            Close
          </v-btn>
        </div>
      </v-card>
    </v-fade-transition>
  </v-sheet>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import axios from 'axios'

const initialState = {
  name: '',
  surname: '',
  email: '',
  password: ''
}

const state = reactive({
  ...initialState,
})

const rules = {
  name: { required },
  surname: { required },
  email: { required, email },
  password: { required },
}

const v$ = useVuelidate(rules, state)

function clear () {
  v$.value.$reset()

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value
  }
}

const dialog = ref(false)
const showPassword = ref(false) // vidljivost lozinke

async function submitForm() {
  v$.value.$validate()
  if (!v$.value.$invalid) {
    try {
      const response = await axios.post('http://localhost:6969/register', {
        ime: state.name,
        prezime: state.surname,
        email: state.email,
        lozinka: state.password,
      }, { withCredentials: true })

      if (response.status === 201) {
        dialog.value = true
      } else {
        console.error('Registration error:', response.data.message)
        alert('Registration failed: ' + response.data.message)
      }
    } catch (error) {
      console.error('Registration error:', error)
      alert('An error occurred during registration. Please try again.')
    }
  }
}

</script>

<style scoped>
.background-image {
  background-image: url('https://cdn3.f-cdn.com/files/download/97941784/programmin.jpg?image-optimizer=force&format=webply&width=967');
  background-size: cover;
  background-position: center;
}

.v-input--is-focused .v-input__control {
  border-color: #1976D2;
}

.form-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: rgb(255, 255, 255);
  margin-bottom: 20px;
}
</style>

<template>
  <v-container class="bg-gradient">
    <!-- Naslov -->
    <v-row justify="center" class="mb-4">
      <v-col cols="12" md="8" lg="6">
        <h1 class="text-center white--text">Prijava za projekt</h1>
      </v-col>
    </v-row>

    <!-- Forma za registraciju i prijavu na projekt -->
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-form ref="form">
          <!-- Osobni podaci -->
          <v-text-field
            v-model="state.name"
            :error-messages="v$.name.$errors.map(e => e.$message)"
            label="Ime"
            required
            @blur="v$.name.$touch"
            @input="v$.name.$touch"
            class="white--text"
          ></v-text-field>

          <v-text-field
            v-model="state.surname"
            :error-messages="v$.surname.$errors.map(e => e.$message)"
            label="Prezime"
            required
            @blur="v$.surname.$touch"
            @input="v$.surname.$touch"
            class="white--text"
          ></v-text-field>

          <v-text-field
            v-model="state.email"
            :error-messages="v$.email.$errors.map(e => e.$message)"
            label="Email"
            required
            @blur="v$.email.$touch"
            @input="v$.email.$touch"
            class="white--text"
          ></v-text-field>

          <v-text-field
            v-model="state.password"
            :error-messages="v$.password.$errors.map(e => e.$message)"
            label="Lozinka"
            type="password"
            required
            @blur="v$.password.$touch"
            @input="v$.password.$touch"
            class="white--text"
          ></v-text-field>

          <!-- Odabir projekta -->
          <v-radio-group v-model="isNewProject" row>
            <v-radio label="Prijava za novi projekt" :value="true" class="white--text"></v-radio>
            <v-radio label="Prijava za postojeći projekt" :value="false" class="white--text"></v-radio>
          </v-radio-group>

          <!-- Poruka kada korisnik izabere postojeći projekt -->
          <div v-if="!isNewProject && !state.selectedProject" class="white--text mt-4">
            <p>Za prijavu na postojeće projekte, molimo Vas da spremite ove podatke za prijavu, a zatim posjetite stranicu <strong>Projekti</strong> i registrirate se. Kada se registrirate moći ćete odabrati postojeći projekt.</p>
          </div>

          <!-- Polja za novi projekt -->
          <div v-if="isNewProject">
            <v-text-field
              v-model="state.projectName"
              label="Naziv projekta"
              class="white--text"
            ></v-text-field>

            <v-textarea
              v-model="state.projectDescription"
              label="Opis projekta"
              class="white--text"
            ></v-textarea>

            <v-text-field
              v-model="state.projectTechnologies"
              label="Tehnologije"
              class="white--text"
            ></v-text-field>
          </div>

          <!-- Gumb za potvrdu -->
          <v-btn color="primary" class="mt-4" @click="submitForm">Pošalji prijavu</v-btn>
        </v-form>
      </v-col>
    </v-row>

    <!-- Dijalog za uspješnu prijavu -->
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="text-h5">Prijava uspješna</v-card-title>
        <v-card-text>Vaša prijava je uspješno poslana!</v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="dialog = false">U redu</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import axios from 'axios';

export default {
  setup() {
    const state = ref({
      name: '',
      surname: '',
      email: '',
      password: '',
      projectName: '',
      projectDescription: '',
      projectTechnologies: '',
    });

    const isNewProject = ref(true);
    const dialog = ref(false);

    const rules = {
      name: { required },
      surname: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
    };

    const v$ = useVuelidate(rules, state);

    const submitForm = async () => {
      v$.value.$validate();
      if (!v$.value.$invalid) {
        try {
          // Slanje podataka na server
          await axios.post('http://localhost:6969/register', {
            ime: state.value.name,
            prezime: state.value.surname,
            email: state.value.email,
            lozinka: state.value.password,
          });

          if (isNewProject.value) {
            console.log("Naziv projekta:", state.value.projectName);
            console.log("Opis projekta:", state.value.projectDescription);
            console.log("Tehnologije:", state.value.projectTechnologies);
          }

          // Dijalog za uspješan unos
          dialog.value = true;

          // Očistiti podatke nakon uspješne prijave
          state.value.name = '';
          state.value.surname = '';
          state.value.email = '';
          state.value.password = '';
          state.value.projectName = '';
          state.value.projectDescription = '';
          state.value.projectTechnologies = '';

          // Prikazati alert s porukom
          alert("Uspješno poslano");

        } catch (error) {
          console.error(error);
        }
      }
    };


    return {state, isNewProject, dialog, v$, submitForm};
  },
};
</script>

<style>
.bg-gradient {
  background: linear-gradient(to bottom, rgba(72, 76, 83, 0.8), rgba(57, 64, 62, 0.8)),
  url('https://d19p4plxg0u3gz.cloudfront.net/f921919a-8f1d-11ec-9b71-0242ac120013/v/ba03ebd6-9d09-11eb-8a41-cedfb09875dd/1280x720-ba0555f2-9d09-11eb-b6b1-cedfb09875dd.webp?v=l1va8yk0');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 16px;
  color: white;
}

.white--text {
  color: white !important;
  font-weight: bold !important;
  font-style: italic;
}
</style>

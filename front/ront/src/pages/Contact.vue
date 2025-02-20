<template>
  <v-container class="contact-form" fluid>
    <!-- Alert poruke na vrhu stranice -->
    <v-alert
      v-if="alert.visible"
      :type="alert.type"
      dismissible
      class="alert-top"
      @input="alert.visible = false"
    >
      {{ alert.message }}
    </v-alert>

    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1>Kontaktirajte nas</h1>
        <p>
          Voljeli bismo čuti vaše mišljenje! Ako imate bilo kakva pitanja, prijedloge ili trebate dodatne informacije,
          ispunite obrazac ispod.
          Naš tim će vam se javiti u najkraćem mogućem roku.
          Vaši podaci koristit će se isključivo za komunikaciju s vama i neće biti korišteni u druge svrhe.
        </p>
      </v-col>
    </v-row>

    <v-row class="content">
      <v-col cols="12" md="6">
        <!-- Kontakt ikone lijeva strana  -->
        <v-row class="address-line">
          <v-col cols="2">
            <v-img
              src="https://i.pinimg.com/736x/b7/02/af/b702afc7b811840ebc49037cdc98bc45.jpg"
              class="icon"
              alt="location"
            ></v-img>
          </v-col>
          <v-col cols="10">
            <div class="contact-info">
              <div class="contact-info-title">Adresa</div>
              <div>Matice hrvatske, Mostar 88000,</div>
              <div>FPMOZ</div>
            </div>
          </v-col>
        </v-row>

        <v-row class="address-line">
          <v-col cols="2">
            <v-img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXwuNxN0yCS3oLHr27AouQM2vddf6BtXy8Tg&s"
              class="icon"
              alt="phone"
            ></v-img>
          </v-col>
          <v-col cols="10">
            <div class="contact-info">
              <div class="contact-info-title">Broj telefona</div>
              <div>12523-4566-8954-8956</div>
            </div>
          </v-col>
        </v-row>

        <v-row class="address-line">
          <v-col cols="2">
            <v-img
              src="https://thumb.ac-illust.com/83/8354af6cb0e51294eca5e6d19b61b8e6_t.jpeg"
              class="icon"
              alt="email"
            ></v-img>
          </v-col>
          <v-col cols="10">
            <div class="contact-info">
              <div class="contact-info-title">Email</div>
              <div>pzi@gmail.com</div>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <!-- Desna strana unos podataka -->
      <v-col cols="12" md="6">
        <v-form ref="form">
          <v-card class="form-container">
            <v-card-title>Pošaljite poruku</v-card-title>
            <v-card-text>
              <v-text-field
                v-model="form.name"
                label="Ime i prezime"
                :rules="[v => !!v || 'Ime i prezime su obavezni']"
                required
              ></v-text-field>

              <v-text-field
                v-model="form.email"
                label="Email"
                :rules="[v => !!v || 'Email je obavezan', v => /.+@.+\..+/.test(v) || 'Email mora biti validan']"
                required
              ></v-text-field>

              <v-text-field
                v-model="form.message"
                label="Napišite poruku..."
                :rules="[v => !!v || 'Poruka je obavezna']"
                required
              ></v-text-field>

              <!-- Mentor Opcija -->
              <v-radio-group v-model="form.mentorStatus" row>
                <v-radio label="Mentor" value="mentor"></v-radio>
                <v-radio label="Bez mentora" value="noMentor"></v-radio>
              </v-radio-group>

              <!-- Odabir Mentora -->
              <v-select
                v-if="form.mentorStatus === 'mentor'"
                v-model="form.selectedMentor"
                :items="mentors"
                label="Odaberite mentora"
                :rules="[v => !!v || 'Odabir mentora je obavezan']"
                @change="loadAvailableTimes"
              ></v-select>

              <!-- Dodavanje kalendara za odabir datuma -->
              <v-date-picker
                v-if="form.mentorStatus === 'mentor' && form.selectedMentor"
                v-model="form.selectedDate"
                label="Odaberite datum"
                max-width="368"
                @update:modelValue="loadAvailableTimes"
              ></v-date-picker>


              <v-row v-if="form.selectedDate">
                <v-col>
                  <p><strong>Odabrani datum: </strong>{{ formatDate(form.selectedDate) }}</p>
                </v-col>
              </v-row>

              <!-- Odabir slobodnih satnica -->
              <v-select
                v-if="form.availableTimes.length > 0"
                v-model="form.selectedTime"
                :items="form.availableTimes"
                label="Odaberite satnicu"
                :rules="[v => !!v || 'Odabir satnice je obavezan']"
                required
              ></v-select>

              <!-- Prikaz odabrane satnice -->
              <v-row v-if="form.selectedTime">
                <v-col>
                  <p><strong>Odabrani termin: </strong>{{ form.selectedTime }}</p>
                </v-col>
              </v-row>

            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" variant="elevated" @click="sendMessage">Pošaljite</v-btn>
              <v-btn color="black" variant="tonal" @click="clear">Očisti</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container><br><br>
  <Faq/>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
        mentorStatus: '',
        selectedMentor: '',
        selectedDate: null,
        selectedTime: '',
        availableTimes: []
      },
      alert: {
        visible: false,
        type: '', // 'success' ili 'error'
        message: ''
      },
      mentors: [
        'Marko Marić',
        'Ana Kovačić',
        'Ivan Horvat',
        'Marija Babić',
        'Ivana Šarić',
        'Luka Kovačić',
        'Lucija Novak',
        'Tomislav Jurić',
        'Jelena Marković',
        'Nikola Petrović'
      ],
      mentorAvailability: {
        'Marko Marić': {
          '2025-02-25': ['09:00', '14:00', '16:00'],
          '2025-02-26': ['10:00', '12:00', '15:00'],
          '2025-02-27': ['10:00', '12:00', '15:00'],
          '2025-02-28': ['09:00', '14:00', '16:00'],
          '2025-03-10': ['09:00', '14:00', '16:00']
        },
        'Ana Kovačić': {
          '2025-02-28': ['08:00', '13:00', '17:00'],
          '2025-02-27': ['09:00', '11:00', '14:00'],
          '2025-03-26': ['09:00', '12:00', '14:00']

        },
        'Ivan Horvat': {
          '2025-02-26': ['08:00', '10:00', '12:00'],
          '2025-03-05': ['09:00', '13:00', '15:00'],
          '2025-03-26': ['09:00', '12:00', '14:00']

        },
        'Marija Babić': {
          '2025-02-26': ['09:00', '12:00', '14:00'],
          '2025-03-06': ['10:00', '13:00', '16:00']
        },
        'Ivana Šarić': {
          '2025-02-27': ['08:00', '10:00', '14:00'],
          '2025-03-08': ['09:00', '11:00', '15:00']
        },
        'Luka Kovačić': {
          '2025-02-28': ['08:00', '11:00', '14:00'],
          '2025-03-12': ['09:00', '13:00', '16:00']
        },
        'Lucija Novak': {
          '2025-02-25': ['09:00', '11:00', '14:00'],
          '2025-02-28': ['10:00', '13:00', '15:00'],
          '2025-03-06': ['09:00', '12:00', '14:00']

        },
        'Tomislav Jurić': {
          '2025-02-27': ['08:00', '11:00', '14:00'],
          '2025-03-20': ['09:00', '13:00', '16:00']
        },
        'Jelena Marković': {
          '2025-02-27': ['08:00', '10:00', '12:00'],
          '2025-02-28': ['09:00', '11:00', '13:00'],
          '2025-03-01': ['09:00', '12:00', '14:00']

        },
        'Nikola Petrović': {
          '2025-02-25': ['08:00', '10:00', '12:00'],
          '2025-02-26': ['09:00', '12:00', '14:00'],
          '2025-03-16': ['09:00', '12:00', '14:00']

        }

      }
    }
  },
  methods: {
    sendMessage() {
      this.$refs.form.validate();

      if (this.$refs.form.$el.checkValidity()) {
        // Alert za poruke
        setTimeout(() => {
          this.alert.message = 'Poruka je uspješno poslana';
          this.alert.type = 'success';
          this.alert.visible = true;
          this.clear();
        }, 500);
      } else {
        // Ako forma nije ispravna
        this.alert.message = 'Molimo ispunite sva obavezna polja';
        this.alert.type = 'error';
        this.alert.visible = true;
      }
    },
    loadAvailableTimes() {
      // Provjerite ima li slobodnih satnica za odabrani datum i mentora
      console.log("Odabrani mentor:", this.form.selectedMentor);
      console.log("Odabrani datum:", this.form.selectedDate);
      if (this.form.selectedMentor && this.form.selectedDate) {
        const mentor = this.form.selectedMentor;
        const date = new Date(this.form.selectedDate);
        date.setMinutes(date.getMinutes() - date.getTimezoneOffset()); // Prilagodba vremenske zone
        const formattedDate = date.toISOString().split('T')[0]; // Format: YYYY-MM-DD

        console.log("Formatirani datum:", formattedDate);
        console.log("Dostupne satnice:", this.mentorAvailability[mentor]?.[formattedDate] || []);

        this.form.availableTimes = this.mentorAvailability[mentor]?.[formattedDate] || [];
      } else {
        this.form.availableTimes = [];
      }

    },
    clear() {
      this.$refs.form.reset();
      this.form = {
        name: '',
        email: '',
        message: '',
        mentorStatus: '',
        selectedMentor: '',
        selectedDate: null,
        selectedTime: '',
        availableTimes: []
      };
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('hr-HR', options);
    }
  }
}
</script>

<style lang="scss">
/* Pozadinska slika */
.contact-form {
  font-family: Arial, sans-serif;
  background-image: url('https://www.noob.ba/wp-content/uploads/2021/12/andras-vas-Bd7gNnWJBkU-unsplash-1-scaled.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: white !important;

  .text-center {
    text-align: center;
  }

  .content {
    margin-top: 40px;
  }

  .icon {
    background-color: white;
    border-radius: 50%;
    padding: 15px;
  }

  .contact-info {
    padding-left: 20px;
  }

  .address-line {
    margin-top: 40px;
  }

  .form-container {
    padding: 30px;
    background-color: white !important;
    color: #000;
  }

  .contact-info-title {
    color: #01bdd4;
  }

  /* Stil za alert na vrhu */
  .alert-top {
    margin-bottom: 20px;
  }

  .v-card {
    background: linear-gradient(90deg, #554d78 0%, #704a70 100%);
    border-radius: 8px;
    color: white;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .contact-form input {
    background-color: white;
  }
}
</style>

<template>
  <v-container class="contact-form" fluid>
    <!-- Alert poruka na vrhu stranice -->
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
      <!--Desna strana unos podataka -->
      <v-col cols="12" md="6">
        <v-form ref="form">
          <v-card class="form-container">
            <v-card-title>Pošalji poruku</v-card-title>
            <v-card-text>
              <v-text-field
                v-model="form.name"
                label="Name"
                :rules="[v => !!v || 'Name is required']"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.email"
                label="Email"
                :rules="[
                  v => !!v || 'Email is required',
                  v => /.+@.+\..+/.test(v) || 'Email must be valid'
                ]"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.message"
                label="Type your message..."
                :rules="[v => !!v || 'Message is required']"
                required
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" variant="elevated"  @click="sendMessage">Send</v-btn>
              <v-btn color="black" variant="tonal" @click="clear">Clear</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container><br><br>


</template>

<script>
import Faq from '@/components/Faq.vue';
export default {
  name: "ContactForm",
  components: {
    Faq
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      alert: {
        visible: false,
        type: '', // 'success' ili 'error'
        message: ''
      }
    }
  },
  methods: {
    sendMessage() {
      this.$refs.form.validate()

      if (this.$refs.form.$el.checkValidity()) {
        // Alert za poruke
        setTimeout(() => {
          this.alert.message = 'The message was sent successfully'
          this.alert.type = 'success'
          this.alert.visible = true
          this.clear()
        }, 500)
      } else {
        // Ako forma nije ispravna
        this.alert.message = 'Please fill in all required fields'
        this.alert.type = 'error'
        this.alert.visible = true
      }
    },
    clear() {
      this.$refs.form.reset()
      this.form = {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>

<style lang="scss">
/*Pozadinska slika*/
.contact-form {
  font-family: Arial, sans-serif;
  background-image: url('https://png.pngtree.com/background/20240112/original/pngtree-3d-rendering-illustration-of-development-and-programming-picture-image_7232775.jpg');
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
    background-color: white;
    color: #000;
  }

  .contact-info-title {
    color: #01bdd4;
  }

  /* Stil za alert na vrhu */
  .alert-top {
    margin-bottom: 20px;
  }
}
</style>

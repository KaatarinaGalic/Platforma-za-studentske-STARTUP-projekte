<template>
  <v-container>
    <h1 class="text-center my-4 naslov">Zakorači u svijet inovativnih studentskih projekata</h1>

    <!-- Log In/Log Out Button -->
    <v-btn
      :color="isLoggedIn ? 'green' : 'white'"
      class="mx-2"
      @click="isLoggedIn ? handleLogout() : loginDialog = true"
      style="float: right;"
    >
      {{ isLoggedIn ? 'Log Out' : 'Log In' }}
    </v-btn>
    <v-btn :color="grey"
           class="mx-2"
           @click="passwordChangeDialog = true"
           style="float: right;"
           v-if="isLoggedIn"
    >Change Password
    </v-btn>
    <!-- Pretraživanje --><br><br><br><br>
    <v-text-field
      v-model="search"
      prepend-icon="mdi-magnify"
      label="Pretraživanje"
      class="mx-2"
      full-width
    ></v-text-field>

    <!-- Log In Dialog -->
    <v-dialog v-model="loginDialog" max-width="400" class="login-dialog">
      <v-card>
        <v-card-title>
          <span class="headline">Log In</span>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            required
            :rules="emailRules"
          ></v-text-field>
          <v-text-field
            v-model="currentPassword"
            :type="passwordVisible ? 'text' : 'password'"
            label="Password"
            required
          ></v-text-field>
          <v-checkbox
            v-model="passwordVisible"
            label="Show Password"
            class="mt-2"
          ></v-checkbox>

        </v-card-text>
        <v-card-actions>
          <v-btn color="blue" text @click="loginDialog = false">Close</v-btn>
          <v-btn color="blue" text @click="handleLogin">Log In</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="passwordChangeDialog" max-width="400">
      <v-card>
        <v-card-title>
          Change Password
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="currentPassword"
            :type="passwordVisible ? 'text' : 'password'"
            label="Current Password"
            required
          ></v-text-field>
          <v-text-field
            v-model="newPassword"
            :type="passwordVisible ? 'text' : 'password'"
            label="New Password"
            required
          ></v-text-field>
          <v-text-field
            v-model="confirmNewPassword"
            :type="passwordVisible ? 'text' : 'password'"
            label="Confirm New Password"
            required
          ></v-text-field>
          <v-btn @click="handleChangePassword">Change Password</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- Prikaz kartica --><br><br>
    <v-container class="d-flex flex-wrap justify-center">
      <v-card
        v-for="card in paginatedCards"
        :key="card.naziv"
        class="mx-2"
        max-width="400"
        height="100%"
      >
        <v-responsive>
          <v-img
            class="align-end text-white"
            height="200px"
            width="350px"

            :src="card.slika_url"
            cover
          ></v-img>


          <v-card-title>{{ card.naziv }}</v-card-title>

          <v-card-subtitle>{{ card.tehnologije }}</v-card-subtitle>

          <v-card-actions>
            <v-btn @click="handleRegister(card.ID_projekta)" :disabled="isRegistered(card.ID_projekta)">
              {{ isRegistered(card.ID_projekta) ? 'Registered' : 'Register' }}
            </v-btn>
            <v-btn @click="handleDeregister(card.ID_projekta)" v-if="isRegistered(card.ID_projekta)">
              Deregister
            </v-btn>
          </v-card-actions>

          <v-dialog v-model="card.dialog" max-width="500">
            <v-card>
              <v-card-title>
                <span class="headline">{{ card.title }}</span>
              </v-card-title>
              <v-card-text>
                {{ card.description }}
              </v-card-text>
              <v-card-actions>
                <v-btn color="blue" text @click="card.dialog = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-responsive>
      </v-card>

    </v-container>

    <!-- Paginacija -->
    <v-container class="text-center my-4">
      <v-pagination
        v-model="currentPage"
        :length="totalPages"
        :total-visible="3"
        class="my-4"
      ></v-pagination>
    </v-container>
  </v-container>
</template>

<script>
import axios from 'axios';
import {onMounted, ref, computed} from 'vue';
import {grey} from "vuetify/util/colors";

export default {
  data() {
    return {
      search: '',
      currentPage: 1,
      itemsPerPage: 9,
      projects: [],
      staticTotalPages: 3,
      loginDialog: false,
      email: '',
      passwordChangeDialog: false,
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      passwordVisible: false,
      isLoggedIn: false, // Praćenje statusa prijave
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid'
      ]
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('http://summitvision.studenti.sum.ba/login', {
          email: this.email,
          password: this.currentPassword
        }, {withCredentials: true});

        if (response.data.message === 'Login successful') {
          sessionStorage.setItem('isLoggedIn', true);
          this.isLoggedIn = true;
          this.loginDialog = false;
          // await this.fetchProjectsUsr();
          // Provjeri ulogu korisnika
          const userRole = response.data.role; // Pretpostavljamo da server vraća 'role' u odgovoru
          if (userRole === 'admin') {
            this.$router.push('/admin'); // Preusmjerenje na administratorsku stranicu
          } else {
            this.$router.push('/projects'); // Preusmjerenje na stranicu običnog korisnika
          }
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('Login failed. Please check your credentials and try again.');
      }
    },
    async handleLogout() {
      try {
        await axios.post('http://summitvision.studenti.sum.ba/logout', {}, {withCredentials: true});
        sessionStorage.removeItem('isLoggedIn');
        this.isLoggedIn = false;
      } catch (error) {
        console.error('Logout error:', error);
      }
    },
    async handleRegister(projectId) {
      if (!this.isLoggedIn) {
        alert('Please log in to register for a project.');
        return;
      }
      console.log('Register button clicked with projectId:', projectId);

      try {
        const response = await axios.post('http://summitvision.studenti.sum.ba/add-to-project', {projectId}, {withCredentials: true});
        await this.fetchProjectsUsr();
        if (response.status === 200) {
          alert('Successfully registered for the project!');
        }
      } catch (error) {
        console.error('Registration error:', error);
        alert('Failed to register for the project. Please try again.');
      }
    },
    async handleDeregister(projectId) {
      if (!this.isLoggedIn) {
        alert('Please log in to deregister from a project.');
        return;
      }
      console.log('Deregister button clicked with projectId:', projectId);

      try {
        const response = await axios.delete('http://summitvision.studenti.sum.ba/remove-from-project', {
          data: {projectId},
          withCredentials: true
        });
        if (response.status === 200) {
          alert('Successfully deregistered from the project!');
          await this.fetchProjectsUsr();
        }
      } catch (error) {
        console.error('Deregistration error:', error);
        alert('Failed to deregister from the project. Please try again.');
      }
    },
    async handleChangePassword() {
      if (this.newPassword !== this.confirmNewPassword) {
        alert('New passwords do not match');
        return;
      }
      try {
        const response = await axios.patch('http://summitvision.studenti.sum.ba/change-password', {
          currentPassword: this.currentPassword,
          newPassword: this.newPassword,
        }, {withCredentials: true});
        console.log(this.currentPassword, this.newPassword);
        if (response.status === 200) {
          alert('Password changed successfully');
          this.passwordChangeDialog = false;
        }
      } catch (error) {
        console.error('Change password error:', error);
      }
    },
    fetchProjects() {
      axios.get('http://summitvision.studenti.sum.ba/projekti')
        .then(response => {
          console.log(response.data);
          this.projects = response.data;
        })
        .catch(error => console.error('Error fetching data:', error));
    },
    fetchProjectsUsr() {
      axios.get('http://summitvision.studenti.sum.ba/projekti_korisnik', {withCredentials: true})
        .then(response => {
          console.log(response.data);
          this.projects = response.data;
        })
        .catch(error => console.error('Error fetching data:', error));
    },
    isRegistered(projectId) {

      return this.projects.some(project => project.ID_projekta === projectId && project.isRegistered);
    }
  },
  computed: {
    grey() {
      return grey
    },
    filteredProjects() {
      return this.projects.filter((project) => {
        return project.naziv.toLowerCase().includes(this.search.toLowerCase()) ||
          project.tehnologije.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    paginatedCards() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredProjects.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredProjects.length / this.itemsPerPage);
    },//
  },
  mounted() {
    this.fetchProjects();
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Keania+One&display=swap');

.v-container {
  max-width: 100% !important;

}
.naslov {
  background: -webkit-linear-gradient(#e8edef, #4ad88c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-family: 'Keania One', cursive;

}

.login-dialog .v-card {
  background-image: url('https://image.dnevnik.hr/media/images/1920x1080/Jan2019/61625743-mlijecna-staza.jpg'); /* Zamenite 'your-image-url.jpg' sa URL-om vaše slike */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
}

.headline {
  font-size: 20px;
  font-weight: bold;
  text-align: center;

}

.v-card {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background:linear-gradient(90deg, #060e33 0%, #1d3168 100%);
}

.v-card-title {
  font-size: 16px;
  text-align: center;
}

.v-card-subtitle {
  text-align: center;
}

</style>

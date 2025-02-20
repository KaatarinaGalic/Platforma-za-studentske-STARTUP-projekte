<template>
  <v-container ><br><br>
    <v-app-bar app>
      <!-- Puni naslov na tabletima i desktopima, skraćeni na mobitelima -->
      <v-toolbar-title class="d-none d-sm-flex" style="white-space: nowrap;">
        Admin Panel
      </v-toolbar-title>
      <v-toolbar-title class="d-flex d-sm-none" style="white-space: nowrap;">
        Admin
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        dense
        hide-details
        solo-inverted
        label="Search"
        prepend-inner-icon="mdi-magnify"
        class="search-field"
      ></v-text-field>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-avatar size="40">
          <v-img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"></v-img>
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app class="drawer"><br><br>
      <v-list>
        <v-list-item title="Dobro došli!" prepend-icon="mdi-view-dashboard"></v-list-item>
        <v-list-item title="Korisnici" prepend-icon="mdi-account"></v-list-item>
        <v-list-item title="Projekti" prepend-icon="mdi-file-document"></v-list-item>
        <v-list-item title="Prijave" prepend-icon="mdi-chart-bar"></v-list-item>
        <v-list-item title="Tehnologije" prepend-icon="mdi-office-building"></v-list-item>
        <v-list-item title="Odjava" prepend-icon="mdi-logout" @click="logoutAndRedirect"></v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <!-- Statističke Kartice -->
        <v-row>
          <v-col cols="12" md="3">
            <v-card class="stat-card">
              <v-card-title>{{ totalUsers }}</v-card-title>
              <v-card-subtitle>Korisnici</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card class="stat-card">
              <v-card-title>{{ registeredProjects }}</v-card-title>
              <v-card-subtitle>Prijavljeni</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card class="stat-card">
              <v-card-title>{{ totalProjects }}</v-card-title>
              <v-card-subtitle>Projekata</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card class="stat-card">
              <v-card-title>{{ someOtherNumber }}</v-card-title>
              <v-card-subtitle>Pregled</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
        <!--Tabele korisnika-->
        <v-card class="users-card">
          <v-card-title>Korisnici
            <v-spacer></v-spacer>
            <!-- Gumb za dodavanje novog korisnika -->
            <v-btn  color="green" @click="openAddUserModal">
              Dodaj novog korisnika
            </v-btn>
          </v-card-title>
          <v-table class="custom-table">
            <thead>
            <tr >
              <th>ID</th>
              <th>Ime</th>
              <th>Prezime</th>
              <th>Email</th>
              <th>Akcije</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" :key="user.ID_korisnika">
              <td>{{ user.ID_korisnika }}</td>
              <td>{{ user.ime }}</td>
              <td>{{ user.prezime }}</td>
              <td>{{ user.email }}</td>
              <td>
                <v-btn class="btn-edit" color="blue" @click="openEditUserModal(user)">Uredi</v-btn>
                <v-btn class="btn-delete" color="red" @click="deleteUser(user.ID_korisnika)">Obriši</v-btn>
              </td>
            </tr>
            </tbody>
          </v-table>
        </v-card>
        <!-- Modal za dodavanje novog korisnika -->
        <v-dialog v-model="addDialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="text-h5">Dodaj novog korisnika</span>
            </v-card-title>
            <v-card-text>
              <v-form ref="addForm">
                <v-text-field v-model="newUser.ime" label="Ime"></v-text-field>
                <v-text-field v-model="newUser.prezime" label="Prezime"></v-text-field>
                <v-text-field v-model="newUser.email" label="Email"></v-text-field>
                <v-text-field
                  v-model="newUser.lozinka"
                  :type="showPassword ? 'text' : 'password'"
                  label="Lozinka"
                >
                  <template v-slot:append>
                    <v-icon
                      @click="showPassword = !showPassword"
                      class="cursor-pointer"
                      size="24"
                    >
                      {{ showPassword ? 'mdi-eye-off' : 'mdi-eye' }}
                    </v-icon>
                  </template>
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn color="red" text @click="addDialog = false">Odustani</v-btn>
              <v-btn color="green" text @click="addUser">Dodaj</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!--Dijalog za uredivanje korisnika-->
        <v-dialog v-model="editDialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="text-h5">Uredi korisnika</span>
            </v-card-title>
            <v-card-text>
              <v-form ref="editForm">
                <v-text-field v-model="selectedUser.ime" label="Ime"></v-text-field>
                <v-text-field v-model="selectedUser.prezime" label="Prezime"></v-text-field>
                <v-text-field v-model="selectedUser.email" label="Email"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn color="red" text @click="editDialog = false">Odustani</v-btn>
              <v-btn color="green" text @click="updateUser">Spremi</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>

      <!-- Tabela projekata -->
      <v-card class="projects-card">
        <v-card-title>Projekti
          <v-spacer></v-spacer>
          <v-btn color="green" @click="openAddProjectModal">Dodaj novi projekt</v-btn>
        </v-card-title>
        <v-table class="custom-table">
          <thead>
          <tr>
            <th>ID Projekta</th>
            <th>Naziv</th>
            <th>Tehnologije</th>
            <th>Status</th>
            <th>Akcije</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="project in projects" :key="project.ID_projekta">
            <td>{{ project.ID_projekta }}</td>
            <td>{{ project.naziv }}</td>
            <td>{{ project.tehnologije }}</td>
            <td>Objavljen</td>
            <td class="action-buttons">
              <v-btn class="btn-edit" color="blue" small @click="editProject(project)">Uredi</v-btn>
              <v-btn class="btn-delete" color="red" small @click="deleteProject(project.ID_projekta)">Obriši</v-btn>
            </td>
          </tr>
          </tbody>
        </v-table>
      </v-card>
      <v-dialog v-model="editProjectDialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Uredi projekt</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="editProjectForm">
              <v-text-field v-model="selectedProject.naziv" label="Naziv projekta"></v-text-field>
              <v-text-field v-model="selectedProject.tehnologije" label="Tehnologije"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="red" text @click="editProjectDialog = false">Odustani</v-btn>
            <v-btn color="green" text @click="updateProject">Spremi</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- MODAL ZA DODAVANJE NOVOG PROJEKTA -->
      <v-dialog v-model="addProjectDialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Dodaj novi projekt</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="addProjectForm">
              <v-text-field v-model="newProject.naziv" label="Naziv projekta"></v-text-field>
              <v-text-field v-model="newProject.tehnologije" label="Tehnologije"></v-text-field>
              <v-text-field v-model="newProject.slika_url" label="URL slike"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="red" text @click="addProjectDialog = false">Odustani</v-btn>
            <v-btn color="green" text @click="addProject">Dodaj</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!--Tabela za registrirane projekte-->
      <v-card class="registrirani-card">
        <v-card-title>Registrirani korisnici na projektima
          <v-spacer></v-spacer>
          <v-btn color="green" @click="openAddUserToProjectModal">Dodaj korisnika na projekt</v-btn>
        </v-card-title>
        <v-table class="custom-table">
          <thead>
          <tr>
            <th>ID Projekta</th>
            <th>Naziv Projekta</th>
            <th>Ime i Prezime</th>
            <th>Email</th>
            <th>Akcije</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="korisnik in registriraniKorisnici" :key="korisnik.email">
            <td>{{ korisnik.ID_projekta }}</td>
            <td>{{ korisnik.naziv_projekta }}</td>
            <td>{{ korisnik.ime }} {{ korisnik.prezime }}</td>
            <td>{{ korisnik.email }}</td>
            <td >
              <v-icon small color="blue" @click="openEditUserProject(korisnik)">mdi-pencil</v-icon>
              <v-icon small color="red" class="ml-2" @click="removeUserFromProject(korisnik)">mdi-delete</v-icon>
            </td>

          </tr>
          </tbody>
        </v-table>
      </v-card>
      <v-dialog v-model="addUserToProjectDialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Dodaj korisnika na projekt</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="addUserToProjectForm">
              <!-- Email korisnika -->
              <v-text-field
                v-model="userEmail"
                label="Email korisnika"
                required
              ></v-text-field>

              <!-- Dropdown za projekt -->
              <v-select
              v-model="selectedProjectId"
              :items="projectOptions"
              item-title="title"
              item-value="value"
              label="Odaberi projekt"
              required
            ></v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="red" text @click="addUserToProjectDialog = false">Odustani</v-btn>
            <v-btn color="green" text @click="adminAddToProject">Dodaj</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- Uredi korisnika na projektu -->
      <v-dialog v-model="editUserDialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Uredi korisnika na projektu</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="editUserForm">
              <v-text-field v-model="selectedUser.email" label="Email"></v-text-field>

              <!-- Dropdown za projekt -->
              <v-select
                v-model="selectedProjectId"
                :items="projectOptions"
                item-title="title"
                item-value="value"
                label="Odaberi projekt"
                required
              ></v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="red" text @click="editUserDialog = false">Odustani</v-btn>
            <v-btn color="green" text @click="updateUserProject">Spremi</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- Tablica za tehnologije -->
      <v-card class="technologies-card">
        <v-card-title>
          Tehnologije
          <v-spacer></v-spacer>
          <v-btn color="green" @click="openAddTechnologyModal">
            Dodaj novu tehnologiju
          </v-btn>
        </v-card-title>
        <v-table class="custom-table">
          <thead>
          <tr>
            <th>ID</th>
            <th>Naziv</th>
            <th>Akcije</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="tech in technologies" :key="tech.ID_tehnologije">
            <td>{{ tech.ID_tehnologije }}</td>
            <td>{{ tech.naziv }}</td>
            <td>
              <v-btn class="btn-delete" color="red" @click="deleteTechnology(tech.ID_tehnologije)">
                Obriši
              </v-btn>
            </td>
          </tr>
          </tbody>
        </v-table>
      </v-card>
      <!-- Modal za dodavanje nove tehnologije -->
      <v-dialog v-model="addTechnologyDialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Dodaj novu tehnologiju</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="addTechForm">
              <v-text-field
                v-model="newTechnology.naziv"
                label="Naziv tehnologije"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="red" text @click="addTechnologyDialog = false">
              Odustani
            </v-btn>
            <v-btn color="green" text @click="addTechnology">
              Dodaj
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!--Projekti na čekanju-->
      <v-card>
        <v-card-title>Projekti na čekanju</v-card-title>
        <v-card-text>
          <v-table class="custom-table">
            <thead>
            <tr>
              <th>Naziv</th>
              <th>Opis</th>
              <th>Podnositelj</th>
              <th>Akcije</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="project in pendingProjects" :key="project.id">
              <td>{{ project.naziv }}</td>
              <td>{{ project.slika_url }}</td>
              <td>{{ lastSubmitterEmail}}</td>
              <td class="action-buttons">
                <v-btn color="green" @click="approveProject(project.ID_projekta)">Odobri</v-btn>
                <v-btn color="red" @click="rejectProject(project.ID_projekta)">Odbij</v-btn>
              </td>
            </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-main>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      totalUsers: 7, // Ukupno korisnika
      registeredProjects: 5, // Prijavljeni projekti
      totalProjects: 28, // Ukupno projekata
      someOtherNumber: 100,
      users: [],
      editDialog: false, // Kontrola modala
      selectedUser: { id: null, ime: "", prezime: "", email: "" },
      addDialog: false, // Modal za dodavanje novog korisnika
      newUser: { ime: "", prezime: "", email: "", lozinka: "" },
      showPassword: false, // Vidljivost lozinke
      projects: [],
      editProjectDialog: false, // Kontrola modala za uredivanje projekta
      selectedProject: { ID_projekta: null, naziv: "", tehnologije: "" },
      addProjectDialog: false,
      newProject: { naziv: "", tehnologije: "", slika_url: "" },
      registriraniKorisnici: [],
      addUserToProjectDialog: false,
      userEmail: '',
      selectedProjectId: null,
      editUserDialog: false,
      technologies: [],
      addTechnologyDialog: false,
      newTechnology: {
        naziv: ""
      },
      pendingProjects: [],
      lastSubmitterEmail: '',



    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get("http://localhost:6969/users");
        this.users = response.data;
      } catch (error) {
        console.error("Greška kod dohvaćanja korisnika:", error);
      }
    },
    async deleteUser(userId) {
      if (!confirm("Jeste li sigurni da želite obrisati korisnika?")) return;
      try {
        await axios.delete(`http://localhost:6969/users/${userId}`);
        this.fetchUsers(); // Ponovno dohvaćanje korisnika nakon brisanja
      } catch (error) {
        console.error("Greška kod brisanja korisnika:", error);
      }
    },
    openEditUserModal(user) {
      this.selectedUser = { ...user }; // Kopiranje podataka u modal
      this.editDialog = true; // Otvori modal
    },

    async updateUser() {
      try {
        await axios.put(`http://localhost:6969/users/${this.selectedUser.ID_korisnika}`, {
          ime: this.selectedUser.ime,
          prezime: this.selectedUser.prezime,
          email: this.selectedUser.email,
        });

        this.editDialog = false; // Zatvori modal
        this.fetchUsers(); // Osvježi listu korisnika
      } catch (error) {
        console.error("Greška kod ažuriranja korisnika:", error);
      }
    },
    // Otvara modal za dodavanje novog korisnika
    openAddUserModal() {
      this.addDialog = true;
    },
    async addUser() {
      try {
        // Kako bi ID novog korisnika počinjao od 1000,

        const response = await axios.post("http://localhost:6969/register", {
          ime: this.newUser.ime,
          prezime: this.newUser.prezime,
          email: this.newUser.email,
          lozinka: this.newUser.lozinka,
        });
        if (response.status === 201) {
          alert("Korisnik uspješno dodan!");
          this.addDialog = false;
          this.fetchUsers();
          this.newUser = { ime: "", prezime: "", email: "", lozinka: "" };
        }
      } catch (error) {
        console.error("Greška kod dodavanja korisnika:", error);
        alert("Dogodila se greška pri dodavanju korisnika.");
      }
    },
    async fetchProjects() {
      try {
        const response = await axios.get("http://localhost:6969/projekti");
        this.projects = response.data;
        console.log("Fetched projects:", this.projects);
      } catch (error) {
        console.error("Greška kod dohvaćanja projekata:", error);
      }
    },

    async deleteProject(projectId) {
      if (!confirm("Jeste li sigurni da želite obrisati projekt?")) return;
      try {
        await axios.delete(`http://localhost:6969/projekti/${projectId}`);
        this.fetchProjects(); // Osvježi listu projekata nakon brisanja
      } catch (error) {
        console.error("Greška kod brisanja projekta:", error);
      }
    },
    editProject(project) {
      console.log("Otvaranje modala za projekt:", project); // Debug
      this.selectedProject = { ...project };
      this.editProjectDialog = true;
    },
    async updateProject() {
      console.log("Podaci prije slanja:", this.selectedProject);
      try {
        await axios.put("http://localhost:6969/projekti", {
          id: this.selectedProject.ID_projekta,
          naziv: this.selectedProject.naziv,
          // Ako je this.selectedProject.tehnologije niz, pretvori ga u string:
          tehnologije: Array.isArray(this.selectedProject.tehnologije)
            ? this.selectedProject.tehnologije.join(", ")
            : this.selectedProject.tehnologije
        });
        alert("Projekt uspješno ažuriran!");
        this.editProjectDialog = false;
        this.fetchProjects(); // Osvježi listu projekata nakon ažuriranja
      } catch (error) {
        console.error("Greška kod ažuriranja projekta:", error);
        alert("Dogodila se greška!");
      }
    },

    openAddProjectModal() {
      this.addProjectDialog = true;
    },

    async addProject() {
      try {
        const response = await axios.post("http://localhost:6969/projects", {
          naziv: this.newProject.naziv,
          tehnologije: this.newProject.tehnologije,
          slika_url: this.newProject.slika_url
        });

        if (response.status === 201) {
          alert("Projekt uspješno dodan!");
          this.addProjectDialog = false;
          this.fetchProjects(); // Osvježavanje liste projekata
        }
      } catch (error) {
        console.error("Greška kod dodavanja projekta:", error);
      }
    },
    async fetchRegistriraniKorisnici() {
      try {
        const response = await axios.get("http://localhost:6969/registrirani_korisnici");
        this.registriraniKorisnici = response.data;
      } catch (error) {
        console.error("Greška kod dohvaćanja registriranih korisnika:", error);
      }
    },
    openAddUserToProjectModal() {
      this.addUserToProjectDialog = true;
    },
    async adminAddToProject() {
      try {
        const response = await axios.post('http://localhost:6969/admin-add-to-project', {
          email: this.userEmail,
          projectId: this.selectedProjectId
        });
        alert(response.data);

        this.addUserToProjectDialog = false;
        this.userEmail = '';
        this.selectedProjectId = null;

        // Osvježi tablicu registrirani korisnici na projektima
        this.fetchRegistriraniKorisnici();
      } catch (error) {
        console.error('Greška kod dodavanja korisnika na projekt:', error);
        alert('Failed to add user to project.');
      }
    },

    //za zadnju tabelu metode
    openEditUserProject(korisnik) {
      this.selectedUser = { ...korisnik };
      this.editUserDialog = true;
    },

    async updateUserProject() {
      try {
        await axios.put(`http://localhost:6969/registrirani_korisnici/${this.selectedUser.ID_korisnika}`, {
          projectId: this.selectedProjectId, // novi ID projekta
        });
        this.editUserDialog = false;
        this.fetchRegistriraniKorisnici();
      } catch (error) {
        console.error("Greška kod ažuriranja registracije korisnika:", error);
      }
    },


    async removeUserFromProject(korisnik) {
      if (!confirm("Jeste li sigurni da želite ukloniti ovog korisnika s projekta?")) return;
      try {
        axios.delete('http://localhost:6969/registrirani_korisnici/' + korisnik.ID_korisnika)
        this.fetchRegistriraniKorisnici();
      } catch (error) {
        console.error("Greška kod uklanjanja korisnika s projekta:", error);
      }
    },
    logoutAndRedirect() {
      this.$router.push(' ');
    },

    async fetchTechnologies() {
      try {
        const response = await axios.get("http://localhost:6969/technologies");
        this.technologies = response.data;
      } catch (error) {
        console.error("Greška kod dohvaćanja tehnologija:", error);
      }
    },

    async deleteTechnology(techId) {
      if (!confirm("Jeste li sigurni da želite obrisati ovu tehnologiju?")) return;
      try {
        await axios.delete(`http://localhost:6969/technologies/${techId}`);
        this.fetchTechnologies(); // Osvježi listu nakon brisanja
      } catch (error) {
        console.error("Greška kod brisanja tehnologije:", error);
      }
    },
    openAddTechnologyModal() {
      this.addTechnologyDialog = true;
    },
    async addTechnology() {
      try {
        const response = await axios.post("http://localhost:6969/technologies", {
          naziv: this.newTechnology.naziv
        });
        if (response.status === 201) {
          alert("Tehnologija uspješno dodana!");
          this.addTechnologyDialog = false;
          this.newTechnology.naziv = "";
          this.fetchTechnologies();
        }
      } catch (error) {
        console.error("Greška kod dodavanja tehnologije:", error);
        alert("Greška kod dodavanja tehnologije!");
      }
    },
    //Za Zahtjev
    async fetchPendingProjects() {
      try {
        const response = await fetch("http://localhost:6969/api/projects/pending");
        this.pendingProjects = await response.json();
      } catch (error) {
        console.error("Error fetching pending projects:", error);
      }
    },

    async approveProject(projectId) {
      try {
        await axios.post(`http://localhost:6969/api/projects/approve/${projectId}`);
        alert("Projekt odobren!");
        this.fetchPendingProjects();
      } catch (error) {
        console.error("Error approving project:", error);
        alert("Došlo je do greške prilikom odobravanja projekta.");
      }
    },


    async rejectProject(projectId) {
      console.log('Rejecting project with ID:', projectId);
      try {
        await axios.post(`http://localhost:6969/api/projects/reject/${projectId}`);
        this.fetchPendingProjects();
      } catch (error) {
        console.error("Error rejecting project:", error);
      }
    },

    async getLastSubmitterEmail() {
      try {
        const response = await axios.get('http://localhost:6969/api/projects/last-submitter');
        this.lastSubmitterEmail = response.data.lastSubmitterEmail;
      } catch (error) {
        console.error('Greška pri dohvaćanju emaila podnositelja:', error);
      }
    },


  },
  mounted() {
    this.fetchUsers();
    this.fetchProjects();
    this.fetchRegistriraniKorisnici();
    this.fetchTechnologies();
    this.fetchPendingProjects();
    this.getLastSubmitterEmail();

  },
  computed: {
    projectOptions() {
      return this.projects.map(p => ({
        title: p.naziv,
        value: p.ID_projekta
      }));
    }
  }


};
</script>

<style>
.v-container {
  max-width: 100% !important;
  padding: 0 15px;
}
.users-card {

  color: #fff;
  margin-top: 20px;
}

.v-card {
  text-align: center;
  padding: 20px;
  margin-bottom: 80px;

}

.v-navigation-drawer {
  width: 250px;
  background-color: #151016;
  color: #fff;
}

.v-navigation-drawer .v-list-item {
  color: #00f7ff;
}

.v-app-bar {
  background-color: #151016 !important;
  padding: 15px;
}

.v-toolbar-title {
  font-size: 1.5rem;
  font-weight: 500;
  color: #d5d9dc;
}

.v-btn {
  margin-left: 10px;
  color: #fff;
}

.v-text-field {
  width: 250px;
  background-color: #3a3a3a;
}

.v-avatar {
  border: 2px solid #fff;
}

.v-table thead {
  background-color: #57a895;
}

.search-field .v-input__control {
  background-color: #151016;
}

.stat-card {
  background: linear-gradient(45deg, #53b5c1, #8450bc);
  color: #e3d4d4;
  margin-bottom: 50px;
  margin-right: 30px;
}


.custom-table tr {
  background-color: #3a3a3a;
  color: #fff;

}
.button-group {
  display: flex;
  justify-content: space-between;
}

.button-group .v-btn {
  min-width: 100px;
  font-size: 14px;
}

.custom-table {
  width: 100%;
  /* Uklanja razmake između ćelija, da sve bude zbijenije */
  border-collapse: collapse;
  margin: 0 auto;
}

.custom-table thead {
  background-color: #57a895;
  color: #fff;
}

/* Stil za header i obične ćelije */
.custom-table th,
.custom-table td {
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
}

.custom-table th {
  font-weight: bold;
}
.action-buttons {
  display: flex;
  justify-content: center;
  gap: 5px; /* Smanji razmak između gumba */

}

.action-buttons v-btn {
  min-width: 70px;
  padding: 5px 10px;
  font-size: 12px;

}
.btn-edit:hover {
  background-color: #1976D2;
  transform: scale(1.05);
  transition: 0.3s ease-in-out;
}
.btn-delete:hover {
  background-color: #D32F2F;
  transform: scale(1.05);
  transition: 0.3s ease-in-out;
}
.btn-edit:hover,
.btn-delete:hover {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

</style>

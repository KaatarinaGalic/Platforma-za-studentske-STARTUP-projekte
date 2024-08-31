<template>
  <v-app>
    <!-- Navigacijska traka -->
    <v-app-bar app color="black" dark prominent>
      <v-toolbar-title class="title">SkillHubProjects</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- Gumb za otvaranje bocnog izbornika na mob ekranima -->
      <v-app-bar-nav-icon
        v-if="isMobile"
        @click="drawer = !drawer"
        class="white-icon"
      ></v-app-bar-nav-icon>

      <!-- Stavke u izborniku za vece ekrane -->
      <template v-if="!isMobile">
        <v-btn text @click="navigateTo('')">Home</v-btn>
        <v-btn text @click="navigateTo('projects')">Projects</v-btn>
        <v-btn text @click="navigateTo('registration')">Registration</v-btn>
        <v-btn text @click="navigateTo('about')">About</v-btn>
        <v-btn text @click="navigateTo('contact')">Contact</v-btn>
      </template>
    </v-app-bar>

    <!-- Bočni meni za manje ekrane -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      mobile-break-point="960"
      :style="{ backgroundColor: 'black' }"
    >
      <v-list>
        <v-list-item
          v-for="item in menu"
          :key="item.title"
          @click="navigateTo(item.link); drawer = false"
        >
          <v-list-item-title class="nav-item">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Glavni sadrzaj -->
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

// Kontrola otvaranja/zatvaranja bocnog menija
const drawer = ref(false)

const menu = [
  { title: 'Home', link: '' },
  { title: 'Contact', link: 'contact' },
  { title: 'About', link: 'about' },
  { title: 'Registration', link: 'registration' },
  { title: 'Projects', link: 'projects' }
]

const isMobile = ref(window.innerWidth < 960)

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 960
}

// Dodavanje event listener-a na promjenu velicine prozora
onMounted(() => {
  window.addEventListener('resize', updateIsMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile)
})

// Router
const router = useRouter()

function navigateTo(page) {
  router.push(`/${page}`)
}
</script>

<style lang="scss" scoped>
.v-app-bar {
  background-color: black;
  border-bottom: 2px solid white;
  height: 85px;
  position: fixed;
  top: 0;
  z-index: 1000;
}

.title {
  flex-grow: 1;
  text-align: left;
  font-weight: 800;
  font-size: clamp(25px, 4vw, 28px);
  background: linear-gradient(90deg, #00c6ff 0%, #ff00c6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 5px rgb(119, 179, 188);
  z-index: 1;
}

.v-btn {
  background: linear-gradient(90deg, #00c6ff 0%, #ff00c6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bolder;
  font-size: medium;
  margin: 0 10px;

  &:hover {
    color: #d5d9dc;
  }
}

.v-list-item-title {
  color: white;
}

.v-list-item:hover {
  background-color: rgb(74, 99, 223);
}

.white-icon .v-icon {
  color: white;
}

.v-app-bar-nav-icon .v-icon {
  color: white !important;
}

.v-app-bar-nav-icon:focus-visible {
  outline: none;
  box-shadow: none;
}
</style>

<template>
  <v-container class="hero-container" fluid>
    <video class="hero-video" autoplay muted loop>
      <source src="@/assets/3141208-uhd_3840_2160_25fps.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="overlay-content">
      <h1 class="hero-title">
        VAŠA VIZIJA, NAŠ PRIORITET - DOBRO DOŠLI NA SummitVision!</h1>
      <p class="hero-description">
        Studentska platforma za inovativne startup projekte.
        Otkrij svoj potencijal, poveži se sa studentima i stvaraj budućnost!
      </p>
      <router-link to="/about">
        <v-btn class="hero-btn" large elevation="2">Pročitaj više</v-btn>
      </router-link>
    </div>
  </v-container>
<!--Slika-->

  <v-container fluid class="py-10" style="background-color: #000; color: #fff;">
    <v-row align="center" justify="center">
      <!-- Tekstualni dio -->
      <v-col cols="12" md="6" class="text-left">
        <h1 class="display-2" style="color: #00f7ff;">Započni Svoju Karijeru Uz SummitVision!</h1>
        <h2 class="display-2" style="color: #00f7ff;">Ostvari svoje snove kroz rad na startup projektima i razvoj svojih programerskih vještina!</h2><br>
        <p class="body-1">
          SummitVision je inovativna platforma za studente koja nudi priliku za rad na startup projektima,
          razvoj programerskih vještina i stjecanje praktičnog iskustva. Prijavi se na projekte, surađuj s
          kolegama studentima, konzultiraj se s iskusnim mentorima i upoznaj se s najnovijim tehnologijama.
          SummitVision je tvoj korak prema profesionalnom razvoju i uspješnoj karijeri!
        </p>
      </v-col>

      <!-- Dio sa slikom -->
      <v-col cols="12" md="6" class="text-center">
        <img
          src="https://correctdigital.com/wp-content/uploads/2023/08/onlineImages-1-1024x683-1200x650.jpg"
          alt="slika projekta"
          style="max-width: 100%; border-radius: 10px;"
        />
      </v-col>
    </v-row>
  </v-container>

  <!--Tehnologije-->
  <v-card class="pa-4" outlined>
    <v-card-title>
      <div>
        <h3>Tehnologije</h3>
        <p  class="subtitle-1" style="font-size: clamp(1rem, 1.5vw, 1.2rem);">Otkrijte moćne alate koji će transformirati
          vaše projekte u uspješne inovacije</p>
      </div>
    </v-card-title>

    <v-card-text>
      <div class="technologies-container">

        <div class="technology-items">
          <div v-for="(technology, index) in technologies" :key="index" class="technology-item">
            <v-icon large class="mr-2" :color="technology.iconColor">{{ technology.icon }}</v-icon>
            <span class="headline">{{ technology.name }}</span>
          </div>

          <div v-for="(technology, index) in technologies" :key="'duplicate-' + index" class="technology-item">
            <v-icon large class="mr-2" :color="technology.iconColor">{{ technology.icon }}</v-icon>
            <span class="headline">{{ technology.name }}</span>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>

    <!--Recenzije-->
    <br> <br>
  <v-container class="testimonials-section" fluid>
    <v-row>
      <v-col cols="12" md="6">
        <div class="testimonials-header">
          <p class="subtitle">SVJEDOČANSTVO</p>
          <h1 class="main-title">ŠTO NAŠI KORISNICI KAŽU</h1>
          <p class="description">
            Vaš uspjeh je naš cilj! Iskustva studenata koji su ostvarili svoje ideje uz pomoć naše platforme!
            Pročitajte njihove priče i saznajte kako su razvili svoje vještine i projekte do uspjeha.
          </p>
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <div
          class="testimonial"
          @mouseenter="stopAutoChange"
          @mouseleave="startAutoChange"
        >
          <v-icon color="cyan" class="quote-icon">mdi-format-quote-open</v-icon>
          <p class="testimonial-text">
            "{{ testimonials[currentTestimonial].text }}"
          </p>
          <div class="author">
            <div class="author-details">
              <h3 class="author-name">
                {{ testimonials[currentTestimonial].author }}
              </h3>
              <p class="author-title">
                {{ testimonials[currentTestimonial].title }}
              </p>
            </div>
          </div>
          <div class="dots">
            <span
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="dot"
              :class="{ active: index === currentTestimonial }"
              @click="setTestimonial(index)"
            ></span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>

    <!--Statistika-->
    <br><br>
  <div class="statistics-container">
    <div class="statistics">
      <div class="statistic">
        <img
          src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg"
          alt="Projekti"
          class="icon"
        />
        <h2 class="count">{{ projectsCount }}+</h2>
        <p class="description">Projekata</p>
      </div>
      <div class="statistic">
        <img
          src="https://media.licdn.com/dms/image/D5612AQG1vkbK7TT-Ng/article-cover_image-shrink_600_2000/0/1673337870728?e=2147483647&v=beta&t=-GGKaa_dNOXEHfX0-56pl9TJUue1n35u2SmoB_IVpB0"
          alt="Korisnici"
          class="icon"
        />
        <h2 class="count">{{ usersCount }}+</h2>
        <p class="description">Korisnika</p>
      </div>
      <div class="statistic">
        <img
          src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg"
          alt="Završeni projekti"
          class="icon"
        />
        <h2 class="count">{{ completedProjectsCount }}+</h2>
        <p class="description">Završenih projekata</p>
      </div>
    </div>
  </div>
    <br><br><br><br>
    <!--Vijesti-->
    <div>
      <h1 class="news-title">Inovativni Kutak: Svijet Tehnologije na Dlanu</h1><br>
      <News/>
    </div>

</template>

<script setup>

import {ref, onMounted, onBeforeUnmount} from 'vue';

// recenzije

// Reaktivni podaci
const currentTestimonial = ref(0);
const testimonials = ref([
  {
    text: "SummitVision mi je omogućio da se fokusiram na vlastiti projekt, uz podršku mentora kojeg sam sama odabrala. Njihovo stručno vodstvo i savjeti bili su ključni za moj napredak.",
    author: "Ana Petrović",
    title: "Studentica Informatike",
  },
  {
    text: "Rad na vlastitom projektu na SummitVision platformi pružio mi je neprocjenjivo iskustvo. Mentor kojeg sam izabrao pomogao mi je razviti vještine i ostvariti ideju do kraja.",
    author: "Marko Horvat",
    title: "Student Ekonomije",
  },
  {
    text: "Ova platforma omogućila mi je da svoje ideje pretvorim u stvarnost. Zahvaljujući stručnom mentorstvu, mogla sam svladati izazove i unaprijediti svoj projekt.",
    author: "Ivana Kovač",
    title: "Studentica Menadžmenta",
  },
  {
    text: "SummitVision je izvrsna prilika za svakoga tko želi samostalno raditi na inovativnim idejama, uz stalnu podršku mentora. Naučio sam mnogo i stekao vrijedno iskustvo.",
    author: "Luka Marić",
    title: "Student Elektrotehnike",
  },
  {
    text: "Oduševljena sam kako SummitVision kombinira fleksibilnost samostalnog rada s podrškom stručnih mentora. Pomoć mog mentora bila je ključna za napredak mog projekta.",
    author: "Mia Jurić",
    title: "Studentica Dizajna",
  },
]);

const autoChangeInterval = ref(null);

// Metode
function setTestimonial(index) {
  currentTestimonial.value = index;
}

function startAutoChange() {
  autoChangeInterval.value = setInterval(() => {
    currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.value.length;
  }, 3000);
}

function stopAutoChange() {
  clearInterval(autoChangeInterval.value);
}

// Lifecycle hooks
onMounted(() => {
  startAutoChange();
});

onBeforeUnmount(() => {
  stopAutoChange();
});


// Statistika podaci
const projectsCount = ref(0);
const usersCount = ref(0);
const completedProjectsCount = ref(0);

// Funkcija za animaciju brojanja
function animateCount(property, target, duration) {
  const startValue = property.value;
  const startTime = performance.now();

  function updateCount(currentTime) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    property.value = Math.floor(progress * (target - startValue) + startValue);

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    }
  }

  requestAnimationFrame(updateCount);
}

// Animacija brojanja prilikom učitavanja stranice
onMounted(() => {
  animateCount(projectsCount, 50, 2000); // 50+ projekata
  animateCount(usersCount, 80, 2000); // 80+ korisnika
  animateCount(completedProjectsCount, 500, 2000); // 500+ završenih projekata
});
//Animacija za tehnologije
  const technologies = ref([
  {
    name: 'React',
    icon: 'mdi-react',
    iconColor: 'blue',
  },
  {
    name: 'Node.js',
    icon: 'mdi-nodejs',
    iconColor: 'green',
  },
  {
    name: 'Vue.js',
    icon: 'mdi-vuejs',
    iconColor: 'green',
  },
  {
    name: 'MongoDB',
    icon: 'mdi-database',
    iconColor: 'green',
  },
  {
    name: 'Docker',
    icon: 'mdi-docker',
    iconColor: 'blue',
  },
  {
    name: 'Angular',
    icon: 'mdi-angular',
    iconColor: 'red',
  },
  {
    name: 'Python',
    icon: 'mdi-language-python',
    iconColor: 'blue',
  },
  ]);

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Keania+One&display=swap');
.v-container {
  max-width: 100% !important;

}
.hero-container {
  position: relative;
  width: 100%;
  flex-direction: column;
  height: 120vh;
  overflow: hidden; /* Sakriva sve što izlazi iz okvira */
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1; /* Video je u pozadini */
}

.overlay-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 2; /* Overlay sadržaj je iznad videa */
  padding: 1rem;
}

.hero-title {
  font-family: 'Keania One', cursive;
  font-size: 2.8rem !important;
  font-style: italic;

  font-weight: bold;
  margin-bottom: 1rem;
  color: white;

}

.hero-description {
  font-family:'Open Sans',sans-serif;
  background: -webkit-linear-gradient(#ffffff, #4ad88c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  line-height: 1.5;
}

.hero-btn {
  font-size: 1rem;
  padding: 0.6rem 1rem;
  background-color: #ffffff;
  color: black;
}
/*tekst sa slikom ispod videa*/
h1{
  font-style: normal;
  text-transform: uppercase;
}
h2 {
  font-weight: bold;
  font-style: italic;

}

.v-card {
  background: linear-gradient(90deg, #060e33 0%, #1d3168 100%);
  border-radius: 8px;
  color: white;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.v-card-title {
  font-size: 1.5rem;
  text-align: left;
  padding-bottom: 10px;
}
.v-card-text {
  font-size: 2rem;
  margin-top: 10px;
}
.technologies-container {
  display: flex;
  overflow: hidden;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
}
.technology-items {
  display: flex;
  animation: move 25s linear infinite;
}

@keyframes move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.technology-item {
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding: 10px;
  text-align: center;
  color: white;
}
.technology-item .headline {
  font-size: 1.5rem;
  margin-left: 8px;
}
/*Recenzije*/
.testimonials-section {
  background-color: #121212;
  color: white;
  padding: 40px 20px;
}
.testimonials-header {
  text-align: left;
}
.subtitle {
  color: #00ffc8;
  font-weight: bold;
  letter-spacing: 1px;
}
.main-title {
  font-size: 36px;
  font-weight: bold;
  color: #00ffc8;
  margin: 10px 0;
}
.description {
  font-size: 16px;
  line-height: 1.5;
  color: #ccc;
}
.testimonial {
  text-align: left;
  background-color: transparent;
}
.quote-icon {
  font-size: 40px;
  margin-bottom: 10px;
}
.testimonial-text {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
  color: #ddd;
}
.author {
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: flex-end;
}
.author-name {
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-align: right;
}
.author-title {
  font-size: 14px;
  color: #ccc;
  text-align: right;
}
.dots {
  display: flex;
  margin-top: 20px;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #555;
  margin-right: 8px;
  cursor: pointer;
}
.dot.active {
  background-color: #00ffc8;
}
/*Statistika*/

.statistics-container {
  background: linear-gradient(90deg, #060e33 0%, #1d3168 100%);
  padding: 30px;
  border-radius: 10px;
  width: 80%;
  margin: 20px auto;
}

.statistics {
  display: flex;
  justify-content: space-around;
  color: white;
}

.statistic {
  text-align: center;
}

.icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.count {
  font-size: 3em;
  font-weight: bold;
}

.description {
  font-size: 1.5em;
  color: #fff;
}

/* Stil za mobilne uređaje */
@media (max-width: 768px) {
  .statistics {
    flex-direction: column;
    align-items: center;
  }

  .statistic {
    margin-bottom: 20px;
  }
}
.news-title{
  background: -webkit-linear-gradient(#30c374, rgba(255, 255, 255, 0.93));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Keania One', cursive;
  font-style: italic;
  text-align: center;
}

</style>

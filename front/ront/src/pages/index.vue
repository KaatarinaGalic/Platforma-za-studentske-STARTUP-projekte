<template>
  <!--Prva slika s tekstom --->
  <v-container fluid class="hero-container">
    <v-row align="center" justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="hero-title">Welcome to SkillHubProjects</h1>
        <p class="hero-description">
          SkillHubProjects is your go-to destination for collaborating on freelance projects.<br>
          Whether you're an experienced professional or just starting your career, this platform allows you to find projects,
          connect with talented individuals, and build something incredible together.<br>
          Join our community, expand your skills, and bring your ideas to life on SkillHubProjects.
        </p>
        <router-link to="/about">
          <v-btn class="hero-btn" large elevation="2">More Information</v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-container>


  <br> <br> <br> <br> <br>
  <v-container class="hero-section py-5" fluid>
    <v-row align="center" justify="center" class="text-center">
      <v-col cols="12" md="8">
        <h1 class="hero-title display-2">Ready to Kickstart Your Project Journey?</h1>
        <p class="hero-subtitle">Join us and unlock exciting opportunities to work on innovative projects that make a difference.</p>
        <router-link to="/contact">
          <v-btn  class="hero-button">Let's Talk</v-btn>
        </router-link>
        <router-link to="/projects">
          <v-btn  class="hero-button outlined">Explore Available Projects</v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-container>

    <!--Recenzije-->
    <br> <br> <br> <br> <br>
  <v-carousel
    height="400"
    show-arrows="hover"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(testimonial, index) in testimonials"
      :key="index"
      >
      <v-sheet
        class="testimonial-sheet"
        height="100%"
        elevation="2"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-center">
            <v-icon large color="white">mdi-format-quote-close</v-icon>
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <p class="testimonial-author">{{ testimonial.author }}</p>
          </div>
          </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
    <!--Statistika-->
    <br><br><br><br>
  <div class="statistics-container">
    <div class="statistics">
      <div class="statistic">
        <img
          src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg"
          alt="Projekti"
          class="icon"
        />
        <h2 class="count">{{ projectsCount }}+</h2>
        <p class="description">Projects</p>
      </div>
      <div class="statistic">
        <img
          src="https://media.licdn.com/dms/image/D5612AQG1vkbK7TT-Ng/article-cover_image-shrink_600_2000/0/1673337870728?e=2147483647&v=beta&t=-GGKaa_dNOXEHfX0-56pl9TJUue1n35u2SmoB_IVpB0"
          alt="Korisnici"
          class="icon"
        />
        <h2 class="count">{{ usersCount }}+</h2>
        <p class="description">Users</p>
      </div>
      <div class="statistic">
        <img
          src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg"
          alt="Završeni projekti"
          class="icon"
        />
        <h2 class="count">{{ completedProjectsCount }}+</h2>
        <p class="description">Completed projects</p>
      </div>
    </div>
  </div>
    <br><br><br><br>
    <!--Vijesti-->
    <div>
      <News/>
    </div>

</template>

<script setup>

  import {ref, onMounted} from 'vue';

  // Testimonials data
  const testimonials = ref([
  {
    text: 'Rad sa SkillHubProjects omogućio mi je da se povežem sa zanimljivim projektima i unaprijedim svoje profesionalne vještine',
    author: 'Ivan - Student',
  },
  {
    text: 'Odličan tim i izvanredno iskustvo! Preporučujem svakome.',
    author: 'Sara - Front-end Developer',
  },
  {
    text: 'Profesionalizam i posvećenost. Definitivno bih ponovo radio s njima.',
    author: 'Manuel - UX Designer',
  },
    {
      text: '\n' +
        '"Working with this team was an absolute pleasure. Excellent communication and top-notch results!"',
      author: 'Ana, Full-stack Developer',
    },
  ]);

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

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.hero-container {
  background-image: url('https://www.tportal.hr/media/thumbnail/w1000/2075534.jpeg');
  background-size: cover;

  position:relative;
  padding: 100px 0;
  color: white;
  font-family: 'Poppins', sans-serif;
  background-repeat: no-repeat;
  width: 100%;
  height: 85vh;
  display: flex;
  overflow: hidden;
}
.hero-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Tamni sloj */
  z-index: 1;
}
.hero-container > * {
  position: relative;
  z-index: 2;
}


.hero-title {
  font-size: 4rem;
  margin-bottom: 20px;
  color: white;
  font-weight: bolder;


}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 800px;
  margin-left: auto;
  font-weight: lighter;
  margin-right: auto;
}

.hero-btn {
  background-color: #c800ff;
  color: white;
  border: 2px solid white;

  &:hover {
    background-color: #8450bc;
  }
}

.hero-section {
  background-image: url('https://previews.123rf.com/images/peshkov/peshkov1905/peshkov190500374/128578729-abstract-glowing-circuit-coding-background-programming-and-technology-concept-3d-rendering.jpg');
  background-size: cover;
  background-position: center;
  height: 50vh;
  color: white;
  font-weight: bold;
  padding:40px 0;



}

.hero-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom:20px;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.hero-button {
  margin: 10px;
  background-color: #ec1a4b;
  color: white;
  border: 2px solid white;

  &:hover {
    background-color: #1d3188;
  }

}

.hero-button.outlined {
  background-color: #ec1a4b;
  color: white;
  &:hover {
    background-color: #1d3188;
  }
  border: 2px solid white;

}
/*Recenzije*/
.testimonial-sheet {
  background: linear-gradient(90deg, #060e33 0%, #8450bc 100%);

  border-radius: 8px;
  padding: 2rem;
  text-align: center;
}

.testimonial-text {
  font-size: 1.2rem;
  color: #ffffff;
}

.testimonial-author {
  font-size: 1rem;
  color: #ffffff;
  font-style: italic;
}
/*Statistika*/

.statistics-container {
  background-color: #3d3d9f;
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

</style>

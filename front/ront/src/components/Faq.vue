<template>
  <div class="faq-container">
    <h2 class="faq-title">Često postavljana pitanja!</h2><br><br>
    <div
      v-for="(item, index) in faqs"
      :key="index"
      class="faq-item"
    >
      <div class="faq-question" @click="toggleAnswer(index)">
        <span>{{ item.question }}</span>
        <span class="faq-icon">{{ activeIndex === index ? '−' : '+' }}</span>
      </div>
      <transition name="fade">
        <div v-if="activeIndex === index" class="faq-answer">
          {{ item.answer }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      faqs: [
        { question: 'Što je SummitVision?', answer: 'SummitVision je platforma koja okuplja studente iz različitih područja, omogućujući im rad na inovativnim projektima i ostvarenje profesionalnih i akademskih ciljeva.' },
        { question: 'Kome je SummitVision namijenjen?', answer: 'SummitVision nudi prilike za sve studente, bez obzira na to jesu li iskusni ili tek započinju svoje putovanje. Prilagodit ćemo se vašim vještinama i ambicijama.' },
        { question: 'Kako SummitVision podržava moj razvoj?', answer: 'SummitVision pruža resurse i podršku koji olakšavaju razvoj vaših ideja, uključujući povezivanje s mentorima i unapređivanje vašeg znanja.' },
        { question: 'Može li SummitVision pomoći u ostvarivanju mojih ideja?', answer: 'Da, SummitVision je dizajniran kako bi vam pomogao da vaše ideje postanu stvarnost putem suradnje i resursa koji su vam na raspolaganju.' },
        { question: 'Što čini SummitVision različitim od drugih platformi?', answer: 'SummitVision nije samo platforma, to je zajednica koja potiče rast, inovaciju i suradnju među studentima.' },
        { question: 'Kako se mogu povezati s mentorom?', answer: 'Na SummitVision možete organizirati sastanak s mentorom po vašem izboru i raditi na svojim projektima uz njegovu podršku.' },
        { question: 'Kako SummitVision doprinosi mom profesionalnom napretku?', answer: 'Na SummitVision možete razviti vještine, ostvariti akademske ciljeve i proširiti svoju mrežu kontakata, što vam pomaže u profesionalnom razvoju.' },
        { question: 'Koje su prilike za suradnju na SummitVision platformi?', answer: 'SummitVision potiče suradnju između studenata i omogućava vam da radite na većim projektima, dijelite ideje i znanje s kolegama.' },
        { question: 'Kako mogu postati dio SummitVision zajednice?', answer: 'Pridružite se SummitVision tako da se registrirate na našoj platformi i počnete raditi na projektima koji odgovaraju vašim interesima i vještinama.' }
      ]
    };
  },
  methods: {
    toggleAnswer(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Keania+One&display=swap');
.faq-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgb(180, 195, 218);

}
.faq-title {
  font-size: 2rem;
  font-weight: bold;
  font-family:'Keania One',sans-serif;
  background: -webkit-linear-gradient(#125045,#008080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  text-align: left;
}

.faq-item {
  margin-bottom: 20px;
  border: 1px solid #8450bc;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(45deg, #53b5c1, #8450bc);
}

.faq-question {
  padding: 15px;
  background-color: #6e6d6d;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin-bottom: 10px;
  color: #151016;
}

.faq-icon {
  font-size: 18px;
}

.faq-answer {
  padding: 15px;
  border-top: 1px solid #c800ff;
  text-align: left;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

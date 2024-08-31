<template>
  <div class="faq-container">
    <h2 class="faq-title">Frequently Asked Questions</h2><br><br>
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
        { question: 'What is SkillHubProjects?', answer: 'SkillHubProjects is a platform that connects users with various projects in the field of technology and education.' },
        { question: 'How can I apply for a project?', answer: 'You can apply through the application form available on each project\'s page.' },
        { question: 'What types of projects are available?', answer: 'We offer various projects in areas such as web development, mobile applications, research, education, and much more."' },
        { question: 'How can I contact the SkillHubProjects team?', answer: 'To contact us, you can fill out the contact form available on our website or reach out via our social media channels' },
        { question: 'How can I track the progress of a project?', answer: 'You can track project progress through our project management system, which allows you to view all phases and tasks of the project.' },
        { question: 'Is SkillHubProjects free to use?', answer: 'Yes, SkillHubProjects is completely free for users. There are no hidden fees or charges.' },
        { question: 'Can I collaborate with others on projects?', answer: 'Yes, SkillHubProjects encourages collaboration. You can team up with others to work on larger projects or share knowledge.' },
        { question: 'Do I need prior experience to join a project?', answer: 'No, SkillHubProjects offers opportunities for both beginners and experienced professionals. You can filter projects based on your skill level.' },
        { question: 'Are there any deadlines for project completion?', answer: 'Yes, each project has a set deadline. However, you will be able to view these deadlines before applying, so you can choose projects that fit your schedule.' },
        { question: 'What happens after I complete a project?', answer: 'Upon successful completion of a project, you will receive recognition and feedback from the project owner. This can be used to enhance your portfolio or resume.' },

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
.faq-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color:rgba(255, 255, 255, 0.85);

}
.faq-title {
  font-size: 2rem;
  font-weight: bold;
  color: #01bdd4;
  margin-bottom: 20px;
  text-align: left;
}

.faq-item {
  margin-bottom: 20px;
  border: 1px solid #8450bc;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(45deg, #01bdd4, #8450bc);
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

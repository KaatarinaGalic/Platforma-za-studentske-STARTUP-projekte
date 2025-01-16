<template>
  <v-footer
    color="black"
    class="white--text pt-8 pb-4 full-width-footer"
  >
    <v-container fluid>
      <!-- Gornji dio s linkovima na društvene mreže -->
      <v-row justify="center" class="mb-4">
        <v-btn icon href="https://www.facebook.com/fpmoz.ba/?locale=hr_HR" class="mx-2" target="_blank">
          <v-icon color="#3b5998">mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon href="https://www.instagram.com/fpmoz.mostar/" class="mx-2" target="_blank">
          <v-icon color="#E4405F">mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon href="https://www.youtube.com/channel/UCxaAFKZCOMqXRUtBsfbgaCQ" class="mx-2" target="_blank">
          <v-icon color="#FF0000">mdi-youtube</v-icon>
        </v-btn>
        <v-btn icon href="https://ba.linkedin.com/in/faculty-of-science-and-education-university-of-mostar-841530213" class="mx-2" target="_blank">
          <v-icon color="#0A66C2">mdi-linkedin</v-icon>
        </v-btn>
      </v-row>

      <!-- Srednji dio s navigacijom -->
      <v-row justify="center" class="mb-4">
        <v-col cols="auto">
          <v-btn text class="white--text" href="#about">
            about
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn text class="white--text" href="#contact">
            contact
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn text class="white--text" @click="showTermsDialog">
            terms of use
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn text class="white--text" @click="showPrivacyDialog">
            privacy policy
          </v-btn>
        </v-col>
      </v-row>

      <!-- Donji dio s kopirajtom -->
      <v-row justify="center">
        <p>© 2024 SkillHubProjects. All rights reserved.</p>
      </v-row>

      <!-- Iskočni prozor za Terms of Use -->
      <v-dialog v-model="termsDialog" max-width="600px">
        <v-card>
          <v-card-title class="text-h6 text-center">Terms of Use</v-card-title>
          <v-card-text class="text-center" style="line-height: 1.5;">
            <p><strong>By accessing this website, you agree to the following terms:</strong></p>
            <p><strong>Use:</strong> You may use the site only for lawful purposes. Any activity that may harm others is prohibited.</p>
            <p><strong>Intellectual Property:</strong> All content is protected by copyright. You may not use it without our permission.</p>
            <p><strong>Limitation of Liability:</strong> We are not responsible for any damages or losses that may arise from using this site. Use of the site is at your own risk.</p>
            <p><strong>Changes:</strong> We reserve the right to modify these terms. Please check the terms regularly.</p>
            <p><strong>For additional information, please contact our support.</strong></p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="closeTermsDialog">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Iskočni prozor za Privacy Policy -->
      <v-dialog v-model="privacyDialog" max-width="600px">
        <v-card>
          <v-card-title class="text-h6 text-center">Privacy Policy</v-card-title>
          <v-card-text class="text-center" style="line-height: 1.5;">
            <p><strong>At SkillHubProjects, your privacy is important to us.</strong> This privacy policy explains how we collect, use, and protect your personal data.</p>
            <p><strong>Information We Collect:</strong> We collect information when you register, submit inquiries, or use our site. We use this information to improve our services, communicate with you, and analyze site usage.</p>
            <p><strong>Use of Information:</strong> We do not share your data with third parties without your explicit consent. We maintain high security standards to ensure your privacy and protect your data from unauthorized access, loss, or misuse.</p>
            <p><strong>Contact:</strong> For more information, feel free to contact us through our contact details.</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="closePrivacyDialog">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-footer>
</template>

<script setup>
import { ref } from 'vue';

const privacyDialog = ref(false);
const termsDialog = ref(false);

function showPrivacyDialog() {
  privacyDialog.value = true;
}

function closePrivacyDialog() {
  privacyDialog.value = false;
}

function showTermsDialog() {
  termsDialog.value = true;
}

function closeTermsDialog() {
  termsDialog.value = false;
}
</script>

<style scoped>
/* Stilovi za footer */
.full-width-footer {
  background-color: #0d0d0d;
  width: 100%;
}

.v-btn {
  margin: 0 5px;
}

.v-btn:hover .v-icon {
  transform: scale(1.1);
}

.v-card {
  background-color: #1e1e1e;
}

.v-card-text p {
  margin-bottom: 10px;
}
</style>

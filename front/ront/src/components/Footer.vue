<template>
  <v-footer
    color="black"
    class="white--text pt-8 pb-4 full-width-footer"
  >
    <v-container fluid>
      <!-- Društvene mreže -->
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
          <v-btn text class="white--text" href="about">
            O nama
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn text class="white--text" href="contact">
            Kontakt
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn text class="white--text" @click="showTermsDialog">
            Uvjeti korištenja
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn text class="white--text" @click="showPrivacyDialog">
            Pravila privatnosti
          </v-btn>
        </v-col>
      </v-row>

      <!-- Donji dio s kopirajtom -->
      <v-row justify="center">
        <p>© 2025 SummitVision. Sva prava pridržana.</p>
      </v-row>

      <!-- Iskočni prozor za Uvjeti korištenja -->
      <v-dialog v-model="termsDialog" max-width="600px">
        <v-card>
          <v-card-title class="text-h6 text-center">Uvjeti korištenja</v-card-title>
          <v-card-text class="text-center" style="line-height: 1.5;">
            <strong>Pristupom web stranici SummitVision prihvaćate sljedeće uvjete:</strong><br>
            <strong>Upotreba:</strong> Web stranicu smijete koristiti isključivo u zakonite svrhe. Svaka aktivnost koja može nanijeti štetu drugima je zabranjena.<br>
            <strong>Intelektualno vlasništvo:</strong> Sav sadržaj zaštićen je autorskim pravima. Ne smijete ga koristiti bez našeg dopuštenja.<br>
            <strong>Ograničenje odgovornosti:</strong> Ne odgovaramo za štetu ili gubitke koji mogu nastati korištenjem ove stranice. Korištenje stranice je na vlastitu odgovornost.<br>
            <strong>Promjene:</strong> Zadržavamo pravo izmjene ovih uvjeta. Molimo redovito provjeravajte uvjete.<br>
            <strong>Za dodatne informacije kontaktirajte našu podršku.</strong>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="closeTermsDialog">Zatvori</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Iskočni prozor za Pravila privatnosti -->
      <v-dialog v-model="privacyDialog" max-width="600px">
        <v-card>
          <v-card-title class="text-h6 text-center">Pravila privatnosti</v-card-title>
          <v-card-text class="text-center" style="line-height: 1.5;">
            <strong>U SummitVisionu vaša privatnost nam je važna.</strong> Ova pravila privatnosti objašnjavaju kako prikupljamo, koristimo i štitimo vaše osobne podatke.<br>
            <strong>Informacije koje prikupljamo:</strong> Prikupljamo informacije kada se registrirate, pošaljete upite ili koristite našu stranicu. Ove informacije koristimo za poboljšanje naših usluga, komunikaciju s vama i analizu korištenja stranice.<br>
            <strong>Upotreba informacija:</strong> Vaše podatke ne dijelimo s trećim stranama bez vašeg izričitog pristanka. Održavamo visoke standarde sigurnosti kako bismo osigurali vašu privatnost i zaštitili vaše podatke od neovlaštenog pristupa, gubitka ili zloupotrebe.<br>
            <strong>Kontakt:</strong> Za više informacija slobodno nas kontaktirajte putem naših kontakt podataka.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="closePrivacyDialog">Zatvori</v-btn>
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

<style >
.v-btn {
  font-style: italic;
}

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

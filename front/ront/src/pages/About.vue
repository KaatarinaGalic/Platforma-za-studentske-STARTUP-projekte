<template>
  <v-container class="about">
    <!-- About Us Tekst -->
    <v-row>
      <v-col cols="12">
        <v-card
          class="mx-auto my-4 py-4 px-6"
          max-width="1000"
          rounded="0"
          flat
          style="background-color: transparent;"
        >
          <v-card-text class="text-center" style="background-color: transparent;">
            <v-row>
              <v-col>
                <h1 class="display-1 gradient-text">Dobrodošli na SummitVision</h1>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <p>
                  Naša platforma, SummitVision, okuplja studente iz različitih područja, omogućujući im rad na inovativnim projektima i ostvarenje profesionalnih i akademskih ciljeva. Bez obzira jeste li iskusni student s bogatim iskustvom ili tek započinjete svoje putovanje, SummitVision nudi prilike prilagođene vašim vještinama i ambicijama.
                  <br><br>
                  Pružamo podršku i resurse koji olakšavaju razvoj vaših ideja, omogućujući vam povezivanje s mentorima i unapređenje znanja. Naša platforma osmišljena je kako bi vaše ideje postale stvarnost.
                  <br><br>
                  SummitVision je više od platforme – to je zajednica koja potiče rast, inovaciju i suradnju. Pridružite nam se i postanite dio mreže studenata koji svakodnevno ostvaruju svoje ideje i stvaraju novu vrijednost. Na SummitVision platformi vaše vještine i ambicije dolaze do izražaja, a mogućnosti za napredak su neograničene.
                </p>
              </v-col>
            </v-row>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Our Team odjeljak -->

    <v-row class="my-4">
      <v-col cols="12">
        <h2 class="text-center gradient-text">Organizirajte sastanak s mentorom po vašem izboru.</h2>
      </v-col>
    </v-row>

    <v-row>
      <!-- Kartica za Marko Marić -->
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto d-flex flex-column align-center"
          max-width="434"
          rounded="0"
        >
          <v-avatar
            color="grey"
            rounded="50"
            size="150"
            class="my-4"
          >
            <v-img src="https://ocdn.eu/pulscms-transforms/1/ezNk9kqTURBXy8yMTYwM2E2ZTM5ZmQ2NTJmZTBkMmYwMmU4OGEyMjMyZi5qcGVnkZMCzQHCAN4AAqEwBaExAg" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6">Marko Marić</v-list-item-title>
            <v-list-item-subtitle>Mrežni inženjer</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- Kartica za Ana Kovačić -->
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto d-flex flex-column align-center"
          max-width="434"
          rounded="0"
        >
          <v-avatar
            color="grey"
            rounded="50"
            size="150"
            class="my-4"
          >
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukCEmoaPB5JE4I5YzftXppYttPq4eQMgEHYGsFhuJmwmIWXobwqCPjf_FU1zYMWyEmrc&usqp=CAU" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6">Ana Kovačić</v-list-item-title>
            <v-list-item-subtitle>Dizajner proizvoda</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- Kartica za Ivan Horvat -->
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto d-flex flex-column align-center"
          max-width="434"
          rounded="0"
        >
          <v-avatar
            color="grey"
            rounded="50"
            size="150"
            class="my-4"
          >
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9tHZTmaIjhggewIXlH2uFvtIDXWJeX1fOajU1vi8Q1uAoINB7VMaDzoC3d8hEuSXNr8s&usqp=CAU" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6">Ivan Horvat</v-list-item-title>
            <v-list-item-subtitle>Voditelj projekta</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <!-- Kartica za Marija Babić -->
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto d-flex flex-column align-center"
          max-width="434"
          rounded="0"
        >
          <v-avatar
            color="grey"
            rounded="50"
            size="150"
            class="my-4"
          >
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTeZp-apCQH1b-kvDNY8iCIhUy9LicLSFg4aAyGUElJfSikyxWTy7i5veZ4ulF0bV02kQ&usqp=CAU" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6">Marija Babić</v-list-item-title>
            <v-list-item-subtitle>Razvojni programer</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- Kartica za Ivana Šarić -->
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto d-flex flex-column align-center"
          max-width="434"
          rounded="0"
        >
          <v-avatar
            color="grey"
            rounded="50"
            size="150"
            class="my-4"
          >
            <v-img src="https://www.shutterstock.com/image-photo/photo-lovely-cheerful-adorable-successful-260nw-2493951355.jpg" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6">Ivana Šarić</v-list-item-title>
            <v-list-item-subtitle>UX/UI dizajner</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- Kartica za Luka Kovačić -->
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto d-flex flex-column align-center"
          max-width="434"
          rounded="0"
        >
          <v-avatar
            color="grey"
            rounded="50"
            size="150"
            class="my-4"
          >
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKw8LAQ4d1Ji4OlN8GdjyEuNsyLw8bz469q9AbfSAYr0bZgROZQ7nfTdW7AhtmZIFpXxk&usqp=CAU" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6">Luka Kovačić</v-list-item-title>
            <v-list-item-subtitle>Mrežni inženjer</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <!-- Kartica za Lucija Novak -->
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto d-flex flex-column align-center"
          max-width="434"
          rounded="0"
        >
          <v-avatar
            color="grey"
            rounded="50"
            size="150"
            class="my-4"
          >
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXU60tEta0uUsAzw6aAhmJqUfEZGz0EX8_NNoTUj2QJk5R6NFbjehb3PTeCnU-fTiUFiA&usqp=CAU" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6">Lucija Novak</v-list-item-title>
            <v-list-item-subtitle>Strateg za sadržaj</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- Kartica za Tomislav Jurić -->
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto d-flex flex-column align-center"
          max-width="434"
          rounded="0"
        >
          <v-avatar
            color="grey"
            rounded="50"
            size="150"
            class="my-4"
          >
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-knBUQGbzvnKzyEs5xLOQdhm22z3yamHVrA&s" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6">Tomislav Jurić</v-list-item-title>
            <v-list-item-subtitle>Stručnjak za digitalni marketing</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- Kartica za Jelena Marković -->
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto d-flex flex-column align-center"
          max-width="434"
          rounded="0"
        >
          <v-avatar
            color="grey"
            rounded="50"
            size="150"
            class="my-4"
          >
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69ntu6xKKa7qezBmsn6C_jKx8L4SdQ663Ft8SZVuAR-FchYASsUT2HrvRxDCLC69BRDA&usqp=CAU" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6">Jelena Marković</v-list-item-title>
            <v-list-item-subtitle>Analitičar podataka</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <!-- Kartica za Nikola Petrović -->
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto d-flex flex-column align-center"
          max-width="434"
          rounded="0"
        >
          <v-avatar
            color="grey"
            rounded="50"
            size="150"
            class="my-4"
          >
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpGCYyZtOeDXE3pHliaEEL8i-CT2dJxuQcATtSNDfiJDnH-SRl8-ifpx2E6HF9hkHZHJ8&usqp=CAU" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6">Nikola Petrović</v-list-item-title>
            <v-list-item-subtitle>Stručnjak za korisničku podršku</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

  </v-container>

</template>


<style scoped>
.white--text {
  color: white;
}
p {
  font-size: 1.3rem;
}

.gradient-text {
  font-family:'Keania One',sans-serif;
  background: -webkit-linear-gradient(#00ffcc,#008080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: bold;
}


</style>

<template>
  <v-container class="about">
    <!-- O nama tekst -->
    <v-row>
      <v-col cols="12">
        <v-card
          class="mx-auto my-4 py-4 px-6"
          max-width="1000"
          rounded="0"
          flat
          style="background-color: transparent;"
        >
          <v-card-text class="text-center" style="background-color: transparent;" >
            <v-row>
              <v-col>
                <h1 class="display-1 gradient-text">DOBRODOŠLI NA SUMMITVISION</h1>
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

    <!-- Mentori -->

    <v-row class="my-4">
      <v-col cols="12">
        <h2 class="text-center gradient-text">Organizirajte sastanak s mentorom po vašem izboru.</h2>
      </v-col>
    </v-row>

    <v-row>
      <!-- Marko Marić -->
      <v-col cols="12" sm="4">
        <v-card class="mx-auto d-flex flex-column align-center" max-width="434" rounded="0">
          <v-avatar color="grey" rounded="50" size="150" class="my-4">
            <v-img src="https://ocdn.eu/pulscms-transforms/1/ezNk9kqTURBXy8yMTYwM2E2ZTM5ZmQ2NTJmZTBkMmYwMmU4OGEyMjMyZi5qcGVnkZMCzQHCAN4AAqEwBaExAg" cover />
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6" @click="dialogMarko = true" style="cursor: pointer;">
              Marko Marić
            </v-list-item-title>
            <v-list-item-subtitle>Mrežni inženjer</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- Ana Kovačić -->
      <v-col cols="12" sm="4">
        <v-card class="mx-auto d-flex flex-column align-center" max-width="434" rounded="0">
          <v-avatar color="grey" rounded="50" size="150" class="my-4">
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukCEmoaPB5JE4I5YzftXppYttPq4eQMgEHYGsFhuJmwmIWXobwqCPjf_FU1zYMWyEmrc&usqp=CAU" cover />
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6" @click="dialogAna = true" style="cursor: pointer;">
              Ana Kovačić
            </v-list-item-title>
            <v-list-item-subtitle>Dizajner proizvoda</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- Ivan Horvat -->
      <v-col cols="12" sm="4">
        <v-card class="mx-auto d-flex flex-column align-center" max-width="434" rounded="0">
          <v-avatar color="grey" rounded="50" size="150" class="my-4">
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9tHZTmaIjhggewIXlH2uFvtIDXWJeX1fOajU1vi8Q1uAoINB7VMaDzoC3d8hEuSXNr8s&usqp=CAU" cover />
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6" @click="dialogIvan = true" style="cursor: pointer;">
              Ivan Horvat
            </v-list-item-title>
            <v-list-item-subtitle>Voditelj projekta</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <!-- Marija Babić -->
      <v-col cols="12" sm="4">
        <v-card class="mx-auto d-flex flex-column align-center" max-width="434" rounded="0">
          <v-avatar color="grey" rounded="50" size="150" class="my-4">
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTeZp-apCQH1b-kvDNY8iCIhUy9LicLSFg4aAyGUElJfSikyxWTy7i5veZ4ulF0bV02kQ&usqp=CAU" cover />
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6" @click="dialogMarija = true" style="cursor: pointer;">
              Marija Babić
            </v-list-item-title>
            <v-list-item-subtitle>Razvojni programer</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- Ivana Šarić -->
      <v-col cols="12" sm="4">
        <v-card class="mx-auto d-flex flex-column align-center" max-width="434" rounded="0">
          <v-avatar color="grey" rounded="50" size="150" class="my-4">
            <v-img src="https://www.shutterstock.com/image-photo/photo-lovely-cheerful-adorable-successful-260nw-2493951355.jpg" cover />
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6" @click="dialogIvana = true" style="cursor: pointer;">
              Ivana Šarić
            </v-list-item-title>
            <v-list-item-subtitle>UX/UI dizajner</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- Luka Kovačić -->
      <v-col cols="12" sm="4">
        <v-card class="mx-auto d-flex flex-column align-center" max-width="434" rounded="0">
          <v-avatar color="grey" rounded="50" size="150" class="my-4">
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKw8LAQ4d1Ji4OlN8GdjyEuNsyLw8bz469q9AbfSAYr0bZgROZQ7nfTdW7AhtmZIFpXxk&usqp=CAU" cover />
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6" @click="dialogLuka = true" style="cursor: pointer;">
              Luka Kovačić
            </v-list-item-title>
            <v-list-item-subtitle>Mrežni inženjer</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <!-- Lucija Novak -->
      <v-col cols="12" sm="4">
        <v-card class="mx-auto d-flex flex-column align-center" max-width="434" rounded="0">
          <v-avatar color="grey" rounded="50" size="150" class="my-4">
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXU60tEta0uUsAzw6aAhmJqUfEZGz0EX8_NNoTUj2QJk5R6NFbjehb3PTeCnU-fTiUFiA&usqp=CAU" cover />
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6" @click="dialogLucija = true" style="cursor: pointer;">
              Lucija Novak
            </v-list-item-title>
            <v-list-item-subtitle>Strateg za sadržaj</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- Tomislav Jurić -->
      <v-col cols="12" sm="4">
        <v-card class="mx-auto d-flex flex-column align-center" max-width="434" rounded="0">
          <v-avatar color="grey" rounded="50" size="150" class="my-4">
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-knBUQGbzvnKzyEs5xLOQdhm22z3yamHVrA&s" cover />
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6" @click="dialogTomislav = true" style="cursor: pointer;">
              Tomislav Jurić
            </v-list-item-title>
            <v-list-item-subtitle>Stručnjak za digitalni marketing</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- Jelena Marković -->
      <v-col cols="12" sm="4">
        <v-card class="mx-auto d-flex flex-column align-center" max-width="434" rounded="0">
          <v-avatar color="grey" rounded="50" size="150" class="my-4">
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69ntu6xKKa7qezBmsn6C_jKx8L4SdQ663Ft8SZVuAR-FchYASsUT2HrvRxDCLC69BRDA&usqp=CAU" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6" @click="dialogJelena = true" style="cursor: pointer;">
              Jelena Marković
            </v-list-item-title>
            <v-list-item-subtitle>Analitičar podataka</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- Nikola Petrović -->
      <v-col cols="12" sm="4">
        <v-card class="mx-auto d-flex flex-column align-center" max-width="434" rounded="0">
          <v-avatar color="grey" rounded="50" size="150" class="my-4">
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpGCYyZtOeDXE3pHliaEEL8i-CT2dJxuQcATtSNDfiJDnH-SRl8-ifpx2E6HF9hkHZHJ8&usqp=CAU" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6" @click="dialogNikola = true" style="cursor: pointer;">
              Nikola Petrović
            </v-list-item-title>
            <v-list-item-subtitle>Stručnjak za korisničku podršku</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>

    </v-row>

    <!-- Pop-up dialogs -->
    <v-dialog v-model="dialogMarko" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Marko Marić</span>
        </v-card-title>
        <v-card-text>
          Marko je mrežni inženjer s više od 10 godina iskustva u postavljanju i optimizaciji mrežnih infrastruktura. Njegovo stručno znanje u tehnologijama poput Cisco i Juniper omogućuje mu da dizajnira i održava složene mreže. Kao mentor na SummitVision platformi, Marko je tu da pomogne studentima i mladim stručnjacima u razvijanju vještina u području mrežnih tehnologija. Ako želite naučiti kako optimizirati mrežne sustave, Marko je pravi mentor za vas.
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary" @click="dialogMarko = false">Zatvori</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogAna" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Ana Kovačić</span>
        </v-card-title>
        <v-card-text>
          Ana je talentirani dizajner proizvoda s iskustvom u stvaranju modernih i intuitivnih sučelja. Kao mentor na SummitVision platformi, bit će vam podrška u razvoju vaših ideja i pomoći vam da kreirate proizvode koji zadovoljavaju potrebe korisnika. Ana će vas voditi kroz proces dizajniranja i razvijanja proizvoda, osiguravajući da vaša vizija postane stvarnost.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="dialogAna = false">Zatvori</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogIvan" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Ivan Horvat</span>
        </v-card-title>
        <v-card-text>
          Ivan je iskusni voditelj projekata specijaliziran za upravljanje timovima i vođenje tehnoloških projekata. Kao mentor na SummitVision platformi, pomoći će vam u organizaciji i vođenju vaših projekata, osiguravajući učinkovitu suradnju i postizanje ciljeva. Ivan je pravi izbor za svakog studenta koji želi naučiti kako uspješno upravljati projektima i timovima.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="dialogIvan = false">Zatvori</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogMarija" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Marija Babić</span>
        </v-card-title>
        <v-card-text>
          Marija je iskusna razvojna programerka koja se specijalizira za razvoj softverskih rješenja. Na SummitVision platformi, pomoći će vam u razvoju funkcionalnosti za vaše projekte, pružajući stručnost u programiranju i implementaciji inovativnih rješenja. Ako želite poboljšati svoje vještine programiranja ili razviti konkretne funkcionalnosti, Marija je mentor koji će vam pomoći da postignete svoje ciljeve.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="dialogMarija = false">Zatvori</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogIvana" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Ivana Šarić</span>
        </v-card-title>
        <v-card-text>
          Ivana je UX/UI dizajnerica koja se specijalizira za dizajn sučelja koja osiguravaju korisnicima intuitivno i besprijekorno iskustvo. Na SummitVision platformi, Ivana će vam pomoći u dizajniranju aplikacija koje su vizualno atraktivne i jednostavne za korištenje. Ako želite poboljšati korisničko iskustvo i izraditi sučelje koje će zadovoljiti vaše korisnike, Ivana je mentor koja će vam pomoći da ostvarite svoj cilj.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="dialogIvana = false">Zatvori</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogLuka" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Luka Kovačić</span>
        </v-card-title>
        <v-card-text>
          Luka je mrežni inženjer s bogatim iskustvom u optimizaciji mreža i implementaciji naprednih mrežnih rješenja. Na SummitVision platformi, Luka će vam pomoći u optimizaciji vaše mreže, poboljšanju performansi i sigurnosti. Ako želite osigurati da vaša mrežna infrastruktura bude brza, sigurna i učinkovita, Luka je mentor koji vam može pomoći da postignete te ciljeve.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="dialogLuka = false">Zatvori</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogLucija" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Lucija Novak</span>
        </v-card-title>
        <v-card-text>
          Lucija je stručnjakinja za strategiju sadržaja koja će vam pomoći u stvaranju i vođenju sadržajnih planova za vaš projekt. Na SummitVision platformi, Lucija nudi strategije koje će vašem projektu omogućiti uspješno kreiranje sadržaja, angažman korisnika i jačanje online prisutnosti. Ako tražite savjete o tome kako razviti učinkovit sadržaj koji će privući i zadržati vašu publiku, Lucija je mentor koji će vas voditi kroz cijeli proces.
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary" @click="dialogLucija = false">Zatvori</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogTomislav" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Tomislav Jurić</span>
        </v-card-title>
        <v-card-text>
          Tomislav je stručnjak za digitalni marketing s iskustvom u analiziranju podataka i razvijanju marketinških strategija. Na SummitVision platformi, Tomislav će vam pomoći u optimizaciji vaših marketinških kampanja i razvoju strategija koje mogu poboljšati vašu online prisutnost. Ako tražite savjete kako učinkovito koristiti digitalne alate za promociju vašeg projekta i povećanje dosega, Tomislav je mentor koji će vam pomoći u svakom koraku.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="dialogTomislav = false">Zatvori</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogJelena" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Jelena Marković</span>
        </v-card-title>
        <v-card-text>
          Jelena je iskusna rukovoditeljica proizvoda koja se specijalizira za upravljanje svim fazama razvoja proizvoda, od planiranja do finalne isporuke. Na SummitVision platformi, Jelena će vam pomoći u vođenju vaših projekata i osigurati da svaki korak u razvoju proizvoda bude učinkovit i usmjeren prema vašim ciljevima. Ako tražite mentora koji će vam pomoći u upravljanju proizvodnim ciklusom i optimizaciji procesa, Jelena je pravi izbor za vas.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="dialogJelena = false">Zatvori</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogNikola" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Nikola Petrović</span>
        </v-card-title>
        <v-card-text>
          Nikola je stručnjak za korisničku podršku s dugogodišnjim iskustvom u pružanju kvalitetnih usluga korisnicima. Na SummitVision platformi, Nikola će vam pomoći u rješavanju bilo kakvih izazova vezanih uz korisničku podršku, pružanju savjeta za poboljšanje korisničkog iskustva i optimizaciji komunikacije s korisnicima. Ako tražite mentora koji će vas voditi kroz procese pružanja podrške i izgradnje odnosa s korisnicima, Nikola je pravi izbor za vas.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="dialogNikola = false">Zatvori</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialogMarko: false,
      dialogAna: false,
      dialogIvan: false,
      dialogMarija: false,
      dialogIvana: false,
      dialogLuka: false,
      dialogLucija: false,
      dialogTomislav: false,
      dialogJelena: false,
      dialogNikola: false,
    };
  },
};
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Keania+One&display=swap');
.v-container {
  max-width: 100% !important;
}
.text-center {
  text-align: center;
}

.white--text {
  color: white;
}

p {
  font-size: 1.3rem;
}

.gradient-text {
  font-family:'Keania One', sans-serif !important;
  background: -webkit-linear-gradient(#00ffcc, #008080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
}
.v-card{
  background: linear-gradient(90deg, #060e33 0%, #1d3168 100%);

}

</style>

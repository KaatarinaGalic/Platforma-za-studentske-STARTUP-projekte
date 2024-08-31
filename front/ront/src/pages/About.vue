<template>
  <v-container>
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
                <h1 class="display-1 gradient-text">Welcome to SkillHubProjects</h1>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <p>
                  Our platform brings together professionals from various industries, enabling them to work on innovative projects and achieve their professional goals. Whether you are an experienced expert with a wealth of knowledge or someone just starting your career, at SkillHubProjects, you’ll find opportunities that match your skills and ambitions.
                  <br><br>
                  Our mission is to connect talented individuals and teams to create something extraordinary together. We believe that the power of collaboration is the key to success, which is why we provide a space where creativity, knowledge, and passion come to life. Our community allows you not only to expand your professional horizons but also to build valuable connections and learn from others.
                  <br><br>
                  At SkillHubProjects, everyone has the opportunity to bring their ideas to life, no matter how ambitious they are. Our platform offers easy-to-use tools for connecting with clients, managing projects, and tracking your progress, allowing you to focus entirely on what you do best. Additionally, we offer resources and support to help you develop your skills and advance your career.
                  <br><br>
                  SkillHubProjects is more than just a platform—it’s a community that fosters growth, innovation, and collaboration. Join us and become part of a network of professionals who create new value and bring ideas to life every day. At SkillHubProjects, your ideas and skills take center stage, and the possibilities for advancement are endless.
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
        <h2 class="text-center gradient-text">Our Team</h2>
      </v-col>
    </v-row>

    <v-row>
      <!-- Kartica za Marcus Obrien -->
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto d-flex flex-column align-center"
          max-width="434"
          rounded="0"
        >
          <v-avatar
            color="grey"
            rounded="0"
            size="150"
            class="my-4"
          >
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6">Marcus Obrien</v-list-item-title>
            <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- Kartica za Anna Rich -->
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto d-flex flex-column align-center"
          max-width="434"
          rounded="0"
        >
          <v-avatar
            color="grey"
            rounded="0"
            size="150"
            class="my-4"
          >
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukCEmoaPB5JE4I5YzftXppYttPq4eQMgEHYGsFhuJmwmIWXobwqCPjf_FU1zYMWyEmrc&usqp=CAU" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6">Anna Rich</v-list-item-title>
            <v-list-item-subtitle>Product Designer</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- Kartica za John Smith -->
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto d-flex flex-column align-center"
          max-width="434"
          rounded="0"
        >
          <v-avatar
            color="grey"
            rounded="0"
            size="150"
            class="my-4"
          >
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9tHZTmaIjhggewIXlH2uFvtIDXWJeX1fOajU1vi8Q1uAoINB7VMaDzoC3d8hEuSXNr8s&usqp=CAU" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6">John Smith</v-list-item-title>
            <v-list-item-subtitle>Project Manager</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <!-- Kartica za Jane Doe -->
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto d-flex flex-column align-center"
          max-width="434"
          rounded="0"
        >
          <v-avatar
            color="grey"
            rounded="0"
            size="150"
            class="my-4"
          >
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTeZp-apCQH1b-kvDNY8iCIhUy9LicLSFg4aAyGUElJfSikyxWTy7i5veZ4ulF0bV02kQ&usqp=CAU" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6">Jane Doe</v-list-item-title>
            <v-list-item-subtitle>Software Developer</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- Kartica za Emily Davis -->
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto d-flex flex-column align-center"
          max-width="434"
          rounded="0"
        >
          <v-avatar
            color="grey"
            rounded="0"
            size="150"
            class="my-4"
          >
            <v-img src="https://www.shutterstock.com/image-photo/photo-lovely-cheerful-adorable-successful-260nw-2493951355.jpg" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6">Emily Davis</v-list-item-title>
            <v-list-item-subtitle>UX/UI Designer</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- Kartica za Michael Brown -->
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto d-flex flex-column align-center"
          max-width="434"
          rounded="0"
        >
          <v-avatar
            color="grey"
            rounded="0"
            size="150"
            class="my-4"
          >
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKw8LAQ4d1Ji4OlN8GdjyEuNsyLw8bz469q9AbfSAYr0bZgROZQ7nfTdW7AhtmZIFpXxk&usqp=CAU" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6">Michael Brown</v-list-item-title>
            <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <!-- Kartica za Sarah Wilson -->
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto d-flex flex-column align-center"
          max-width="434"
          rounded="0"
        >
          <v-avatar
            color="grey"
            rounded="0"
            size="150"
            class="my-4"
          >
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXU60tEta0uUsAzw6aAhmJqUfEZGz0EX8_NNoTUj2QJk5R6NFbjehb3PTeCnU-fTiUFiA&usqp=CAU" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6">Sarah Wilson</v-list-item-title>
            <v-list-item-subtitle>Content Strategist</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- Kartica za David Lee -->
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto d-flex flex-column align-center"
          max-width="434"
          rounded="0"
        >
          <v-avatar
            color="grey"
            rounded="0"
            size="150"
            class="my-4"
          >
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCHRmWBEwkz0a7PXcdvhJw95-xFoLYMrXftLyb4Ed0Ut0ykEOYgtgyHMjb1p7WYeG80g&usqp=CAU" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6">David Lee</v-list-item-title>
            <v-list-item-subtitle>Digital Marketing Specialist</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- Kartica za Olivia Martinez -->
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto d-flex flex-column align-center"
          max-width="434"
          rounded="0"
        >
          <v-avatar
            color="grey"
            rounded="0"
            size="150"
            class="my-4"
          >
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69ntu6xKKa7qezBmsn6C_jKx8L4SdQ663Ft8SZVuAR-FchYASsUT2HrvRxDCLC69BRDA&usqp=CAU" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6">Olivia Martinez</v-list-item-title>
            <v-list-item-subtitle>Data Analyst</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <!-- Kartica za Ryan Taylor -->
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto d-flex flex-column align-center"
          max-width="434"
          rounded="0"
        >
          <v-avatar
            color="grey"
            rounded="0"
            size="150"
            class="my-4"
          >
            <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpGCYyZtOeDXE3pHliaEEL8i-CT2dJxuQcATtSNDfiJDnH-SRl8-ifpx2E6HF9hkHZHJ8&usqp=CAU" cover></v-img>
          </v-avatar>

          <v-list-item class="text-center text-white">
            <v-list-item-title class="text-h6">Ryan Taylor</v-list-item-title>
            <v-list-item-subtitle>Customer Support Specialist</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

  </v-container>



</template>

<script setup>


</script>

<style scoped>
.white--text {
  color: white;
}

.gradient-text {
  background: linear-gradient(90deg, #00c6ff 0%, #ff00c6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: bold;
}
</style>

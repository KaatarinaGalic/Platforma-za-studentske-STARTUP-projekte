<template>
  <v-carousel
    height="50%"
    show-arrows="hover"
    cycle
    hide-delimiter-background
    @change="restoreScrollPosition"
  >
    <v-carousel-item
      v-for="(item, index) in paginatedArticles"
      :key="index"
    >
      <v-container>
        <v-row
          v-for="(articleGroup, rowIndex) in item"
          :key="rowIndex"
          align="center"
          justify="center"
        >
          <v-col
            v-for="(article, colIndex) in articleGroup"
            :key="colIndex"
            cols="12"
            sm="4"
          >
            <v-card>
              <v-img
                :src="article.urlToImage"
                height="150px"
              ></v-img>
              <v-card-title>{{ article.title }}</v-card-title>
              <v-card-subtitle>{{ article.publishedAt }}</v-card-subtitle>
              <!--<v-card-text>{{ article.description }}</v-card-text>-->
              <v-card-actions>
                <v-btn :href="article.url" target="_blank" color="primary">
                  Read More
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const articles = ref([]);
const articlesPerPage = 3;


let currentScrollY = window.scrollY;

const restoreScrollPosition = () => {
  window.scrollTo({ top: currentScrollY, behavior: 'smooth' });
};

onMounted(async () => {
  try {
    const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/technology.json', {
      params: {
        'api-key': 'lgzqwFTgdiLvBMQnd2zUTGVs4AEdHLUp'
        }
    });


    articles.value = response.data.results.map(article => ({
      title: article.title,
      url: article.url,
      //description: article.abstract,
      publishedAt: article.published_date,

      urlToImage: article.multimedia && article.multimedia.length
        ? article.multimedia[0].url
        : null
    }));
  } catch (error) {
    console.error('Error fetching NYT technology articles:', error);
  }
});

const paginatedArticles = computed(() => {
  const pages = [];
  for (let i = 0; i < articles.value.length; i += articlesPerPage * 3) {
    pages.push(
      Array.from({ length: 3 }, (_, j) =>
        articles.value.slice(i + j * articlesPerPage, i + (j + 1) * articlesPerPage)
      )
    );
  }
  return pages;
});
</script>

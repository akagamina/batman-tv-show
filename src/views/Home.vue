<template>
  <b-container class="movies-container" v-if="batmanShows">
    <div class="movies-body">
      <b-card
        v-for="(movie, index) in batmanShows"
        :key="index"
        :title="movie.show.name"
        :img-src="movie.show.image ? movie.show.image.original : movie.show.image.medium"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-2"
      >
        <div class="detail-button">
          <router-link
            :to="{name: 'about', params: { id : movie.show.id }}"
            class="btn btn-info"
          >Go to details</router-link>
        </div>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    this.getShowList();
  },
  methods: {
    ...mapActions(["getShowList"])
  },
  computed: {
    ...mapState({
      batmanShows: state => state.movieList.listArr
    })
  }
};
</script>

<style lang="scss">
.movies-container {
  .movies-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .card {
      margin-right: 8px;
      max-width: 21rem !important;
      img {
        height: 75%;
      }
      .card-body {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .detail-button {
        }
      }
    }
  }
}
</style>

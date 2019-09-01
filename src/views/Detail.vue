<template>
  <b-container class="detail-container" v-if="movieDetails">
    <div class="back-button">
      <router-link to="/">
        <i class="material-icons">keyboard_backspace</i>
      </router-link>
    </div>
    <div class="detail-body">
      <div class="img-item" v-if="movieDetails.image">
        <img :src="movieDetails.image ? movieDetails.image.original : movieDetails.image.medium" />
      </div>

      <div class="text-item">
        <div class="title">
          <h2 v-if="movieDetails.name">{{movieDetails.name}}</h2>
          <h5 v-if="movieDetails.premiered">({{ movieDetails.premiered.substring(0,4) }})</h5>
        </div>
        <div class="info">
          <h6
            v-if="movieDetails.language"
          >{{movieDetails.language}}/{{movieDetails.network ? movieDetails.network.country.name : 'Unknown'}}</h6>
        </div>
        <div class="summary" v-if="movieDetails.summary">
          <b>Summary:</b>
          <span v-html="movieDetails.summary"></span>
        </div>

        <div class="imdb" v-if="movieDetails.externals">
          <a :href="'https://www.imdb.com/title/' + movieDetails.externals.imdb" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="52"
              height="52"
              viewBox="0 0 26 26"
              style=" fill:#000000;"
            >
              <g id="surface1">
                <path
                  style=" "
                  d="M 3 7 C 1.300781 7 0 8.300781 0 10 L 0 17 C 0 18.699219 1.300781 20 3 20 L 23 20 C 24.699219 20 26 18.699219 26 17 L 26 10 C 26 8.300781 24.699219 7 23 7 Z M 4.09375 9.6875 L 5.8125 9.6875 L 5.8125 16.90625 L 4.09375 16.90625 Z M 6.6875 9.6875 L 8.90625 9.6875 L 9.5 13.09375 L 9.90625 9.6875 L 12.3125 9.6875 L 12.3125 16.90625 L 10.8125 16.90625 L 10.8125 12.90625 L 10.09375 16.90625 L 9 16.90625 L 8.3125 12.90625 L 8.3125 16.90625 L 6.6875 16.90625 Z M 13.1875 9.6875 L 15.1875 9.6875 C 16.386719 9.6875 16.601563 9.800781 17 10 C 17.300781 10.199219 17.5 10.59375 17.5 11.09375 L 17.5 15.40625 C 17.5 15.804688 17.300781 16.207031 17 16.40625 C 16.699219 16.605469 16.289063 16.8125 15.1875 16.8125 L 13.1875 16.8125 Z M 18 9.6875 L 19.8125 9.6875 L 19.8125 11.3125 C 20.011719 11.113281 20.5 10.8125 21 10.8125 C 21.5 10.8125 22.09375 11.210938 22.09375 11.8125 L 22.09375 16 C 22.09375 16.300781 21.988281 16.488281 21.6875 16.6875 C 21.488281 16.789063 21.304688 16.8125 20.90625 16.8125 C 20.507813 16.8125 19.886719 16.5 19.6875 16.5 C 19.585938 16.398438 19.5 16.90625 19.5 16.90625 L 18 16.90625 Z M 14.90625 10.8125 L 14.90625 15.59375 C 15.207031 15.59375 15.59375 15.613281 15.59375 15.3125 L 15.59375 11.09375 C 15.59375 10.792969 15.207031 10.8125 14.90625 10.8125 Z M 20.09375 11.6875 C 19.894531 11.6875 19.90625 11.800781 19.90625 12 L 19.90625 15.59375 C 19.90625 15.792969 19.992188 15.90625 20.09375 15.90625 C 20.292969 15.90625 20.3125 15.792969 20.3125 15.59375 L 20.3125 12 C 20.3125 11.800781 20.195313 11.6875 20.09375 11.6875 Z "
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  created() {
    let params = this.$route.params.id;
    this.getDetail(params);
  },
  methods: {
    ...mapActions(["getDetail"])
  },
  computed: {
    ...mapState({
      movieDetails: state => state.movieDetail.detailData
    })
  }
};
</script>

<style lang="scss">
.detail-container {
  .back-button {
    text-align: left;
    margin-bottom: 50px;
  }
  .detail-body {
    display: flex;

    .img-item {
      img {
        width: 400px;
      }
    }

    .text-item {
      text-align: left;
      padding-left: 15px;
      padding-right: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: 1px solid #dcdcdc;
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
      .title {
        h2 {
          color: #0010ff;
          margin: 0;
          display: inline-block;
        }
        h5 {
          margin: 0;
          display: inline-block;
        }
      }
    }
  }
}
</style>
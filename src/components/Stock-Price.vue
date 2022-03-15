<template>
  <div>
    <div class="my-4">
      <div class="position-relative overflow-hidden text-center bg-primary text-white">
        <div class="col-md-10 p-lg-5 p-sm-3 mx-auto my-5">
          <h2 class="font-weight-normal text-white">{{ORG}} (<span class="text-info">${{TICKER}}</span>)</h2>
          <p>All data comes from an API provided by <a href="https://finnhub.io/" target="_blank" rel="noopener" class="text-light" style="text-decoration: underline">Finnhub</a>, please consult your financial representative or personal accountant for advice before making any decisions. Rocket Downrange does not endorse any stock. 
          <hr color="white" />
          <div id="data">
            <iframe id="frames" frameborder="2" :src="FINN"></iframe>
            <ul id="info" class="list-group text-light text-left">
                <li class="list-group-item bg-primary"><strong>PRICE:</strong> ${{priceResults.c}}</li>
                <li class="list-group-item bg-primary"><strong>DELTA:</strong> {{priceResults.d}} ({{(priceResults.dp).toFixed(2)}}%)</li>
                <li class="list-group-item bg-primary"><strong>HIGH/LOW:</strong> {{priceResults.h}} / {{ priceResults.l}}</li>
                <li class="list-group-item bg-primary"><a :href="LINK" class="btn btn-outline-info d-block" target="_blank" rel="noopener">NASDAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var api_key = process.env.VUE_APP_STOCK_KEY

export default {
  name: "Stock",
  data() {
    return {
      code: "See the Code",
      priceResults: [],
      infoResults: []
    };
  },
  props:{
      ORG: String,
      TICKER: String,
      LINK: String,
      FINN: String
  },
  mounted(){
      this.fetchPRICE(this.TICKER)
  },
  methods:{
      fetchPRICE: function(t){
        var url = `https://finnhub.io/api/v1/quote?symbol=${t}&token=${api_key}`
        window.axios
            .get(url)
            .then(response => {
                this.priceResults = response.data;
            })
            .catch(error => console.log(error));
      },
      fetchINFO: function(t){
        var url = `https://finnhub.io/api/v1/stock/metric?symbol=${t}&metric=all&token=${api_key}`
        window.axios
            .get(url)
            .then(response => {
                this.infoResults = response.data;
            })
            .catch(error => console.log(error));
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#data{
    margin: 3rem 0;
    display: flex;
    flex-direction: row; 
    justify-content: space-evenly;
}
.width-limit {
  max-width: 80%;
  margin: auto;
}
/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 650px) {
  #data{
      margin: 1.5rem 0;
      flex-direction: column;
  }
  #frames{
      display: block;
      height: 100%;
      min-height: 216px;
      margin: 2rem auto;
  }
  #info{
      margin: 2rem 0;
  }
}
</style>

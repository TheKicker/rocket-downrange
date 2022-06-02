<template>
  <section>
    <div class="my-4">
      <div class="text-center bg-primary text-white py-2">
        <div class="col-md-10 p-lg-5 p-sm-3 mx-auto my-5">
          <h2 class="font-weight-normal text-white">{{ORG}} (<span class="text-info">${{TICKER}}</span>)</h2>
          <p>All data comes from an API provided by <a href="https://finnhub.io/" target="_blank" rel="noopener" class="text-light" style="text-decoration: underline">Finnhub</a>, please consult your financial representative or personal accountant for advice before making any decisions. Rocket Downrange does not endorse any stock. 
          <hr color="white" />
          <div id="data">
            <iframe id="frames" frameborder="2" :src="FINN"></iframe>
            <ul id="info" class="list-group text-light text-left">
                <li class="list-group-item bg-primary"><strong>IPO:</strong> {{START}}</li>
                <li class="list-group-item bg-primary"><strong>PRICE:</strong> ${{priceResults.c}}</li>
                <li class="list-group-item bg-primary"><strong>DELTA:</strong> {{priceResults.d}} ({{(priceResults.dp).toFixed(2)}}%)</li>
                <li class="list-group-item bg-primary"><strong>HIGH/LOW:</strong> {{priceResults.h}} / {{ priceResults.l}}</li>
                <li class="list-group-item bg-primary"><a :href="LINK" class="btn btn-outline-info d-block" target="_blank" rel="noopener">NASDAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
var api_key = process.env.VUE_APP_STOCK_KEY

export default {
  name: "Stock",
  data() {
    return {
      code: "See the Code",
      priceResults: [],
      infoResults: [],
      polling: null,
    };
  },
  props:{
      ORG: String,
      TICKER: String,
      LINK: String,
      FINN: String,
      START: String
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
      },
      pollData: function(t){
        this.polling = setInterval(()=>{
          this.fetchPRICE(this.TICKER)
          this.fetchINFO(this.TICKER)
          console.log("Run me")
        }, 1000);
      }
  },
  created(){
    this.pollData()
  },
  beforeDestroy(){
    clearInterval(this.polling)
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
/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 650px) {
  #data{
      margin: 1.5rem 0;
      flex-direction: column;
  }
  #frames{
      display: block;
      height: 100%;
      min-height: 260px;
      margin: 2rem auto;
  }
  #info{
      margin: 2rem 0;
  }
}
</style>

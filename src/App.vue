<template>
  <div class="container">
    <app-header
      :quoteCount="quotes.length"
      :maxQuotes="maxQuotes"
    ></app-header>
    <new-quote @quoteAdded="newQuote"></new-quote>
    <app-quote-grid
      :quotes="quotes"
      @quoteDeleted='deleteQuote'
    ></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-centered">
        <div class="alert-info">Info: Click on a quote to delete it.</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import Header from "./components/Header.vue";
export default {
  data: function() {
    return {
      maxQuotes: 10,
      quotes: ["Test quote."]
    };
  },
  methods: {
    newQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert("Please delete quotes first.");
      }
      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    newQuote: NewQuote,
    appHeader: Header
  }
};
</script>

<style>
</style>

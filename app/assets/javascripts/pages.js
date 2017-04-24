/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      name: "Peter",
      reviews: [
        "Vue.js is the best thing since sliced bread!",
        "I love Vue.js, especially when I'm programming!",
        "Vue.js is waaaaay better than Chinese Checkers."
      ],
      newReview: ""
    },
    methods: {
      addReview: function() {
        if (this.newReview !== "") {
          this.reviews.push(this.newReview);
          this.newReview = "";
        }
      },
      deleteReview: function(inputReview) {
        // console.log("deleting review...", inputReview);
        var index = this.reviews.indexOf(inputReview);
        this.reviews.splice(index, 1);
      },
      isPositive: function(inputReview) {
        return inputReview.indexOf("bad") === -1;
      }
    }
  });
});

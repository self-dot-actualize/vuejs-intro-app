/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      name: "Peter",
      reviews: [
        {text: "Vue.js is the best thing since sliced bread!", rating: 5, reviewer: "Burton Wax"},
        {text: "I love Vue.js, especially when I'm programming!", rating: 4, reviewer: "Emily Post"},
        {text: "Vue.js is waaaaay better than Chinese Checkers.", rating: 2, reviewer: "Angela Pearson"}
      ],
      newReviewText: "",
      newReviewRating: "",
      newReviewReviewer: ""
    },
    methods: {
      addReview: function() {
        if (this.newReviewText !== "") {
          this.reviews.push({text: this.newReviewText, rating: this.newReviewRating, reviewer: this.newReviewReviewer});
          this.newReviewText = "";
          this.newReviewRating = "";
          this.newReviewReviewer = "";
        }
      },
      deleteReview: function(inputReview) {
        // console.log("deleting review...", inputReview);
        var index = this.reviews.indexOf(inputReview);
        this.reviews.splice(index, 1);
      },
      isPositive: function(inputReview) {
        return inputReview.text.indexOf("bad") === -1;
      }
    }
  });
});

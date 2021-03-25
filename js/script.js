var app = new Vue (
  {
    el: "#app",
    data: {
        images: [
          "https://i.pinimg.com/originals/8c/52/81/8c52811a28dc44c8f7950502131162a5.jpg",
          "https://www.turismo.it/typo3temp/pics/c96fc8b49a.jpg",
          "https://molisecoast.com/wp-content/uploads/2017/06/trabucchi-termoli-41-1024x685.jpg"
        ],
        imageIndex : 0
    },
    methods : {
      nextImage: function() {
        this.imageIndex++;

        if (this.imageIndex == this.images.length) {
          this.imageIndex = 0;
        }
      },
      prevImage : function() {
        this.imageIndex--;

        if (this.imageIndex < 0) {
          this.imageIndex = this.images.length - 1;
        }
      }
    }
  }
);

let carouselArr = [];

class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel._data = arr;
            Carousel.Show(); // 
            
    
            Carousel.ResetInterval();
        }
    }

    
    static Show() {
        let item = Carousel._data[Carousel._sequence];
        let divCarousel = document.getElementById("carousel");
        let divTitle = document.getElementById("carousel-title");

        divCarousel.style.backgroundImage = `url('img/${item.image}')`;
        divCarousel.style.backgroundSize = "contain";
        divCarousel.style.backgroundRepeat = "no-repeat";
        divCarousel.style.backgroundPosition = "center";

        divTitle.innerHTML = `<a href="${item.url}">${item.title}</a>`;
    }

    
    static Next() {
        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
        Carousel.Show();
        Carousel.ResetInterval(); // 
    }

  
    static Prev() {
        Carousel._sequence--;
        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }
        Carousel.Show();
        Carousel.ResetInterval(); // Reinicia o tempo ao clicar
    }

    
    static ResetInterval() {
        clearInterval(Carousel._interval);
        Carousel._interval = setInterval(function() { 
            Carousel.Next(); 
        }, 5000);
    }
}
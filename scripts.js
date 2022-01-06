  //this sets gallery images and mini pictures
  function showDetails(item){
    currentSlide(1); //this defaults first picture to be always selected when clicking on the new item in gallery 
    var artType = item.getAttribute('data-art-type');
    document.getElementById('artImage1').src = artType + "1.jpg";
    document.getElementById('artImage2').src = artType + "2.jpg";
    document.getElementById('artImage3').src = artType + "3.jpg";
    document.getElementById('artImage4').src = artType + "4.jpg";
    document.getElementById('artImageThumbNail1mini').src = artType + "1.jpg";
    document.getElementById('artImageThumbNail2mini').src = artType + "2.jpg";
    document.getElementById('artImageThumbNail3mini').src = artType + "3.jpg";
    document.getElementById('artImageThumbNail4mini').src = artType + "4.jpg";

    var captionForGalleryItem = item.getAttribute('data-caption-type');
    document.getElementById('caption').innerHTML = captionForGalleryItem;
    }

    //this allows going back and forward using arrows to change pictures and also on click on mini picture it changes to that picture
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("carousel-item");
      var dots = document.getElementsByClassName("demo");
      //var captionText = document.getElementById("caption");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      //captionText.innerHTML = dots[slideIndex-1].alt;
    }
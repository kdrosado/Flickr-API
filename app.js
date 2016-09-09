//Flickr Photo Feeder App using buttons

$(document).ready(function() {


 $('button').click(function () {
    // highlight the button
    $("button").removeClass("selected");
    $(this).addClass("selected");

    // link to Flickr API
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text();//holds value of button selected
    var flickrOptions = {//parse json data
      tags: animal,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';//list of photos
      $.each(data.items,function(i,photo) {//loop through list of photos
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';//holds link to photos
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';//holds photo images
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);//display photos on html page
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);//get data from Flickr

  }); // end click

}); // end ready

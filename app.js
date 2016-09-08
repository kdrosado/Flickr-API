//Flickr Photo Feeder App using buttons

$(document).ready(function() {//runs after HTML is displayed
  
  $('button').click(function (){
    
    $("button").removeClass("selected");//removes highlight when other button is selected
    $(this).addClass("selected");//highlights selected button
    
    //access public photos on Flickr API
    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text();//holds value of button selected
   
    //parse json data
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    
    //callback function displaying the photos
    function displayPhotos(data){
      
      var photoHTML = '<ul>';//holds list of photos
      //loop though array of photos
      $.each(data.items, function(i, photo){
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';//holds photo link
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';//holds photo image
      });
      photoHTML += '</ul>';//closes photo list
      
      $('#photos').html(photoHTML);//displays photo to HTML page
      
    }    
    
    $getJSON(flickrAPI, flickrOptions, displayPhotos)
    
  });//end of click 
  
});//end of ready 

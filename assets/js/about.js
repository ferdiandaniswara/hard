$(document).ready(function(){
    /* Jquery for menu nav button when mobile view*/
    $(".menu-toggle-btn").on('click',function(event){
      
        $(".navigation-menu").toggleClass("active");
    });
const list = ["Asistant Lecturer School of Computing", "Intern Telkom Reg V", "Head Kaderisasi Division", "Chief Excecutive Students Orientation Comitees"];
$.each(list, function(cek, one){
  $('#new').append( '<p><i class="fas fa-map-marker"></i>'+' '+ one+'</p>')
});

const experience = ["3rd Winner TEAR Competition 2018", "The 8th ICOICT 2020"]
$.each(experience, function(key, value){
  $('#result').append( '<p><i class="fas fa-star"></i>'+' '+ value+'</p>')
});

});

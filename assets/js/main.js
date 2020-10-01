
$(document).ready(function(){
  /* Jquery for menu nav button when mobile view*/
  $(".menu-toggle-btn").on('click',function(event){
    
      $(".navigation-menu").toggleClass("active");
  });
  /*Jquery for deleting notification*/
  $(".btn").on('click',function(event){
    const selectedNotif = $(this).parent()

    selectedNotif.slideUp(250, function(){
      selectedNotif.remove()
    
    if($('#notification').children().length === 0){
      $('#notification').hide()
    }
  })
  })
  /*Jquery for directing to other pages*/
  document.getElementById("view").onclick = function () {
    location.href = "/post.html";
  };
  

})




/* Javacsript for hiding and revealing notifications*/
const revealButton = document.querySelector(".reveal-button");
const hiddenSection = document.querySelector("#notification");

function revealSection() {
    if (hiddenSection.classList.contains("reveal")) {
        hiddenSection.classList.remove("reveal");
       
    } else {
        hiddenSection.classList.add("reveal");
      
    }
}

revealButton.addEventListener("click", revealSection, false);



const post = [
  {title:'YouTube Cut Off Content Creator Bart Baker, So He Sold Himself to China',
   author:'Janice Bae in OneZero',
   date:'Apr 23, 2018',
   content:'In a video interview with ViceNews, Baker gives us a glimpse into the life of an American web-based entertainer desperately trying to reach fame in China. He spends his days plugging the lyrics of popular Chinese songs into Google Translate in order to rewrite them into barely passable English versions that he then belts into the camera as part of kitschy music videos for Douyin.',
  },
  {title:'I Skipped College to Teach Myself Data Science',
   author:'Natassha Selvaraj',
   date:'Aug 6, 2019',
   content:'I started out with a course called “Python for Data Science and Machine Learning Bootcamp,” which taught me the very basics of data science in Python. This course sparked my interest in data science. The lecturer’s enthusiasm rubbed off on me.'
  },
  {title:'The 20/20/20 Rule of Productive Mornings',
  author:'Niklas Göke',
  date:'Jul 21, 2018',
  content:'If you hit the snooze button, however, your body starts going back in the opposite direction. It’ll gear up to sleep more — and it really won’t like being rattled 9 minutes later. As a result, you’ll feel more tired than before, even though, technically, you slept longer.'
 }
]

const list = [
  {
    number:'01',
    title:'3 Years of Kubernetes in Production–Here’s What We Learned',
    auth:'Moritz Kleinsorge in The Startup'
  },
  {
    number:'02',
    title:'A Supercomputer Analyzed Covid-19 — and an Interesting New Theory Has Emerged',
    auth:'Thomas Smith in Elemental'
  },
  {
    number:'03',
    title:'Last Chance U Underdog RJ Stern on What His Future Holds',
    auth:'Andrew Martin'
  }
]



$(document).ready(function(){
  for(let i=0; i<post.length; i++){
    const titleTemplate = `
    <div class="post">
                <h1>${post[i].title}</h1>
                <h2>U${post[i].author}</h2>
                <h3>${post[i].date}</h3>
                <p>${post[i].content}</p>
    </div>
    `
    $('#posting').append(titleTemplate)
  }
  for(let i=0; i<list.length; i++){
    const listside = `
    <div class="side-list">
    <div class="number">${list[i].number}</div> 
    <div class="fill">
        <h1>${list[i].title}</h1>
        <p>${list[i].auth}</p>
    </div>
</div>
    `
    $('#side').append(listside)
  }
  for(let i=0; i<list.length; i++){
    const listside = `
    <div class="side-list">
    <div class="number">${list[i].number}</div> 
    <div class="fill">
        <h1>${list[i].title}</h1>
        <p>${list[i].auth}</p>
    </div>
</div>
    `
    $('#exp').append(listside)
  }

  for(let i=0; i<experience.length; i++){
    const exp =`
    <p><i class="fas fa-map-marker"></i> ${experience[i].exp}</p>
    `
    $('#new').append(exp)
  }
 
})



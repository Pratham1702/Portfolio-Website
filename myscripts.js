var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// --------------------Open and close menu---------------------

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0"
}
function closemenu(){
    sidemenu.style.right = "-200px"
}

// -----------------Contact form-----------------

  const scriptURL = 'https://script.google.com/macros/s/AKfycbx4l14VYL8pYQgCS7EpA0oGKYcvh7HxMY12bS_LZrDQizfqBuxJ38UuFWX7nMa0DtSD9w/exec'
  const form = document.forms['submit-to-google-sheet']

  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully!"
      })
      setTimeout(function(){
        msg.innerHTML = ""
      }, 5000)
      form.reset()
      .catch(error => console.error('Error!', error.message))
  })
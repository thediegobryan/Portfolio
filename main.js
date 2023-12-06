const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function setActive(clickedButton, skillLogoType) {
  // Get all buttons within the list group
  var buttons = document.querySelectorAll('.skills-list .list-group-item');
  
  // Remove 'active' class and 'aria-current' attribute from all buttons
  buttons.forEach(function(btn){
      btn.classList.remove('active');
      btn.removeAttribute('aria-current');
  });

  // Add 'active' class and 'aria-current' attribute to the clicked button
  clickedButton.classList.add('active');
  clickedButton.setAttribute('aria-current', 'true');

  let skillLogos = document.querySelectorAll('.skill-logo')

  skillLogos.forEach(logo => {
    if(skillLogoType == 'skill-logo'){
      logo.classList.remove('gray');
      logo.classList.remove('filtered-skill');
    } else if(logo.classList.contains(skillLogoType)){
      logo.classList.remove('gray');
      logo.classList.add('filtered-skill');
    } else {
      logo.classList.add('gray');
      logo.classList.remove('filtered-skill');
    }
  })
}
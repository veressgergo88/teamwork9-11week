window.addEventListener('scroll', function() {
      let bottomNav = document.getElementById('bottom-nav');
      let bottomNavPosition = bottomNav.offsetTop;

      if (window.pageYOffset > bottomNavPosition) {
        bottomNav.classList.add('sticky');
      } else {
        bottomNav.classList.remove('sticky');
      }
    });
    
    
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})
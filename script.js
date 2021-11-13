const tab = function() {
    const tabNav = document.querySelectorAll('.tab_nav'),
          tabContent = document.querySelectorAll('.tab');
        
    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
       //console.log(this)
        tabNav.forEach(item => {
            item.classList.remove('active');
        });

        this.classList.add('active');
        const tabName = this.getAttribute('data-id');
       // console.log(tabName);
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName)? item.classList.add('active'): item.classList.remove('active') ;
        });
    }

};

tab();
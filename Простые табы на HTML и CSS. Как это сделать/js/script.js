const tabsBtn = document.querySelectorAll('.tabs__item');
const tabsItems = document.querySelectorAll('.tabs__block');

tabsBtn.forEach(onTabClick);


function onTabClick(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if( !currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
       
    });

}

document.querySelector('.tabs__item').click();
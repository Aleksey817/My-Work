window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tabs__link').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            
            document.querySelectorAll('.tabs__item').forEach(function(tabItem) {
                tabItem.classList.remove('tabs--active')
            });
            document.querySelector(`[data-path="${path}"]`).classList.add('tabs--active')
        
            document.querySelectorAll('.tab-content').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active')
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
        });
        
    });
});
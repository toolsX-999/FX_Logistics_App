    // Function to update breadcrumb based on the active tab
    function updateBreadcrumb() {
        const breadcrumbItem = document.getElementById('breadcrumb-item-active');
        const activeTab = document.querySelector('.nav-link.active');

        if (activeTab) {
            // Get the text of the active tab
            const tabText = activeTab.innerText.trim();
            // Update breadcrumb text 
            breadcrumbItem.innerText = tabText; 
        }
    }

    // Update breadcrumb when a tab is clicked
    document.querySelectorAll('.nav-link').forEach(tab => {
        tab.addEventListener('click', updateBreadcrumb);
    });

    // Initial breadcrumb update on page load
    updateBreadcrumb();

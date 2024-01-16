

        
    


function generateArrows(){
    var hideOngoingButton = document.getElementById('hide-ongoing');
    var showOngoingButton = document.getElementById('show-ongoing');
    var ongoingElement = document.getElementById('ongoing');
    showOngoingButton.style.display = 'none';

    hideOngoingButton.addEventListener('click', function(event) {
        event.preventDefault();


        // Elements are currently visible, so hide them
        ongoingElement.style.display = 'none';
        hideOngoingButton.style.display = 'none';
        showOngoingButton.style.display = 'flex';
    });

    showOngoingButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Elements are currently hidden, so show them
        ongoingElement.style.display = 'flex';
        hideOngoingButton.style.display = 'flex';
        showOngoingButton.style.display = 'none';

    });



    var hideUpcomingButton = document.getElementById('hide-upcoming');
    var showUpcomingButton = document.getElementById('show-upcoming');
    var upcomingElement = document.getElementById('upcoming');
    showUpcomingButton.style.display = 'none';
    hideUpcomingButton.addEventListener('click', function() {
        
            // Elements are currently visible, so hide them
            upcomingElement.style.display = 'none';
            hideUpcomingButton.style.display = 'none';
            showUpcomingButton.style.display = 'flex';
        
    });
    showUpcomingButton.addEventListener('click', function() {
            // Elements are currently hidden, so show them
            upcomingElement.style.display = 'flex';
            hideUpcomingButton.style.display = 'flex';
            showUpcomingButton.style.display = 'none';
    });

    /*
    var hideWorkButton = document.getElementById('hide-work');
    var showWorkButton = document.getElementById('show-work');
    var workElement = document.getElementById('work');
    showWorkButton.style.display = 'none';

    hideWorkButton.addEventListener('click', function() {
        // Elements are currently visible, so hide them
        workElement.style.display = 'none';
        hideWorkButton.style.display = 'none';
        showWorkButton.style.display = 'flex';
    });

    showWorkButton.addEventListener('click', function() {
        // Elements are currently hidden, so show them
        workElement.style.display = 'flex';
        hideWorkButton.style.display = 'flex';
        showWorkButton.style.display = 'none';
    });
    */

    
}
generateArrows();
console.log('scripts.js is loaded');

let modal; // Declare modal in the global scope

function showCredentials() {
    $('#credentialsModal').modal('show');

    // Assign the modal variable inside the function
    modal = document.getElementById('credentialsModal');

    // Close modal when close button is clicked
    var closeButton = modal.querySelector('.close');
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            $('#credentialsModal').modal('hide');
        });
    }

    // Close modal when clicking outside the modal
    $(document).on('click', function (event) {
        if ($(event.target).is(modal)) {
            $('#credentialsModal').modal('hide');
        }
    });
}

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

$(document).ready(function() {
    var table = $('#mydatatable').DataTable( {
        rowReorder: {
            selector: 'td:nth-child(2)'
        },
        responsive: true
    } );
} );
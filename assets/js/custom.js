$(window).on('load', function() {
    $('body').on('click', '.upload-the-contacts', function() {
        $('.selected-contacts-message').removeClass('d-none')

    })
    $('body').on('click', '.write-msg-btn', function() {
        $('.email-overlay').removeClass('d-none')
        setTimeout(function() {
            $('.the-message-maker').addClass('email-overlay-transform');
        }, 0)

    });
    $('body').on('click', '.close-message-maker', function() {
        $('.the-message-maker').removeClass('email-overlay-transform')
        setTimeout(function() {
            $('.email-overlay').addClass('d-none');
        }, 200);

    });

    
    $("body").on('change', '.contacts-table tbody input', function() {
        var theTable = $(this).parent().parent().parent().parent().parent();
        if ($(this).is(':checked')) {
            $('.delete-tool-bar').removeClass('d-none').prev().addClass('d-none');

            $(theTable).children('tr').each(function(index) {
                //console.log(index + ": " + $(this).text());
                var theColumn = $(this).children('td').eq(0).find('input');
                if (theColumn.is(':checked')) {
                    // alert('checked');
                    $('#selectAll').prop('checked', true);
                } else {
                    $('#selectAll').prop('checked', false);
                    return false
                }
            });
        } else {
            $('#selectAll').prop('checked', false);
        }
    })
    $('body').on('change', '#selectAll', function() {
        var theTable = $(this).parent().parent().parent().parent().siblings('tbody');

        if ($(this).is(':checked')) {
            $('.delete-tool-bar').removeClass('d-none').prev().addClass('d-none')
            $(theTable).children('tr').each(function(index) {
                //console.log(index + ": " + $(this).text());
                var theColumn = $(this).children('td').eq(0).find('input');
                theColumn.prop('checked', true)
            });

        } else {
            $('.delete-tool-bar').addClass('d-none').prev().removeClass('d-none');
            $(theTable).children('tr').each(function(index) {
                //console.log(index + ": " + $(this).text());
                var theColumn = $(this).children('td').eq(0).find('input');
                theColumn.prop('checked', false);
            });
        }
    })

    $('body').on('click', '.chat-list li', function(){
        $(this).addClass('active').siblings().removeClass('active')
        $('.chat-room-place-holder').addClass('d-none').siblings().removeClass('d-none')
    })

});

$(document).ready(function(){
    $('body').on('click','.fullscreen', function(){
        // alert("Fullscreen clicked")
        $('.the-message-maker').toggleClass('email-fullscreen')
        $('.email-overlay').toggleClass('email-overlay-fullscreen')
        $('.email-overlay').removeClass('p-relative')
        $(this).parent().parent().parent().parent().siblings().removeClass('d-none');
        $(this).children('i').toggleClass("bx-exit-fullscreen")
        $(this).children('i').toggleClass("bx-fullscreen")
    })

    $('body').on('click', '.minimize', function() {
        $(this).parent().parent().parent().parent().siblings().toggleClass('d-none');
        $('.email-overlay').toggleClass('p-relative')
        $('.the-message-maker').removeClass('email-fullscreen')
        $('.email-overlay').removeClass('email-overlay-fullscreen')

        $(".fullscreen").children('i').removeClass("bx-exit-fullscreen")
        $(".fullscreen").children('i').addClass("bx-fullscreen")
    });
})
$(document).ready(function(){
    // date range picker
    $(function() {

        var start = moment().subtract(29, 'days');
        var end = moment();

        function cb(start, end) {
            $('#reportrange .selected-date').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));
        }

        $('#reportrange').daterangepicker({
            startDate: start,
            endDate: end,
            ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);

        cb(start, end);

    });
    // date range picker
})

$(document).ready(function() {

    

    $('.selectpicker').selectpicker();
    $('.selectpicker').selectpicker('render')
});
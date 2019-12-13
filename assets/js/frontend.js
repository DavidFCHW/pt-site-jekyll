$(document).ready(() => {
    /**
     *accordion function
     */
    const accordion = (sermon, x) => {
        $(".accordion").append(
            "<div class='card'>" +
                "<div class='card-header bg-light' id='" + x + "'>" +
                    "<h6 class='mb-0'>" +
                        "<button class='btn btn-outline-light text-dark btn-link' type='button' data-toggle='collapse' data-target='#collapse" + x +"' aria-expanded='true' aria-controls='collapse" + x +"'>" +
                            sermon.title +
                        "</button>" +
                        "<span class='float-right mt-2'>" + sermon.date_pretty + "</span>"+
                    "</h6>" +
                "</div>"+
                "<div id='collapse"+ x +"' class='collapse' aria-labelledby='" + x + "' data-parent='#sermon-accordion'>" +
                    "<div class='card-body mb-3 mt-2'>" +
                        "<audio class='sermon-list-player'" + "src= '" + sermon.path + "' controls></audio>"+ "<br>"+
                        "<span class='speaker float-left ml-2'>Speaker: " + sermon.speaker +"</span>"+
                        "<span class='scripture float-right mr-2'> Scripture: " + sermon.scripture + "</span>"+
                    "</div>" +
                "</div>"+
            "</div>"
        );
    };

    /**
     * Search function
     */
    const form_submit = () => {
        event.preventDefault(); //to skip over the form's default "action" attribute.
        $('.card').remove();
        let val = $('#search-box').val().toLowerCase();
        if(val != null) {
            $.getJSON("fe-sermons.json", sermons => {
                let x = 1;
                sermons.forEach(sermon => {
                    let sermon_search = sermon.title.toLowerCase().trim().includes(val);
                    if(sermon_search) {
                        accordion(sermon, x);
                        x++;
                    }
                });
            });
        }
    };
    $('#search-form').on('click', 'button', form_submit);
    $('#search-form').on('keypress', (e) => {
        if(e.keyCode == 13) {
            form_submit();
        }
    });

    /**
     * Pagination function
     */
    $('.page-buttons').on('click', 'button', function() {
        $('.card').remove();
        let page = $(this).attr('id');
        $.getJSON("fe-sermons.json", data => {
            let page_data = data.filter(sermon => sermon.pages == page);
            let x = 1;
            page_data.forEach(sermon => {
                accordion(sermon, x);
                x++;
            })
        });
    });

    /**
     * function to play one audio at a time.
     * source: https://stackoverflow.com/questions/20719550/play-one-html-audio-element-at-a-time
     */
    $('audio').on('play', function(){
        $('audio').not(this).each(function(index, audio){
            audio.pause();
        });
    });
});

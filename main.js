function reply_click(clicked_id) {
    if(clicked_id == "t1-more") {
        document.getElementById('sec-two').scrollIntoView({
            behavior: 'smooth'
        });
    }
}

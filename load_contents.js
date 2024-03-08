$.ajaxSetup ({
    // Disable caching of AJAX responses
    cache: false
});

$(function(){
    $("#includedContentTop").load("top.html", 'f' + (Math.random()*1000000));
    $("#includedContentEdu").load("edu.html", 'f' + (Math.random()*1000000));
    $("#includedContentNews").load("news.html", 'f' + (Math.random()*1000000));
    $("#includedContentInternship").load("internship.html", 'f' + (Math.random()*1000000));
    $("#includedContentPub").load("pub.html", 'f' + (Math.random()*1000000));
    $("#includedContentServices").load("services.html", 'f' + (Math.random()*1000000));
    $("#includedContentAwards").load("awards.html", 'f' + (Math.random()*1000000));
    $("#includedContentTalks").load("talks.html", 'f' + (Math.random()*1000000));
    $("#includedContentPatent").load("patent.html", 'f' + (Math.random()*1000000));
    $("#includedContentTeaching").load("teaching.html", 'f' + (Math.random()*1000000));
    $("#includedContentAdvising").load("advising.html", 'f' + (Math.random()*1000000));
    $("#includedContentFooter").load("footer.html", 'f' + (Math.random()*1000000));
});

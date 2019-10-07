document.getElementById("mainNav").innerHTML =
"<div class='color-line'>" + "</div>" +
"<div class='container-fluid'>"+
    "<button type='button' class='navbar-minimalize minimalize-styl-2  pull-left'><i class='fa fa-bars'>"+"</i></button>"+

    "<div class='navbar-header'>" + 
        "<button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>"+
            "<span class='sr-only'>" + "Toggle navigation" + "</span>" +
            "<span class='icon-bar'>" + "</span>" + 
            "<span class='icon-bar'>" + "</span>" +
            "<span class='icon-bar'>" + "</span>" +
        "</button>" + 
        "<a class='navbar-brand' href='#'>" + " Universal Service Fund " + "</a>" + "</div>" + 
    "<div id='navbar' class='navbar-collapse collapse'>" +
        "<div class='search' style='display: none;'>" + 
            "<form>" +
                "<input type='text' class='form-control' autocomplete='off' placeholder='Write something and press enter'>" +
                "<span class='search-close'><i class='fa fa-times'>" + " </i>" + "</span>" +
            "</form>" +
        "</div>" + 

        "<ul class='nav navbar-nav navbar-right navbar-top-drops'>" +
            "<li>" + "<span class='search-icon'>" + "<i class='fa fa-search'>" + "</i>" + "</span>" +

            "</li>" +
            "<li class='dropdown'>" + "<a href='#' class='dropdown-toggle button-wave' data-toggle='dropdown'>" + "<i class='fa fa-envelope'>" + "</i>" + "<span class='badge badge-xs badge-info'>" + "6" + "</span>" + "</a>" +

                "<ul class='dropdown-menu dropdown-lg animated flipInX'>" +

                     "<li class='notify-title'>" + "3 New messages" + "</li>" +
                     "<li class='clearfix'>" +
                        "<a href='#'>" +
                            "<span class='pull-left'>" +
                                "<img src='images/avtar-1.jpg' alt='' class='img-circle' width='30'>" +
                            "</span>" +
                            "<span class='block'>" + "John Doe" + "</span>" +
                            "<span class='media-body'>" + "Lorem ipsum dolor sit amet" +
                                "<em>" + "28 minutes ago" + "</em>" +
                            "</span>" +
                        "</a>" +
                    "</li>" +
                    "<li class='clearfix'>" +
                        "<a href='#'>" +
                            "<span class='pull-left'>" +
                                "<img src='images/avtar-2.jpg' alt='' class='img-circle' width='30'>" +
                            "</span>" +
                            "<span class='block'>" + "John Doe" + "</span>" +
                            "<span class='media-body'>" +
                                "Lorem ipsum dolor sit amet" +
                                "<em>" + "28 minutes ago" + "</em>" +
                            "</span>" +
                        "</a>" +
                    "</li>" +
                    "<li class='clearfix'>" +
                        "<a href='#'>" +
                            "<span class='pull-left'>" +
                                "<img src='images/avtar-3.jpg' alt='' class='img-circle' width='30'>" +
                            "</span>" +
                            "<span class='block'>" +
                                "John Doe" +
                            "</span>" +
                            "<span class='media-body'>" +
                                "Lorem ipsum dolor sit amet" +
                                "<em>" + "28 minutes ago" + "</em>"
                            "</span>" +
                        "</a>" +
                    "</li>" +
                    "<li class='read-more'>" + "<a href='#'>" + " View All Messages " + "<i class='fa fa-angle-right'>" + "</i>" + "</a>" + "</li>" +
                "</ul>" +
            "</li>" +
            "<li class='dropdown'>" + "<a href='#' class='dropdown-toggle button-wave' data-toggle='dropdown'>" + "<i class='fa fa-bell'>" + "</i>" + "<span class='badge badge-xs badge-warning'>" + "6" + "</span>" + "</a>" +

                "<ul class='dropdown-menu dropdown-lg animated flipInX'>" + 
                    "<li class='notify-title'>" + 
                        "3 New messages" +
                    "</li>" +
                    "<li class='clearfix'>" +
                        "<a href='#'>" +
                            "<span class='pull-left'>" +
                                "<i class='fa fa-envelope'>" + "</i>" +
                            "</span>" +

                            "<span class='media-body'>" +
                                "15 New Messages" +
                                "<em>" + "20 Minutes ago" + "</em>"
                            "</span>" +
                        "</a>" +
                    "</li>" +
                    "<li class='clearfix'>" +
                        "<a href='#'>" +
                            "<span class='pull-left'>" +
                                "<i class='fa fa-twitter'>" + "</i>" +
                            "</span>" +

                            "<span class='media-body'>" +
                                "13 New Followers" +
                                "<em>" + "2 hours ago" + "</em>" +
                            "</span>" +
                        "</a>" +
                    "</li>" +
                    "<li class='clearfix'>" +
                        "<a href='#'>" +
                            "<span class='pull-left'>" +
                                "<i class='fa fa-download'>" + "</i>"
                            "</span>" +

                            "<span class='media-body'>" +
                                "Download complete" +
                                "<em>" + "2 hours ago" + "</em>" +
                            "</span>" +
                        "</a>" +
                    "</li>" +
                    "<li class='read-more'>" + "<a href='#'>" + "View All Alerts" + "<i class='fa fa-angle-right'>" + "</i>" + "</a>" + "</li>" +
                "</ul>" +
            "</li>" +

            "<li class='dropdown'>" + "<a href='#' class='dropdown-toggle button-wave' data-toggle='dropdown'>" + "<i class='fa fa-user'>" + "</i>" + "</a>" +

                "<ul class='dropdown-menu dropdown-lg animated flipInX profile'>" +

                    "<li>" + "<a href='#'>" + "<i class='fa fa-user'>" + "</i>" + "My Profile</a>" + "</li>" +
                    "<li>" + "<a href='#'>" + "<i class='fa fa-calendar'>" + "</i>" + "My Calendar" + "</a>" + "</li>" +
                    "<li>" + "<a href='#'>" + "<i class='fa fa-envelope'>" + "</i" + ">My Inbox" + "</a>" + "</li>" +
                    "<li>" + "<a href='#'>" + "<i class='fa fa-barcode'>" + "</i>" + "My Task" + "</a>" + "</li>" +
                    "<li class='divider'>" + "</li>" +
                    "<li>" + "<a href='#'>" + "<i class='fa fa-lock'>" + "</i>" + "Screen lock" + "</a>" + "</li>" +
                    "<li>" + "<a href='#'>" + "<i class='fa fa-key'>" + "</i>" + "Logout" + "</a>" + "</li>" +

                "</ul>" +
            "</li>" +

        "</ul>" +
    "</div>" + "<!--/.nav-collapse -->" +
"</div>" + "<!--/.container-fluid -->" +
"</nav>" +
"<section class='page'>" +
"<nav class='navbar-aside navbar-static-side ' id='menu'>" +
    "<div class='sidebar-collapse'>" +
        "<div>" +
            "<ul class='nav' id='side-menu'>" +
                "<li>" +
                    "<a href='#'>" + "<i class='fa fa-th-large'>" + "</i>" + "<span class='nav-label'>" + "Dashboard" + "</span>" + "<span class='fa arrow'>" + "</span>" + "<!-- <span class='label label-rouded pull-right p1-bg note-icon'>" + "6" + "</span> -->" + "</a>" +
                    "<ul class='nav nav-second-level collapse'>" +
                        "<li>" + "<a href='index-2.html'>" + "Dashboard V.1" + "</a>" + "</li>" +
                        "<li>" + "<a href='index-3.html'>" + "Dashboard V.2 " + "</a>" + "</li>" +
                        "<li>" + "<a href='index-4.html'>" + "Dashboard V.3 " + "</a>" + "</li>" +
                        "<li>" + "<a href='index-5.html'>" + "Dashboard V.4 " + "</a>" + "</li>" +
                "</ul>" + 
            "</li>" +
            "<li>" +
                "<a href='#'>" + "<i class='fa fa-television'>" + "</i>" + "<span class='nav-label'>" + " Monitors " + "</span>" + "<span class='fa arrow'>" + "</span>" + "<!-- <span class='label label-rouded pull-right p1-bg note-icon'>" + "6" + "</span> -->" + "</a>" +
                "<ul class='nav nav-second-level collapse'>" +
                    "<li>" + "<a href='#'>" + " Travel Initiation " + "</a>" + "</li>" + 
                    "<li>" + "<a href='#'>" + " Travel Expense " + "</a>" + "</li>" 
                    "<li>" + "<a href='#'>" + " Reports " + "</a>" + "</li>" + 
                "</ul>" +
            "</li>" + 

            "<li>" + 
                "<a href='#'>" + "<i class='fa fa-th-large'>" + "</i>" + "<span class='nav-label'>" + " Operational Expense " + "</span>" + "<span class='fa arrow'>" + "</span>" + "<!-- <span class='label label-rouded pull-right p1-bg note-icon'>" + "6" + "</span> -->" + "</a>" +
                "<ul class='nav nav-second-level collapse'>" +
                    "<li>" + "<a href='#'>" + " Value .1 " + "</a>" + "</li>" +
                    "<li>" + "<a href='#'>" + " Value .2 " + "</a>" + "</li>" +
                    "<li>" + "<a href='#'>" + " Value .3 " + "</a>" + "</li>" +
                    "<li>" + "<a href='#'>" + " Value .4 " + "</a>" + "</li>" +
                "</ul>" +
            "</li>" +
            "</li>" +
            "<li class='nav-heading'>" + "<span>" + "Components" + "</span>" + "</li>" +
            "</li>" + "<li class='nav-heading'>" + "<span>" + "More" + "</span>" + "</li>" +
                "<li>" + 
                    "<a href='#'>" + "<i class='fa fa-users'>" + "</i>" + " <span class='nav-label'>" + "Users" + "</span>" + "<span class='fa arrow'>" + "</span>" + "</a>" + "<ul class='nav nav-second-level collapse'>" +
                        "<li>" + "<a href='user_profile.html'>" + "profile" + "</a>" + "</li>" + 
                        "<li>" + "<a href='user_list.html'>" + "User list" + "</a>" + "</li>" +
                    "</ul>" +
                "</li>" +
                "<li>" + 
                    "<a href='#'>" + "<i class='fa fa-map-marker'>" + "</i>" + "<span class='nav-label'>" + "maps" + "</span>" + "<span class='fa arrow'>" + "</span>" + "</a>" +
                    "<ul class='nav nav-second-level collapse'>" +
                        "<li><a href='google_maps.html'>" + "Google maps" + "</a>" + "</li>" + 
                        "<li>" + "<a href='vector_maps.html'>" + "Vector Maps" + "</a>" + "</li>" + 
                    "</ul>" +
                "</li>" +
                "<li>" +
                    "<a href='#'>" + "<i class='fa fa-pencil'>" + "</i> " + "<span class='nav-label'>" + "Blog" + "</span>" + "<span class='fa arrow'>" + "</span>" + "</a>" +
                    "<ul class='nav nav-second-level collapse'>" +
                        "<li>" + "<a href='blog_list.html'>" + "Blog list" + "</a>" + "</li>" +
                        "<li>" + "<a href='blog_post.html'>" + "Blog post" + "</a>" + "</li>" +
                    "</ul>" +
                "</li>" +
                "<li>" + "<a href='calendar.html'>" + "<i class='fa fa-calendar'>" + "</i>" + "  <span class='nav-label'>" + "Calendar " + "</span>" + "</a>" + "</li>" +

                "<li>"
                    "<a href='#'>" + "<i class='fa fa-sitemap'>" + "</i>" + " <span class='nav-label'>" + "Menu Levels " + "</span>" + "<span class='fa arrow'>" + "</span>" + "</a>" +
                    "<ul class='nav nav-second-level collapse'>" +
                        "<li>" +
                            "<a href='#'>" + "Third Level " + "<span class='fa arrow'>" + "</span>" + "</a>" +
                            "<ul class='nav nav-third-level'>" +
                                "<li>" + 
                                    "<a href='#'>" + "Third Level Item" + "</a>" +
                                "</li>" +
                            "</ul>" +
                        "</li> " + "<li>" + "<a href='#'>" + "Second Level Item" + "</a>" + "</li>" +
                "</ul>" +
            "</li>" + "<li class='nav-heading'>" + "<span>" + "Extra" + "</span>" + "</li>" +

            "<li>" + "<a href='calendar.html'>" + "<i class='fa fa-info-circle'>" + "</i>  " + "<span class='nav-label'>" + " About Us " + "</span>" + "</a>" + "</li>" +



            "</ul>" +

        "</div>" +
    "</div>" +
"</nav>" +

"<div id='wrapper'>" +
    "<div id='Page'>" +
                        "<!--  --> " +
    "</div>" +
"</div>" +

"</section>" 
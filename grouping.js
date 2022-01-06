$(document).ready(function(){
    
    $(".NM").on({
        mouseenter: function(){
            $(".am,.aem,.etm,.ltm,.bm,.m,.h,.ng,.la,.ac").fadeTo("fast", 0.20);
            $(".nm").fadeTo("fast", 1);
        }
    });
    $(".AM").on({
        mouseenter: function(){
            $(".nm,.aem,.etm,.ltm,.bm,.m,.h,.ng,.la,.ac").fadeTo("fast", 0.20);
            $(".am").fadeTo("fast", 1);
        }
    });
    $(".AEM").on({
        mouseenter: function(){
            $(".nm,.am,.etm,.ltm,.bm,.m,.h,.ng,.la,.ac").fadeTo("fast", 0.20);
            $(".aem").fadeTo("fast", 1);
        }
    });
    $(".ETM").on({
        mouseenter: function(){
            $(".nm,.am,.aem,.ltm,.bm,.m,.h,.ng,.la,.ac").fadeTo("fast", 0.20);
            $(".etm").fadeTo("fast", 1);
        }
    });
    $(".LTM").on({
        mouseenter: function(){
            $(".nm,.am,.aem,.etm,.bm,.m,.h,.ng,.la,.ac").fadeTo("fast", 0.20);
            $(".ltm").fadeTo("fast", 1);
        }
    });
    $(".AC").on({
        mouseenter: function(){
            $(".nm,.am,.aem,.etm,.ltm,.bm,.m,.h,.ng,.la").fadeTo("fast", 0.20);
            $(".ac").fadeTo("fast", 1);
        }
    });
    $(".BM").on({
        mouseenter: function(){
            $(".nm,.am,.aem,.etm,.ltm,.m,.h,.ng,.la,.ac").fadeTo("fast", 0.20);
            $(".bm").fadeTo("fast", 1);
        }
    });
    $(".M").on({
        mouseenter: function(){
            $(".nm,.am,.aem,.etm,.ltm,.bm,.h,.ng,.la,.ac").fadeTo("fast", 0.20);
            $(".m").fadeTo("fast", 1);
        }
    });
    $(".H").on({
        mouseenter: function(){
            $(".nm,.am,.aem,.etm,.ltm,.bm,.m,.ng,.la,.ac").fadeTo("fast", 0.20);
            $(".h").fadeTo("fast", 1);
        }
    });
    $(".NG").on({
        mouseenter: function(){
            $(".nm,.am,.aem,.etm,.ltm,.bm,.m,.h,.la,.ac").fadeTo("fast", 0.20);
            $(".ng").fadeTo("fast", 1);
        }
    });
    $(".LA").on({
        mouseenter: function(){
            $(".nm,.am,.aem,.etm,.ltm,.bm,.m,.h,.ng,.ac").fadeTo("fast", 0.20);
            $(".la").fadeTo("fast", 1);
        }
    });
    
    $(".select").on({
        mouseleave: function(){
            $(".nm,.am,.aem,.etm,.ltm,.bm,.m,.h,.ng,.la,.ac").fadeTo("fast", 1);
        }
    });
});

//Properties

$(document).ready(function(){
    
    $(".solid").on({
        mouseenter: function(){
            $(".am,.aem,.etm,.ltm,.bm,.m,.h,.ng,.la,.ac,.nm").fadeTo("fast", 0.20);
           
            $(".la,.ac,.m,.aem,.am,.etm,.ltm,.bm,.h,.6,.15,.16,.34").fadeTo("fast", 1);
             $(".87,.104,.105,.106,.107,.108,.109,.110,.111,.112,.113,.114,.115,.116,.117,.118,.80,.35,.9,.17").fadeTo("fast", 0.20);


        }
    });
    $(".liquid").on({
        mouseenter: function(){
            $(".am,.aem,.etm,.ltm,.bm,.m,.h,.ng,.la,.ac,.nm").fadeTo("fast", 0.20);
            $(".80,.35").fadeTo("fast", 1);
        }
    });
    $(".gas").on({
        mouseenter: function(){
            $(".am,.aem,.etm,.ltm,.bm,.m,.h,.ng,.la,.ac,.nm").fadeTo("fast", 0.20);
            $(".ng,.1,.7,.8,.9,.17").fadeTo("fast", 1);
            $(".118").fadeTo("fast", 0.20);
        }
    });
    $(".unknown").on({
        mouseenter: function(){
            $(".am,.aem,.etm,.ltm,.bm,.m,.h,.ng,.la,.ac,.nm").fadeTo("fast", 0.20);
            $(".87,.104,.105,.106,.107,.108,.109,.110,.111,.112,.113,.114,.115,.116,.117,.118").fadeTo("fast", 1);
        }
    });
    
    $("#properties").on({
        mouseleave: function(){
            $(".nm,.am,.aem,.etm,.ltm,.bm,.m,.h,.ng,.la,.ac").fadeTo("fast", 1);
        }
    });
});


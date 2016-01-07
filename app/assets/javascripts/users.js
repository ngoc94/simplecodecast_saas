/*global Stripe*/

$(document).ready(function(){
    Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
    //watch for a form submission
    $("#form-submit-btn").click(function(event){
        event.preventDefault(); //stop the button from sending form to server
        $('input[type=submit]').prop('disabled', true); //disables the button
        var error = false; //error noti.
        var ccNum = $('#card_number').val(), //just value store variables
            cvcNum = $('#card_code').val(),
            expMonth = $('#card_month').val(),
            expYear = $('card_year').val();

        if (!error){
            //Get the stripe token:
            Stripe.createToken({
                number:ccNum,
                cvc: cvcNum,
                exp_month: expMonth,
                exp_year: expYear,
            }, stripeResponseHandler);
        }
        return false;
    });

    function stripeResponseHandler(status, response){
        var f = $('#new_user');
        var token = response.id;
        f.append('<input type="hidden" name="user[stripe_card_token]" value="' + token + '" />');
        f.get(0).submit(); //submission of form
    }
});
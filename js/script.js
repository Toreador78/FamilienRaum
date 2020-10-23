//API Public Key
edooboxAPI.API_KEY = 'key_ec6f93695498ff845759cc';

//URL edoobox
var edoobox_URL  = 'TorCode',

    //HTML ID ELEMENT
    HTML_ELEMENT     = '#test_div',

    //PAGE URL
    PROVIDER_URL = location.protocol + '//' + location.host + location.pathname;
console.log("Provider URL: ",PROVIDER_URL);

//API URL
edooboxAPI.API_URL = 'https://api.edoobox.com/v1/';

//Get Template
edooboxAPI.get({url  : 'templates',
    data : {
        'language' : 'de',
        'filter'   : [
            {
                'property' : 'template.path',
                'value'    : edoobox_URL,
                'auto'     : true
            }
        ],
        'data' : [
            {
                'property' : 'provider.url',
                'value'    : PROVIDER_URL
            }
        ]
    },
    params : {},
    callback : function(a){
        console.log(a.data);

        edooboxAPI.$(HTML_ELEMENT).html(a.data.content.widgets);

        //Booking Page in iFrame oder Standardansicht
        edooboxAPI.iframe.init(HTML_ELEMENT);
    }
});
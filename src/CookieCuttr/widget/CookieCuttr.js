dojo.provide("CookieCuttr.widget.CookieCuttr");

mendix.dom.insertCss(mx.moduleUrl('CookieCuttr') + 'widget/css/cookiecuttr.css');
mendix.widget.declare('CookieCuttr.widget.CookieCuttr', {
    //DECLARATION
    inputargs: { 
        cookieMessage : '',
        cookiePolicy : '',
        declineCookies : false,
        cookieDeclineButtonText:'',
        cookieWhatAreLinkText: '',
        cookieAcceptButton: false,
        cookieAcceptButtonText : '',
        cookieOverlayEnabled: false,
        cookieNotificationLocationBottom: false,
        cookiePolicyPage : false,
        cookiePolicyPageMessage: '',
        cookieDiscreetLink: false,
        cookieDiscreetLinkText: '',
        cookieDiscreetPosition: ''
    },  

    postCreate : function() {        

       this.cookiecut = this;
        require({packages: [ { name: 'jquery', location:'/widgets/CookieCuttr/widget/js',  main: 'jquery' }]}, ["dojo","/widgets/CookieCuttr/widget/js/cookiejs.js"], function (dojo, cookie) { 

        dojo.require("CookieCuttr.widget.js.cookiecuttrjs");
        var arguments = CookieCuttr.widget.CookieCuttr.arguments[0];
        if(arguments.cookieNotificationLocationBottom){
            $.cookieCuttr({
                cookieAnalytics: false,
                cookieMessage: arguments.cookieMessage,
                cookiePolicyLink: arguments.cookiePolicy,
                cookieDeclineButton: arguments.declineCookies,
                cookieDeclineButtonText : arguments.cookieDeclineButtonText,
                cookieAcceptButton : arguments.cookieAcceptButton,
                cookieAcceptButtonText: arguments.cookieAcceptButtonText,
                cookieNotificationLocationBottom: arguments.cookieNotificationLocationBottom,
                cookiePolicyPage : arguments.cookiePolicyPage,
                cookiePolicyPageMessage: arguments.cookiePolicyPageMessage
        });
        }else if(arguments.cookieDiscreetLink){
            $.cookieCuttr({
                cookieDiscreetLink :arguments.cookieDiscreetLink,
                cookieDiscreetLinkText: arguments.cookieDiscreetLinkText,
                cookieDiscreetPosition : arguments.cookieDiscreetPosition
            });
        }
        else if(arguments.cookieOverlayEnabled){
            $.cookieCuttr({
                cookieAnalytics: false,
                cookieMessage: arguments.cookieMessage,
                cookiePolicyLink: arguments.cookiePolicy,
                cookieDeclineButton: arguments.declineCookies,
                cookieDeclineButtonText : arguments.cookieDeclineButtonText,
                cookieAcceptButton : arguments.cookieAcceptButton,
                cookieAcceptButtonText: arguments.cookieAcceptButtonText,
                cookiePolicyPage : arguments.cookiePolicyPage,
                cookiePolicyPageMessage: arguments.cookiePolicyPageMessage,
                cookieOverlayEnabled: arguments.cookieOverlayEnabled
        });
        }else{
            $.cookieCuttr({
                cookieAnalytics: false,
                cookieMessage: arguments.cookieMessage,
                cookiePolicyLink: arguments.cookiePolicy,
                cookieDeclineButton: arguments.declineCookies,
                cookieDeclineButtonText : arguments.cookieDeclineButtonText,
                cookieAcceptButton : arguments.cookieAcceptButton,
                cookieAcceptButtonText: arguments.cookieAcceptButtonText,
                cookieWhatAreLinkText: arguments.cookieWhatAreLinkText,
                cookiePolicyPage : arguments.cookiePolicyPage,
                cookiePolicyPageMessage: arguments.cookiePolicyPageMessage
        });
        }
     });
        
        this.actRendered();

    },

    uninitialize : function(){
    }
});
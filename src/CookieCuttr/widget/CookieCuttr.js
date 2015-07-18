/*jslint white:true, nomen: true, plusplus: true */
/*global mx, define, require, browser, devel, console, document, jQuery */
/*mendix */
/*
    CookieCuttr
    ========================
    @file      : CookieCuttr.js
    @version   : 3.0
    @author    : Simon Black
    @date      : 18/07/2015
    Documentation
    ========================
    This widget is based on the popular jquery plugin Cookie Cuttr (http://cookiecuttr.com). This widget will allow you to put a cookie banner into your Mendix application. It can be used either on a mobile page or desktop. Once the cookies have been accepted then the user will not see the banner again and will be able to proceed as usual. This would most likely be used to comply with the EU cookie law legislations, which came into force in May 2011. 
*/

// Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
define([
    'dojo/_base/declare', 'mxui/widget/_WidgetBase', 'dijit/_TemplatedMixin',
    'mxui/dom', 'dojo/dom', 'dojo/query', 'dojo/dom-prop', 'dojo/dom-geometry', 'dojo/dom-class', 'dojo/dom-style', 'dojo/dom-construct', 'dojo/_base/array', 'dojo/_base/lang', 'dojo/text', 'dojo/html', 'dojo/_base/event', 'CookieCuttr/lib/jquery-1.11.2', 'dojo/text!CookieCuttr/widget/template/CookieCuttr.html', 'CookieCuttr/widget/js/cookiejs', 'CookieCuttr/widget/js/cookiecuttrjs'
], function (declare, _WidgetBase, _TemplatedMixin, dom, dojoDom, domQuery, domProp, domGeom, domClass, domStyle, domConstruct, dojoArray, lang, text, html, event, _jQuery, widgetTemplate, _cookie, _cookiecuttrjs) {
    'use strict';

    var $ = _jQuery.noConflict(true);
    
    // Declare widget's prototype.
    return declare('CookieCuttr.widget.CookieCuttr', [_WidgetBase, _TemplatedMixin], {
    //DECLARATION
        templateString: widgetTemplate,
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
        cookieDiscreetPosition: '',
        cookiePlacement: 'body',

    postCreate : function() {        
        this._setupEvents();
        console.log(this.id + '.postCreate');
    },
        
    _setupEvents: function(){
        
        if(this.cookiePlacement != 'body'){
            if(typeof dojoDom.byId(this.cookiePlacement)!=  "undefined"){

                this.cookiePlacement = dojoDom.byId(this.cookiePlacement);
            }               
       }

        this.cookiecut = this;
        if(this.cookieNotificationLocationBottom){
            $.cookieCuttr({
                cookieAnalytics: false,
                cookieMessage: this.cookieMessage,
                cookiePolicyLink: this.cookiePolicy,
                cookieDeclineButton: this.declineCookies,
                cookieDeclineButtonText : this.cookieDeclineButtonText,
                cookieAcceptButton : this.cookieAcceptButton,
                cookieAcceptButtonText: this.cookieAcceptButtonText,
                cookieNotificationLocationBottom: this.cookieNotificationLocationBottom,
                cookiePolicyPage : this.cookiePolicyPage,
                cookiePolicyPageMessage: this.cookiePolicyPageMessage,
                cookiePlacement: this.cookiePlacement
                
        });
        }else if(this.cookieDiscreetLink){
            $.cookieCuttr({
                cookieDiscreetLink :this.cookieDiscreetLink,
                cookieDiscreetLinkText: this.cookieDiscreetLinkText,
                cookieDiscreetPosition : this.cookieDiscreetPosition,
                cookiePlacement: this.cookiePlacement
            });
        }
        else if(this.cookieOverlayEnabled){
            $.cookieCuttr({
                cookieAnalytics: false,
                cookieMessage: this.cookieMessage,
                cookiePolicyLink: this.cookiePolicy,
                cookieDeclineButton: this.declineCookies,
                cookieDeclineButtonText : this.cookieDeclineButtonText,
                cookieAcceptButton : this.cookieAcceptButton,
                cookieAcceptButtonText: this.cookieAcceptButtonText,
                cookiePolicyPage : this.cookiePolicyPage,
                cookiePolicyPageMessage: this.cookiePolicyPageMessage,
                cookieOverlayEnabled: this.cookieOverlayEnabled,
                cookiePlacement: this.cookiePlacement
        });
        }else{
            $.cookieCuttr({
                cookieAnalytics: false,
                cookieMessage: this.cookieMessage,
                cookiePolicyLink: this.cookiePolicy,
                cookieDeclineButton: this.declineCookies,
                cookieDeclineButtonText : this.cookieDeclineButtonText,
                cookieAcceptButton : this.cookieAcceptButton,
                cookieAcceptButtonText: this.cookieAcceptButtonText,
                cookieWhatAreLinkText: this.cookieWhatAreLinkText,
                cookiePolicyPage : this.cookiePolicyPage,
                cookiePolicyPageMessage: this.cookiePolicyPageMessage,
                cookiePlacement: this.cookiePlacement
        });
        }
        
    },


    uninitialize : function(){
    }
});
});

require(['CookieCuttr/widget/CookieCuttr'], function () {
    'use strict';
});
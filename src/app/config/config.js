
const SmartadminConfig = {
    menu_speed: 200,
    smartSkin: "smart-style-5",
    apiRootUrl: "assets/api",
    buildUrl: "build",
    menuOnTop: true,
    fixedHeader: true,
    skins: [
        {
            name: "smart-style-0",
            logo: "assets/img/logo.png",
            class: "btn btn-block btn-xs txt-color-white margin-right-5",
            style: {
                backgroundColor: '#4E463F'
            },
            label: "Smart Default"
        },
        {
            name: "smart-style-1",
            logo: "assets/img/logo-white.png",
            class: "btn btn-block btn-xs txt-color-white",
            style: {
                background: '#3A4558'
            },
            label: "Dark Elegance"
        },
        {
            name: "smart-style-2",
            logo: "assets/img/logo-blue.png",
            class: "btn btn-xs btn-block txt-color-darken margin-top-5",
            style: {
                background: '#fff'
            },
            label: "Ultra Light"
        },

        {
            name: "smart-style-3",
            logo: "assets/img/logo-pale.png",
            class: "btn btn-xs btn-block txt-color-white margin-top-5",
            style: {
                background: '#f78c40'
            },
            label: "Google Skin"
        },

        {
            name: "smart-style-4",
            logo: "assets/img/logo-pale.png",
            class: "btn btn-xs btn-block txt-color-white margin-top-5",
            style: {
                background: '#bbc0cf',
                border: '1px solid #59779E',
                color: '#17273D !important'
            },
            label: "PixelSmash"
        },
        {
            name: "smart-style-5",
            menuOnTop: true,
            logo: "assets/img/logo-pale.png",
            class: "btn btn-xs btn-block txt-color-white margin-top-5",
            style: {
                background: 'rgba(153, 179, 204, 0.2)',
                border: '1px solid rgba(121, 161, 221, 0.8)',
                color: '#17273D !important'
            },
            label: "Glass"
        },

        {
            name: "smart-style-6",
            logo: "assets/img/logo-pale.png",
            class: "btn btn-xs btn-block txt-color-white margin-top-5",
            style: {
                background: 'rgba(153, 179, 204, 0.2)',
                border: '1px solid rgba(121, 161, 221, 0.8)',
                color: '#17273D !important'
            },
            beta: true,
            label: "MaterialDesign"
        }
    ]
};

SmartadminConfig.sound_path = "assets/sound/";
SmartadminConfig.sound_on = true;


/*
 * DEBUGGING MODE
 * debugState = true; will spit all debuging message inside browser console.
 * The colors are best displayed in chrome browser.
 */


SmartadminConfig.debugState = false;
SmartadminConfig.debugStyle = 'font-weight: bold; color: #00f;';
SmartadminConfig.debugStyle_green = 'font-weight: bold; font-style:italic; color: #46C246;';
SmartadminConfig.debugStyle_red = 'font-weight: bold; color: #ed1c24;';
SmartadminConfig.debugStyle_warning = 'background-color:yellow';
SmartadminConfig.debugStyle_success = 'background-color:green; font-weight:bold; color:#fff;';
SmartadminConfig.debugStyle_error = 'background-color:#ed1c24; font-weight:bold; color:#fff;';


SmartadminConfig.voice_command = true;
SmartadminConfig.voice_command_auto = false;
SmartadminConfig.voice_command_lang = 'en-US';
/*
 *  Use localstorage to remember on/off (best used with HTML Version)
 */
SmartadminConfig.voice_localStorage = false;
/*
 * Voice Commands
 * Defines all voice command variables and functions
 */
if (SmartadminConfig.voice_command) {

    SmartadminConfig.commands = {

        'show dashboard': {
            type: 'navigate', payload: '/dashboard/analytics'
        },
        'show social': {
            type: 'navigate', payload: '/dashboard/social-wall'
        },
        'show outlook': {
            type: 'navigate', payload: '/outlook'
        },
        'show graphs': {
            type: 'navigate', payload: '/graphs/chart-js'
        },
        'show flot chart': {
            type: 'navigate', payload: '/graphs/flot-charts'
        },
        'show morris chart': {
            type: 'navigate', payload: '/graphs/morris-charts'
        },
        'show inline chart': {
            type: 'navigate', payload: '/graphs/sparklines'
        },
        'show dygraphs': {
            type: 'navigate', payload: '/graphs/dygraphs'
        },
        'show tables': {
            type: 'navigate', payload: '/tables/normal'
        },
        'show data table': {
            type: 'navigate', payload: '/tables/datatables'
        },
        'show form': {
            type: 'navigate', payload: '/forms/elements'
        },
        'show form layouts': {
            type: 'navigate', payload: '/forms/layouts'
        },
        'show form validation': {
            type: 'navigate', payload: '/forms/validation'
        },
        'show form elements': {
            type: 'navigate', payload: '/forms/bootstrap-elements'
        },
        'show form plugins': {
            type: 'navigate', payload: '/forms/plugins'
        },
        'show form wizards': {
            type: 'navigate', payload: '/forms/wizards'
        },
        'show bootstrap editor': {
            type: 'navigate', payload: '/forms/editors'
        },
        'show dropzone': {
            type: 'navigate', payload: '/forms/dropzone'
        },
        'show image cropping': {
            type: 'navigate', payload: '/forms/image-cropping'
        },
        'show general elements': {
            type: 'navigate', payload: '/ui/general-elements'
        },
        'show buttons': {
            type: 'navigate', payload: '/ui/buttons'
        },
        'show fontawesome': {
            type: 'navigate', payload: '/ui/icons/font-awesome'
        },
        'show glyph icons': {
            type: 'navigate', payload: '/ui/icons/glyphicons'
        },
        'show flags': {
            type: 'navigate', payload: '/ui/icons/flags'
        },
        'show grid': {
            type: 'navigate', payload: '/ui/grid'
        },
        'show tree view': {
            type: 'navigate', payload: '/ui/treeviews'
        },
        'show nestable lists': {
            type: 'navigate', payload: '/ui/nestable-lists'
        },
        'show jquery U I': {
            type: 'navigate', payload: '/ui/jquery-ui'
        },
        'show typography': {
            type: 'navigate', payload: '/ui/typography'
        },
        'show calendar': {
            type: 'navigate', payload: '/calendar'
        },
        'show widgets': {
            type: 'navigate', payload: '/widgets'
        },
        'show gallery': {
            type: 'navigate', payload: '/app-views/gallery'
        },
        'show maps': {
            type: 'navigate', payload: '/maps'
        },
        'go back': () => {
            history.back(1);
        },
        'scroll up': () => {
            jQuery('html, body').animate({ scrollTop: 0 }, 100);
        },
        'scroll down': () => {
            jQuery('html, body').animate({ scrollTop: jQuery(document).height() }, 100);
        },
        'hide navigation': {
            type: 'layout',
            payload: 'hide navigation'
        },
        'show navigation': {
            type: 'layout',
            payload: 'show navigation'
        },
        'mute': {
            type: 'sound',
            payload: 'mute',
        },
        'sound on': {
            type: 'sound',
            payload: 'sound on',
        },
        'stop': {
            type: 'voice',
            payload: 'stop'
        },
        'help': {
            type: 'voice',
            payload: 'help on'
        },
        'got it': {
            type: 'voice',
            payload: 'help off'
        },
        'logout': {
            type: 'navigate',
            payload: '/auth/login',
        },
    };
}

export const config = SmartadminConfig;

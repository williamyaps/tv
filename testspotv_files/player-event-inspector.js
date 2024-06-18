/* global jwplayer */
/* global jQuery */
(function($) {

    var jw7Events = [
        'ready',
        'setupError',
        'playlist',
        'playlistItem',
        'playlistComplete',
        'bufferChange',
        'play',
        'pause',
        'buffer',
        'idle',
        'complete',
        'error',
        'seek',
        'seeked',
        'time',
        'mute',
        'volume',
        'fullscreen',
        'resize',
        'captionsList',
        'captionsChanged',
        'levels',
        'levelsChanged',
        'controls',
        'displayClick',
        'beforePlay',
        'beforeComplete',
        'meta',
        'remove',
        'firstFrame',
        'visualQuality',
        'audioTracks',
        'audioTrackChanged',
        'autostartNotAllowed',
        'playAttemptFailed'
    ];

    var jw7AdEvents = [
        'adClick',
        'adRequest',
        'adImpression',
        'adCompanions',
        'adComplete',
        'adSkipped',
        'adError',
        'adTime',
        'adPlay',
        'adPause',
        'adStarted',
        'adBlock',
        'adMeta',
        'adBidRequest',
        'adBidResponse',
        'adBreakStart',
        'adBreakEnd',
        'adSchedule',
        'adManager',
        // JW8 additions
        'playbackRateChanged',
        'viewable'
    ];

    var relatedPluginEvents = [
        'open',
        'close',
        'play'
    ];

    var sharingPluginEvents = [
        'open',
        'close',
        'click'
    ];

    var getters = [
        'getProvider',
        'getPlaylist',
        'getPlaylistIndex',
        'getPlaylistItem',
        'getBuffer',
        'getState',
        'getPosition',
        'getDuration',
        'getMute',
        'getVolume',
        'getFullscreen',
        'getHeight',
        'getWidth',
        'getQualityLevels',
        'getCurrentQuality',
        'getCaptionsList',
        'getCurrentCaptions',
        'getControls',
        'getSafeRegion',
        'getVisualQuality',
        'getAudioTracks',
        'getCurrentAudioTrack',
        'getAdBlock',
        'getEnvironment',
        'getPlaybackRate',
        'getViewable'
    ];

    var methods = {
        setup: {config: 'object'},
    };

     window.jwplayerHarnessConfig = window.jwplayerHarnessConfig ||

     {
        file: '//content.jwplatform.com/manifests/1b02B03R.m3u8',
        image: '//content.jwplatform.com/thumbs/1b02B03R-720.jpg',
        width: '50%',
        aspectratio: '16:9',
        autostart: false,
        controls: true,
        preload: 'metadata',
        primary: 'html5'
    };

    var getterValues = {};
    var eventTimeouts = {};
    var eventHistory = {};
    window.jwGetterValues = getterValues;
    window.jwEventHistory = eventHistory;

    $(document).ready(function() {
        var player = jwplayer('player');
        setupGetters(player);
        setupJW7Events(player);
        setupMethods(player);
        setupRelatedEvents(player);
        setupSharingEvents(player);
    });

    function setupPage(config) {
        var player = setupPlayer(config);
        setupGetters(player);
        setupJW7Events(player);
        setupMethods(player);
        setupRelatedEvents(player);
        setupSharingEvents(player);
    }

    function setupPlayer(config) {
        jwplayer.key = 'PA80S1NuJPtZSHmnEH5k9umR5MbmZWu3pc8hG4vYk0WGLCjxhRNGfUlS8QCE01ts';
        getterValues = {};
        eventHistory = {};
        window.jwGetterValues = getterValues;
        window.jwEventHistory = eventHistory;
        config = config || {};
        jwplayer('player').setup(config);
        $('.getter.block').addClass('active');
        $('.util span').addClass('active');
        return jwplayer('player');

    }

    function handleTooltips(e) {
        var target = $(this);

        if (!target.hasClass('active')) {
            return;
        }

        target.addClass('tooltip-open');

        $('.tooltip-container', this).on('click', closeTooltipFromOverlay);
        $('.close-tooltip', this).one('click', closeTooltipFromButton);
    }

    function closeTooltipFromOverlay(e) {
        e.stopImmediatePropagation();

        var captured = $(e.target);
        if (captured.is(e.currentTarget)) {
            $('.close-tooltip', e.target).trigger('click');
        }
    }

    function closeTooltipFromButton(e) {
        $(e.target).closest('.tooltip-open').removeClass('tooltip-open');
        e.stopImmediatePropagation();
    }

    function setupJW7Events(player) {
        var $jw7Events = $('#jw7-events');
        $jw7Events.find('.counter').removeClass('active');
        $jw7Events.find('.count').text('0');
        $jw7Events.find('.history').empty();
        $(jw7Events.concat(jw7AdEvents)).each(function setupJW7Event(idx, eventName) {
            if ($('#'+eventName).length === 0) {
                var id = eventName;
                var eventBlock = $('<div class="jw7-event block"></div>');
                var eventCounter = $('<span class="counter"><span id="'+id+'_count" class="count">0</span><div class="tooltip-container"><div class="close-tooltip">close</div><ol id="'+id+
                '_history" class="history"></ol></div></span>');
                var eventLabel = $('<label></label>');

                eventBlock.on('click', handleTooltips);

                eventLabel.text('on(\''+ eventName +  '\')');
                eventBlock.attr('id', eventName);
                eventBlock.append(eventLabel);
                eventBlock.append(eventCounter);
                $jw7Events.append(eventBlock);

            }
            clearTimeout(eventTimeouts[eventName]);
            player.on(eventName, eventListener(eventName));
        });
    }

    function setupRelatedEvents(player) {
        var $relatedPluginEvents = $('#related-plugin-events');
        $relatedPluginEvents.find('.counter').removeClass('active');
        $relatedPluginEvents.find('.count').text('0');
        $relatedPluginEvents.find('.history').empty();
        $(relatedPluginEvents).each(function setupRelatedEvents(idx, eventName) {
            if ($('#'+ 'related' + eventName).length === 0) {
                var id = 'related' + eventName;
                var eventBlock = $('<div class="related-plugin-events block"></div>');
                var eventCounter = $('<span class="counter"><span id="'+id+'_count" class="count">0</span><div class="tooltip-container"><div class="close-tooltip">close</div><ol id="'+id+
                '_history" class="history"></ol></div></span>');
                var eventLabel = $('<label></label>');

                eventBlock.on('click', handleTooltips);

                eventLabel.text('("related").on(\''+ eventName +  '\')');
                eventBlock.attr('id', id);
                eventBlock.append(eventLabel);
                eventBlock.append(eventCounter);
                $relatedPluginEvents.append(eventBlock);
            }
            clearTimeout(eventTimeouts[eventName]);
        });

        player.on('ready', function() {
            var relatedPlugin = player.getPlugin('related');

            if (relatedPlugin) {
                $(relatedPluginEvents).each(function setupRelatedEvents(idx, eventName) {
                    relatedPlugin.on(eventName, eventListener('related' + eventName));
                });
            }
        });
    }

    function setupSharingEvents(player) {
        var $sharingPluginEvents = $('#sharing-plugin-events');
        $sharingPluginEvents.find('.counter').removeClass('active');
        $sharingPluginEvents.find('.count').text('0');
        $sharingPluginEvents.find('.history').empty();
        $(sharingPluginEvents).each(function setupSharingEvents(idx, eventName) {
            if ($('#'+ 'sharing' + eventName).length === 0) {
                var id = 'sharing' + eventName;
                var eventBlock = $('<div class="sharing-plugin-events block"></div>');
                var eventCounter = $('<span class="counter"><span id="'+id+'_count" class="count">0</span><div class="tooltip-container"><div class="close-tooltip">close</div><ol id="'+id+
                '_history" class="history"></ol></div></span>');
                var eventLabel = $('<label></label>');

                eventBlock.on('click', handleTooltips);

                eventLabel.text('("sharing").on(\''+ eventName +  '\')');
                eventBlock.attr('id', id);
                eventBlock.append(eventLabel);
                eventBlock.append(eventCounter);
                $sharingPluginEvents.append(eventBlock);
            }
            clearTimeout(eventTimeouts[eventName]);
        });

        player.on('ready', function() {
            var sharingPlugin = player.getPlugin('sharing');

            if (sharingPlugin) {
                $(sharingPluginEvents).each(function setupSharingEvents(idx, eventName) {
                    sharingPlugin.on(eventName, eventListener('sharing' + eventName));
                });
            }
        });
    }

    var callGetterMethods;
    function setupGetters(player) {
        callGetterMethods = {};
        var $getters = $('#getters');
        $getters.find('.count').text('');
        $getters.find('.history').empty();
        $(getters).each(function setupGetter(idx, getter) {
            var getterCounter = $('#'+getter);
            if (getterCounter.length === 0) {
                var id = getter;
                var getterBlock = $('<div class="getter block"></div>');
                getterCounter =  $('<span class="counter"><span id="'+id+'_value" class="count"></span><div class="tooltip-container"><div class="close-tooltip">close</div><ol id="'+id+
                '_history" class="history"></ol></div></span>');
                var getterLabel = $('<label></label>');
                getterLabel.text(getter);
                getterCounter.attr('id', getter);

                getterBlock.on('click', handleTooltips);

                getterBlock.append(getterLabel);
                getterBlock.append(getterCounter);
                $getters.append(getterBlock);
            }

            // define getter callbacks once with new player passed through setup scope
            callGetterMethods[getter] = function callGetter(evtName) {
                if (evtName === 'onTime' || evtName === 'onBuffer') {
                    // the getPlaylist(Item) methods are slow in Flash so don't update them onTime
                    if (getter.indexOf('getPlaylist') > -1) {
                        return;
                    }
                }
                var val;
                try {
                    val = player[getter]();
                } catch(err) {
                    val = 'Error: '+ err.message;
                }

                if (getterValues[getter] !== val) {
                    getterValues[getter] = val;
                    setValue(getterCounter, val);
                }
            };
        });
    }

    function getGetters(evtName) {
        for (var i=0; i<getters.length; i++) {
            var getter = getters[i];
            callGetterMethods[getter](evtName);
        }
    }

    function eventListener(evtName) {
        var $counter = $('#'+evtName);
        var $count = $counter.find('.count');
        var $history = $counter.find('.history');
        var $tooltip = $( ".counter.active:hover .history");
        return function listener(evt) {
            var history = addEventHistory(evtName, evt);
            $history.append($(document.createElement('li')).text(history.latest().toString()));
            $count.text(history.count());
            $counter.addClass('active');
            // update async to allow player to complete event cycle
            clearTimeout(eventTimeouts[evtName]||-1);
            eventTimeouts[evtName] = setTimeout(function() {
                getGetters(evtName);
            }, 0);
        };

    }

    function setValue($count, val) {
        if ($.isArray(val)) {
            $count.find('.count').text('Array('+val.length+')');
            $count.find('.history').text(JSON.stringify(val, null, '  '));
        }
        else if (typeof val === 'object') {
            $count.find('.count').text('[Object]');
            $count.find('.history').text(JSON.stringify(val, null, '  '));
        }
        else if (typeof val === 'string') {
            $count.find('.count').text(val.substr(0,10));
            $count.find('.history').text(val);
        }
        else {
            var result = JSON.stringify(val, null, '  ');
            $count.find('.count').text(result.substr(0,10));
            $count.find('.history').text(result);
        }
    }

    function setupMethods(player) {
        var $methods = $('#methods');
        $.each(methods, function setupMethod(method, args) {
            var id = method+'-method', methodBlock = $('#'+method+'-method'), methodButton;
            if (methodBlock.length === 0) {
                methodBlock = $('<div class="block"></div>');
                methodButton = $('<button id="'+ id +'_button" class="ds-button--primary" type="button"></button>');


                methodBlock.attr('id', method+'-method');
                methodButton.text("Create a Player");

                methodArgs(methodBlock, args);

                if (method === 'setup') {
                    methodBlock.find('#setup-method_config').val(JSON.stringify(window.jwplayerHarnessConfig, null, 4));
                }

                $methods.append(methodBlock);
                methodBlock.append(methodButton);
            } else {
                methodButton = methodBlock.children('button').unbind('click');
            }
            methodButton.click(callMethod(method, player));
        });
    }

    function methodArgs(block, args) {
        var id = block.attr('id');
        $.each(args, function methodArg(idx, argType) {
            var paramId = id + '_' + idx;

            switch (argType) {
                case 'boolean':
                    var trueRadio = $('<input id="'+ paramId +'_true" type="radio" value="true"></input>');
                    var falseRadio = $('<input id="'+ paramId +'_false" type="radio" value="false"></input>');
                    trueRadio.attr('name', paramId);
                    falseRadio.attr('name', paramId);

                    var trueLabel = $('<label for="'+paramId+'_true'+'">true</label>');
                    var falseLabel = $('<label for="'+paramId+'_false'+'">false</label>');

                    block.append(trueRadio).append(trueLabel);
                    block.append(falseRadio).append(falseLabel);
                    break;
                case 'number':
                    var initVal = '0';
                /* fall through */
                default:
                    var input = $('<input id="' + paramId + '"/>');
                    if (idx === 'config') {
                        input = $('<textarea class="ds-textinput" rows="18" id="' + paramId + '"/>');
                    }
                    input.addClass(argType);
                    input.attr('value', initVal);
                    input.attr('name', id + '_' + idx);
                    block.append(input);
                    break;
            }
        });
    }

    function callMethod(methodName, player) {
        return function caller(evt) {
            evt.preventDefault();
            var args = [];
            var errors = false;
            $.each(methods[methodName], function(idx, argType) {
                var inputs = $('#' + methodName + '-method_config');
                var param, value;
                switch(argType) {
                    case 'object':
                        value = inputs.val();
                        if (value === '') {
                            // no config - use default?
                            param = {};
                        } else {
                            try {
                                eval('param = ' + value);
                            } catch(err) {
                                console.log('setup config JSON parse error '+ err);
                                $('#player').html(
                                    '<p style="color:red;">'+
                                    'Invalid JSON in Harness method "'+methodName+'":'+
                                    '</p><pre>'+ value +'</pre>'
                                );
                                errors = true;
                                return false;
                            }
                        }
                        args.push(param);
                        break;
                    case 'number':
                        param = parseFloat(inputs.val(), 10);
                        args.push(param);
                        break;
                    case 'boolean':
                        var checked = inputs.filter(':checked');
                        if (checked.length) {
                            param = String(checked.val()) === 'true';
                            args.push(param);
                        }
                        break;
                    case 'playlist':
                        // may be an array or a string
                        value = inputs.val();
                        try {
                            param = JSON.parse(value);
                            args.push(param);
                        } catch(err) {
                            args.push(value);
                        }
                        break;
                    case 'function':
                        // must be globally scoped
                        param = window[inputs.val()];
                        args.push(param);
                        break;
                    default:
                        args.push(inputs.val());
                        break;
                }
                //console.log(methodName, args.join(','));
            });
            if (errors) {
                return;
            }
            if (methodName === 'setup') {
                //setup requires rewiring the page to the new player instance
                if (player.renderingMode) {
                    player.stop();
                    player.remove();
                }
                setTimeout(function() {
                    setupPage.apply(this, args);
                }, 0);
            } else {
                player[methodName].apply(player, args);
            }
        };
    }

    function addEventHistory(type, evt) {
        var history = eventHistory[type];

        if (!history) {
            var events = [];
            history = {
                count: function() {
                    return events.length;
                },
                latest: function() {
                    return events.length ? events[events.length-1] : null;
                },
                all: function() {
                    return events;
                },
                push: function(evt) {
                    events.push(evt);
                }
            };
            eventHistory[type] = history;
        }

        history.push(new EventObj(type, evt));

        return history;
    }

    function EventObj(type, event) {
        this.type = type;
        this.event = event;
    }

    EventObj.prototype.toString = function() {
        if (this.event && this.event.currentTarget && this.event.currentTarget.nodeType) {
            return '["' + this.event.type + '" Event object]';
        }
        var event = {};
        for (var i in this.event) {
            var value = this.event[i];

            if (typeof value === 'number') {
                if (value === Infinity || isNaN(value)) {
                    value = '' + value + '';
                }
            }
            event[i] = value;
        }
        return JSON.stringify(event, null, '  ');
    };

})(jQuery);

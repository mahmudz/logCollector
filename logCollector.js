(function($) {
    $.logCollector = function(options) {
        var receiverURI = 'https://app-log-collector.herokuapp.com/save-log';

        var defaults = {
                debug: false
            },
            plugin = this,
            options = options || {};

        plugin.sendLog = function(log) {
            $.ajax({
                url: receiverURI,
                type: "POST",
                data: log,
                "success": function() {
                    if (options.debug) {
                        console.log('Log saved successfully.');
                    }
                },
                "error": function() {
                    if (options.debug) {
                        console.error('Something went wrong.');
                    }
                }
            });
        }
        plugin.init = function() {
            var settings = $.extend({}, defaults, options);
            $.data(document, 'logCollector', settings);
            plugin.sendLog(options.data);
        }

        plugin.init();
    }

}(jQuery));
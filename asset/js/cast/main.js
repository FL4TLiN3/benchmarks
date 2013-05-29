
define([], function() {
    var exports = {};
    var STRING = '1.234567890';
    var FLOAT = 1.234567890;
    var times = 1e7;

    exports.start = function() {
        document.write('Number(string) start... ');
        setTimeout(function() {
            var startAt = Date.now();
            for (var i = 0; i < times; i++) {
                Number(STRING);
            }
            document.write('done! in ' + (Date.now() - startAt) + 'ms<br>');
        }, 1);
    };

    return exports;
});


(function() {
    var scripts = document.getElementsByTagName('script');
    var caller = scripts[scripts.length - 1];
    var interval = caller.getAttribute('data-interval') << 0;

    require(
        [
            'cast/integer',
            'cast/float'
        ],
        function() {
            var modules = [].slice.apply(arguments);
            (function run(pointer) {
                var callback = function() {
                    run(pointer + 1);
                };
                if (modules.length > pointer) {
                    setTimeout(function() {
                        document.write('start benchmark "' + modules[pointer].title + '"<br>');
                        modules[pointer].start(callback);
                    }, 1);
                }
            })(0);
        }
    );
})();

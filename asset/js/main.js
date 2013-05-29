
(function() {
    var scripts = document.getElementsByTagName('script');
    var caller = scripts[scripts.length - 1];
    var interval = caller.getAttribute('data-interval') << 0;

    require(
        [
            'cast/main'
        ],
        function() {
            var modules = [].slice.apply(arguments);
            modules.forEach(function(module) {
                module.start();
            });
        }
    );
})();

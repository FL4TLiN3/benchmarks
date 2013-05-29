
(function() {
    var scripts = document.getElementsByTagName('script');
    var caller = scripts[scripts.length - 1];
    var interval = caller.getAttribute('data-interval') << 0;

    require(
        [
            'const',
            'cast/string',
            'cast/integer',
            'cast/float'
        ],
        function() {
            var numNotBenchmarks = 1,
                numBenchmarks = arguments.length - numNotBenchmarks,
                modules = [].slice.apply(arguments),
                benchmarks = modules.slice(-numBenchmarks),
                Const = modules[0];

            (function run(pointer) {
                var callback = function() {
                    run(pointer + 1);
                };
                if (benchmarks.length > pointer) {
                    setTimeout(function() {
                        document.write('start benchmark "' + benchmarks[pointer].title + '"<br>');
                        benchmarks[pointer].start(callback);
                    }, 1);
                }
            })(0);

            function appendContainer(modules) {
                var id = module.id = '' + parseInt(Math.random() * 1e6);
                var container = document.createElement('div');
                container.id = Const.ID_CONTAINER;
            }
        }
    );

})();

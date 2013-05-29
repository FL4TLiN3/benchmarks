
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

            var container = createContainer(benchmarks);
            document.body.appendChild(container);

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

            function createContainer(modules) {
                var container = document.createElement('div');
                container.id = Const.ID_CONTAINER;

                var html = '';
                var template = '<div id="%%ID%%" class="result"></div>';

                modules.forEach(function(module) {
                    module.id = '' + parseInt(Math.random() * 1e6);
                    html += template.replace('%%ID%%', module.id);
                });

                container.innerHTML = html;
                return container;
            }
        }
    );

})();

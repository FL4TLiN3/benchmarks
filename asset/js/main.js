var $ = function(id) {
    return document.getElementById(id);
};

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
                Const = modules[0],
                container = document.createElement('div'),
                template = '<div id="%%ID%%" class="result"></div>',
                html = '';

            container.id = Const.ID_CONTAINER;

            for (var i = 0, size = benchmarks.length; i < size; i++) {
                benchmarks[i].id = '' + parseInt(Math.random() * 1e6, 10);
                html += template.replace('%%ID%%', benchmarks[i].id);
            }

            container.innerHTML = html;
            document.body.appendChild(container);

            (function run(pointer) {
                var benchmark = benchmarks[pointer];
                var callback = function() {
                    run(pointer + 1);
                };
                if (benchmarks.length > pointer) {
                    setTimeout(function() {
                        $(benchmark.id).innerHTML += 'start benchmark "' + benchmark.title + '"<br>';
                        benchmark.start(callback);
                    }, 1);
                }
            })(0);

            function createContainer(modules) {
            }
        }
    );

})();

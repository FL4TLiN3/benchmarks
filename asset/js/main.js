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
                Const = modules[0];

            var container = createContainer(benchmarks);
            document.body.appendChild(container);

            (function run(pointer) {
                var callback = function() {
                    run(pointer + 1);
                };
                if (benchmarks.length > pointer) {
                    setTimeout(function() {
                        $(benchmarks[pointer].id).innerHTML += 'start benchmark "' + benchmarks[pointer].title + '"<br>';
                        benchmarks[pointer].start(callback);
                    }, 1);
                }
            })(0);

            function createContainer(modules) {
                var container = document.createElement('div');
                container.id = Const.ID_CONTAINER;

                var html = '';
                var template = '<div id="%%ID%%" class="result"></div>';

                for (var i = 0, size = modules.length; i < size; i++) {
                    modules[i].id = '' + parseInt(Math.random() * 1e6, 10);
                    html += template.replace('%%ID%%', modules[i].id);
                }

                container.innerHTML = html;
                return container;
            }
        }
    );

})();

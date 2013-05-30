var $ = function(arg) {
    var elem;
    if (typeof arg === "string") {
        elem = $.is= document.getElementById(arg);
    } else if($.isElement(arg)) {
        elem = arg;
    }
    elem.appendNew = function(nodeType, id, className, text) {
        var newElem = document.createElement(nodeType);
        newElem.id = id;
        newElem.className = className;
        if (text) newElem.appendChild(document.createTextNode(text));
        elem.appendChild(newElem);
        return newElem;
    };
    return elem;
};

$.isNode = function(o) {
    return (
        typeof Node === "object" ?
            o instanceof Node :
            o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
    );
};

$.isElement = function(o) {
    return (
        typeof HTMLElement === "object" ?
            o instanceof HTMLElement :
            o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
    );
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
                        $(benchmark.id).appendNew('h2', 'title', 'title', benchmark.title);
                        var tasks = $(benchmark.id).appendNew('ul', 'tasks', 'tasks');
                        benchmark.start(tasks, callback);
                    }, 1);
                }
            })(0);

            function createContainer(modules) {
            }
        }
    );

})();

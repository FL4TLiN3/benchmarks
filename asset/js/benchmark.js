
define([], function() {
    function Benchmark(title) {
        this.title = title;
        this.tasks = [];
    }
    Benchmark.prototype.add = function(description, fnc) {
        this.tasks.push({
            description: description,
            fnc: fnc
        });
    };
    Benchmark.prototype.start = function(elem, done) {
        var ct = 0;
        var self = this;
        (function test(ct) {
            var execTask = function(task) {
                var startAt = Date.now();
                task.fnc(function() {
                    var li = $(elem).appendNew('li', '', 'benchmark');
                    $(li).appendNew('h3', '', 'description', task.description);
                    $(li).appendNew('p', '', 'spent', (Date.now() - startAt) + 'ms');
                    $(li).appendNew('pre', '', 'code', task.fnc.toString());
                    test(ct + 1);
                });
            };

            if (self.tasks.length > ct) {
                setTimeout(function() { execTask(self.tasks[ct]); }, 100);
            } else {
                done();
            }
        })(0);
    };

    return Benchmark;
});

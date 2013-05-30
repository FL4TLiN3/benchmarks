
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
    Benchmark.prototype.start = function(done) {
        var ct = 0;
        var self = this;
        (function test(ct) {
            var execTask = function(task) {
                var startAt = Date.now();
                $(self.id).innerHTML += task.description + ' start... ';
                task.fnc(function() {
                    $(self.id).innerHTML += 'done! in ' + (Date.now() - startAt) + 'ms<br>';
                    test(ct + 1);
                });
            };

            if (self.tasks.length > ct) {
                setTimeout(function() { execTask(self.tasks[ct]); }, 500);
            } else {
                done();
            }
        })(0);
    };

    return Benchmark;
});

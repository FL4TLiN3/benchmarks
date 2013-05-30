
define([], function() {
    function Benchmark(title) {
        this.title = title;
        this.benchmarks = [];
    }
    Benchmark.prototype.add = function(description, fnc) {
        this.benchmarks.push({
            description: description,
            fnc: fnc
        });
    };
    Benchmark.prototype.start = function(done) {
        var pointer = 0;
        var self = this;
        (function test(pointer) {
            var execBenchmark = function(benchmark) {
                var startAt = Date.now();
                $(benchmark.id).innerHTML += benchmark.description + ' start... ';
                benchmark.fnc(function() {
                    $(benchmark.id).innerHTML += 'done! in ' + (Date.now() - startAt) + 'ms<br>';
                    test(pointer + 1);
                });
            };

            if (self.benchmarks.length > pointer) {
                setTimeout(function() { execBenchmark(self.benchmarks[pointer]); }, 500);
            } else {
                done();
            }
        })(0);
    };

    return Benchmark;
});

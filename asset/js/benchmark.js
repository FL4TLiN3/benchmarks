
define([], function() {
    function Benchmark(title) {
        this.title = title;
        this.tests = [];
    }
    Benchmark.prototype.add = function(description, fnc) {
        this.tests.push({
            description: description,
            fnc: fnc
        });
    };
    Benchmark.prototype.start = function(done) {
        var pointer = 0;
        var self = this;
        (function test(pointer) {
            var startAt;
            var callback = function() {
                document.write('done! in ' + (Date.now() - startAt) + 'ms<br>');
                test(pointer + 1);
            };
            if (self.tests.length > pointer) {
                setTimeout(function() {
                    startAt = Date.now();
                    document.write(self.tests[pointer].description + ' start... ');
                    self.tests[pointer].fnc(callback);
                }, 500);
            } else {
                done();
            }
        })(0);
    };

    return Benchmark;
});

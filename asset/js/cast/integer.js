
define(['benchmark'], function(Benchmark) {
    var STRING = '1234567890';
    var times = 1e7;

    var benchmark = new Benchmark('cast String into Integer');
    benchmark.add('Number(string)', function(done) {
        for (var i = 0; i < times; i++) {
            Number(STRING);
        }
        done();
    });
    benchmark.add('parseInt(string)', function(done) {
        for (var i = 0; i < times; i++) {
            parseInt(STRING);
        }
        done();
    });
    benchmark.add('zero bit left shift', function(done) {
        for (var i = 0; i < times; i++) {
            STRING << 0;
        }
        done();
    });

    return benchmark;
});

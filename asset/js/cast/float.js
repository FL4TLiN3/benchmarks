
define(['benchmark'], function(Benchmark) {
    var STRING = '1.234567890';
    var times = 1e7;

    var benchmark = new Benchmark('cast String into Float');
    benchmark.add('Number(string)', function(done) {
        for (var i = 0; i < times; i++) {
            Number(STRING);
        }
        done();
    });
    benchmark.add('parseFloat(string)', function(done) {
        for (var i = 0; i < times; i++) {
            parseFloat(STRING);
        }
        done();
    });

    return benchmark;
});

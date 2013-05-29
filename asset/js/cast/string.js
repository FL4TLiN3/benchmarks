
define(['benchmark'], function(Benchmark) {
    var INTEGER = 1234567890;
    var FLOAT = 1.234567890;
    var times = 1e7;

    var benchmark = new Benchmark('cast Number into String');
    benchmark.add('integer.toString()', function(done) {
        for (var i = 0; i < times; i++) {
            INTEGER.toString();
        }
        done();
    });
    benchmark.add('\'\' + integer', function(done) {
        for (var i = 0; i < times; i++) {
            '' + INTEGER;
        }
        done();
    });
    benchmark.add('float.toString()', function(done) {
        for (var i = 0; i < times; i++) {
            FLOAT.toString();
        }
        done();
    });

    return benchmark;
});

window.assert = chai.assert;

describe('Stats', function () {
    // define variables for the services we want to access in tests
    var Stats,
        $log;

    beforeEach(function () {
        // load the module we want to test
        module('pspApp');

        // inject the services we want to test
        inject(function (_Stats_, _$log_) {
            Stats = _Stats_;
            $log = _$log_;
        })
    });

    describe('#DoSomething', function () {
        it('should log the message "something done!"', function () {
            // Arrange
            sinon.spy($log, 'info');

            // Act
            var re = Stats.test();
    
            // Assert
            assert($log.info.calledOnce);
            assert($log.info.calledWith('something done!'));

            // Cleanup
            $log.info.restore();
        });
    });
});
// window.assert = chai.assert;

// describe('Stats', function () {
//     // define variables for the services we want to access in tests
//     var Stats;
//         // $q;

//     beforeEach(function () {
//         // load the module we want to test
//         module('psppspApp');
//         // inject the services we want to test
//         inject(function (_Stats_) {
//             Stats = _Stats_;
//             // $q = _$q_;
//         })
//     });

//     describe('#DoSomething', function () {
//         it('should log the message "something done!"', function () {
//             // Arrange
//             // sinon.spy($log, 'info');

//             // Act
//             Stats.test();
    
//             // Assert
//             // assert($log.info.calledOnce);
//             // assert($log.info.calledWith('something done!'));

//             // Cleanup
//             $log.info.restore();
//         });
//     });
// });
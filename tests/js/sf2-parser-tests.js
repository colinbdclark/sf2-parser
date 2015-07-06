(function () {
    "use strict";

    QUnit.module("Parser Tests");

    function loadSoundFont (url, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "arraybuffer";
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    success(new Uint8Array(xhr.response));
                } else {
                    if (options.error) {
                        options.error(xhr.statusText);
                    }
                }
            }
        };
        xhr.send();
    }

    QUnit.test("Instantiating a parser", function () {
        var parser = new sf2.Parser();
        QUnit.ok(parser instanceof sf2.Parser);
    });

    QUnit.asyncTest("Parsing a SoundFont file", function () {
        function success (data) {
            var parser = new sf2.Parser(data);
            parser.parse();
            var presets = parser.getPresets();
            var instruments = parser.getInstruments();

            ok(instruments);
            start();
        }

        function error (err) {
            ok(false, "There was an error while parsing the test SoundFont file: " + err);
        }

        loadSoundFont("../sf2/sf_GMbank.sf2", success, error);
    });
}());

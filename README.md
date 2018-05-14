SoundFont 2 (and 3) Parser
==================

A library for parsing SoundFont (SF2, SF3) files in JavaScript.

License and Credits
-------------------

This library is based on the SoundFont 2 parser from [sf2synth.js, a SoundFont Synthesizer for WebMidiLink](https://github.com/gree/sf2synth.js). It was written by imaya / GREE Inc and licensed under the MIT license. Modifications to the original are by Colin Clark.

How to Use It
-------------

1. Load your SoundFont file using XHR's arraybuffer responseType and wrap it as a <code>Uint8Array</code>
2. Instantiate a new parser instance
3. Call the <code>parse()</code> method to parse the SoundFont file
4. Use the <code>getPresets()</code> and <code>getInstruments()</code> methods to access preset and instrument data
5. Sample data is stored in the parser's <code>sample</code> member variable

### Example Code ###

    // Utility function to load a SoundFont file from a URL using XMLHttpRequest.
    // The same origin policy will apply, as for all XHR requests.
    function loadSoundFont(url, success, error) {
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

    // Load and parse a SoundFont file.
    loadSoundFont("sf_GMbank.sf2", function (sfData) {
        var parser = new sf2.Parser(sf2Data);
        parser.parse();

        // Do something with the parsed SoundFont data.
    });

Summary of Changes from the Original
------------------------------------

* Separated out the SoundFont parsing library from the rest of the sf2synth synthesizer
* Removed the dependence on Google Closure
* Renamed the namespace to <code>sf2</code> for brevity
* Added boilerplate to support most JS module loaders, including CommonJS, AMD, Node.js and browser globals
* Added a Grunt-based build process
* Created Bower and npm packages

To Do
-----

* Improve the API of the parser by making it stateless
* Add support for parsing in a Web Worker so that the main browser thread doesn't block
* Massively extend the unit test coverage
* Add support for running the unit tests in Node.js

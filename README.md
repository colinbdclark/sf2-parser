SoundFont 2 Parser
==================

A library for parsing SoundFont (SF2) files in JavaScript.

License and Credits
-------------------

This library is based on the SoundFont 2 parser from [sf2synth.js, a SoundFont Synthesizer for WebMidiLink](https://github.com/gree/sf2synth.js). It was written by imaya / GREE Inc and licensed under the MIT license. Modifications to the original are by Colin Clark.

How to Use It
-------------

# Load your SoundFont file using XHR's arraybuffer responseType and wrap it as a <code>Uint8Array</code>
# Instantiate a new parser instance
# Call the <code>parse()</code> method

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

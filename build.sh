#!/bin/bash
browserify scripts/index.js > bundled/scripts.js
lessc style/main.less bundled/styles.css
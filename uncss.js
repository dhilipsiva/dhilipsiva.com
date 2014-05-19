/*
 * process.js
 * Copyright (C) 2014 dhilipsiva <dhilipsiva@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

var uncss, htmlFiles, options, fs, getHTMLFiles, getCSSFiles, cssFiles, CleanCSS, zlib;

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

uncss = require('uncss');
fs = require('fs');
CleanCSS = require('clean-css');
zlib = require('zlib');

htmlFiles   = [];
cssFiles = [];
options = {
    htmlroot : '_site',
    csspath: '_site/assets',
    ignore: [/#wrapper/],
};

getHTMLFiles = function (dir){
    var files = fs.readdirSync(dir);
    for(var i in files){
        if (!files.hasOwnProperty(i)) continue;
        var name = dir+'/'+files[i];
        if (fs.statSync(name).isDirectory()){
            getHTMLFiles(name);
        }else{
            if (name.endsWith(".html")) {
                htmlFiles.push(name);
            }
        }
    }
}

getCSSFiles = function (dir){
    var files = fs.readdirSync(dir);
    for(var i in files){
        if (!files.hasOwnProperty(i)) continue;
        var name = "/assets/" + files[i];
        if (name.endsWith(".css")) {
            cssFiles.push(name)
        }
    }
    return cssFiles;
}

console.log("Detecting all HTML files...");
getHTMLFiles(options.htmlroot);

console.log("Detacting all CSS files...");
options.stylesheets = getCSSFiles(options.csspath);

console.log("Indentifying and removing unused CSS rules...");
uncss(htmlFiles, options, function (error, output) {
    if (error) {
        console.log(error);
    }
    else{
        output = new CleanCSS({keepSpecialComments: 0}).minify(output);
        var cssFile = options.htmlroot + options.stylesheets[0];
        fs.writeFile(cssFile, output, function(err) {
            if(err) {
                console.log("ERROR:");
                console.log(err);
            } else {
                console.log("GZipping file...");
                var gzip = zlib.createGzip();
                var inp = fs.createReadStream(cssFile);
                var out = fs.createWriteStream(cssFile + ".gz");
                inp.pipe(gzip).pipe(out);

                console.log("the CSS file is optimized!");
            }
        });
    }
});

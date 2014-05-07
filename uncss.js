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
    ignore: [".repo-desc", /\.caption/],
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

getHTMLFiles(options.htmlroot);
options.stylesheets = getCSSFiles(options.csspath);

uncss(htmlFiles, options, function (error, output) {
    if (error) {
        console.log(error);
    }
    else{
        output = new CleanCSS({keepSpecialComments: 0}).minify(output);
        var cssFile = options.htmlroot + options.stylesheets[0];
        fs.writeFile(cssFile, output, function(err) {
            if(err) {
                console.log(err);
            } else {
                var gzip = zlib.createGzip();
                var inp = fs.createReadStream(cssFile);
                var out = fs.createWriteStream(cssFile + ".gz");
                inp.pipe(gzip).pipe(out);
                console.log("The file was saved!");
            }
        });
    }
});

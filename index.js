const request = require("node-superfetch");
const arrayBufferToBuffer = require('arraybuffer-to-buffer');

class login {
    constructor(key) {
        this.key = key;
    };

async memes() {
var { body } = await request.get(`https://flizz.progswer.me/api/memes?token=${this.key}`);
if (body.status == false) throw new Error("Ha ocurrido un error, verifica si tienes la última versión del Wrapper.");
return body.url;
};
async pat() {
var { body } = await request.get(`https://flizz.progswer.me/api/pat?token=${this.key}`);
if (body.status == false) throw new Error("Ha ocurrido un error, verifica si tienes la última versión del Wrapper.");
return body.url;
};
async kill() {
var { body } = await request.get(`https://flizz.progswer.me/api/kill?token=${this.key}`);
if (body.status == false) throw new Error("Ha ocurrido un error, verifica si tienes la última versión del Wrapper.");
return body.url;
};
async hug() {
var { body } = await request.get(`https://flizz.progswer.me/api/hug?token=${this.key}`);
if (body.status == false) throw new Error("Ha ocurrido un error, verifica si tienes la última versión del Wrapper.");
return body.url;
};
async kiss() {
var { body } = await request.get(`https://flizz.progswer.me/api/kiss?token=${this.key}`);
if (body.status == false) throw new Error("Ha ocurrido un error, verifica si tienes la última versión del Wrapper.");
return body.url;
};
async hentai() {
var { body } = await request.get(`https://flizz.progswer.me/api/hentai?token=${this.key}`);
if (body.status == false) throw new Error("Ha ocurrido un error, verifica si tienes la última versión del Wrapper.");
return body.url;
};
async porn() {
var { body } = await request.get(`https://flizz.progswer.me/api/porn?token=${this.key}`);
if (body.status == false) throw new Error("Ha ocurrido un error, verifica si tienes la última versión del Wrapper.");
return body.url;
};
async porn() {
    var { body } = await request.get(`https://flizz.progswer.me/api/porn?token=${this.key}`);
    if (body.status == false) throw new Error("Ha ocurrido un error, verifica si tienes la última versión del Wrapper.");
    return body.url;
};
async memories(imgurl) {
    var { body } = await requester.get(`https://www.flizz.progswer.me/api/memories?token=${token}&userimg=${imgurl}`);
    return arrayBufferToBuffer(body.url);
};
async iwantthat(imgurl) {
    var { body } = await requester.get(`https://www.flizz.progswer.me/api/iwantthat?token=${token}&userimg=${imgurl}`);
    return arrayBufferToBuffer(body.url);
};
async owo(imgurl1, imgurl2) {
    var { body } = await requester.get(`https://www.flizz.progswer.me/api/owo?token=${token}&userimg1=${imgurl1}&userimg2=${imgurl2}`);
    return arrayBufferToBuffer(body.url);
};
async praise(imgurl) {
    var { body } = await requester.get(`https://www.flizz.progswer.me/api/praise?token=${token}&userimg=${imgurl}`);
    return arrayBufferToBuffer(body.url);
};
};
module.exports = {
    login: login
};
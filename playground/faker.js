/**
 * Created by root on 9/17/17.
 */
var fs = require('fs');
var faker = require('faker/locale/en');
var objects = [];
function create(callback){for(var i=0; i<10; i++){
    objects.push(faker.helpers.createCard());
    callback();
}}
function log() {
    fs.writeFile('./data.json', JSON.stringify(objects, null, 2) , 'utf-8');
}
create(log);


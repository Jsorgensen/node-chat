import { read } from "fs";

var messages = [];
var id = 0;

module.exports = {
    create: (req, res) => {
        var {text, time} = req.body;
        messages.push({id: id,text: text, time: time})
        id++;
        res.staus(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        var originalID = req.params.id;
        var index = messages.findIndex(message => message.id === originalID);

        var {text} = req.body;
        messages[index] = {
            id: messages[index].id,
            text: text,
            time: messages[index].time
        };
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        var originalID = req.params.id;
        var index = messages.findIndex(message => message.id === originalID);

        messages.splice(index, 1);

        res.status(200).send(messages);
    }
}
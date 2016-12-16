import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// It wasn't clear in the Meteor guide that this is the way to actually load a
// CSS file from an npm package into the app.
import 'codemirror/lib/codemirror.css';

var CodeMirror = require('codemirror');

var cmInst = null;

Template.body.onRendered(function() {
  cmInst = CodeMirror(this.find("#cm"), {value: "Hello world!"});
  cmInst.setSize("100%", "100%");
});

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

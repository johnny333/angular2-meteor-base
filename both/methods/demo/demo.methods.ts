/**
 * Created by jakub on 31.01.17.
 */
import {check} from 'meteor/check';
import {Meteor} from 'meteor/meteor';
import {DemoCollection} from "../../collections/demo.collection";
import {IDemoModel} from "../../interfaces/idemo.model";

Meteor.methods({
    add:(element :IDemoModel)=>{
        if (!Meteor.userId()) {
            throw new Meteor.Error('403', 'No permissions!');
        }
        return DemoCollection.insert(element);
    },
    remove:(_id :string)=>{
        check(_id,String);
        if (!Meteor.userId()) {
            throw new Meteor.Error('403', 'No permissions!');
        }
        return DemoCollection.remove(_id);
    },
    update:(element :IDemoModel)=>{
        check(element._id,String);
        check(element.input,String);
        if (!Meteor.userId()) {
            throw new Meteor.Error('403', 'No permissions!');
        }
        return DemoCollection.update(element._id, {$addToSet: {input: element.input}});
    }
});
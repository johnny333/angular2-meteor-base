/**
 * Created by jakub on 31.01.17.
 */
import { Meteor } from 'meteor/meteor';
import {DemoCollection} from "../../../both/collections/demo.collection";

Meteor.publish('DemoCollection', ()=> {

    return DemoCollection.find();
});
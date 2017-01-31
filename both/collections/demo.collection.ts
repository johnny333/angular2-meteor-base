/**
 * Created by jakub on 31.01.17.
 */
import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';
import {IDemoModel} from "../interfaces/idemo.model";


export const DemoCollection = new MongoObservable.Collection<IDemoModel>('DemoCollection');

function loggedIn() {
    return !!Meteor.user();
}

DemoCollection.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
});
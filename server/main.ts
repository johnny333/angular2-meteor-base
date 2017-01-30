import {Role} from "../both/interfaces/irole.model";
import {Permission} from "../both/enums/permissions.enum";
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import {UserProfile} from "../both/interfaces/user_profile.model";
Meteor.startup(()=> {

    const roles: Array<Role> = [<Role>{
        permission: Permission.ADMIN,
    }];
    const admin: UserProfile = {
        roles,
        phone: ''
    };
    if (!Accounts.findUserByEmail('admin@programisci.eu')) {
        Accounts.createUser({
            username: 'admin',
            email: 'admin@programisci.eu',
            password: 'admin',
            profile: admin
        });
    }
});
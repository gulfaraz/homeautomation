import {bindable} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';

@inject(AuthService)

export class SideBar {
    _isAuthenticated = false;
    @bindable router = null;

    constructor(auth) {
        this.auth = auth;
    };

    get isAuthenticated() {
        return this.auth.isAuthenticated();
    };
}

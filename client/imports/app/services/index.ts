import {ToastService} from "./toast/toast.service";
import {NavBarService} from "./navbar/navbar.service";
import {AuthService} from "./auth/auth.service";
import { SweetAlertService } from 'ng2-sweetalert2';
import {ValidationService} from "./validation/validation.service";
/**
 * Created by jakub on 30.01.17.
 */
export const SERVICES_DECLARATIONS = [
    AuthService,
    ToastService,
    NavBarService,
    SweetAlertService,
    ValidationService
];
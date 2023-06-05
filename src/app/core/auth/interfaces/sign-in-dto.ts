import { AbstractControl } from "@angular/forms";

export interface SignInDTO {
    email: string | null | undefined,
    password: string | null | undefined,
}

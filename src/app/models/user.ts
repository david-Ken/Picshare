export interface User {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    birthdateInfo?: {
        formatted?: string
    },
    birthdate?: string

}

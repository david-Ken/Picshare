export interface User {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    birthdate: {
        formatted?: string
    }
}

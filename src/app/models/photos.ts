import { Comments } from "./comments";

export interface photos {
    firstName: string,
    lastName: string,
    pseudo: string,
    profilPhoto: string,
    online: string,
    location: string,
    description: string,
    image: string,
    likeNumber: number,
    commentNumber: number,
    comments?: Comments[]
}

import { Comments } from "./comments";

export interface photos {
    id: string,
    firstName: string,
    lastName: string,
    pseudo: string,
    profilPhoto: string,
    online: string,
    location: string,
    description: string,
    // like :boolean,
    image: string,
    likeNumber: number,
    commentNumber: number,
    shareNumber: number,
    comments?: Comments[]
}

export class Post {

    id?: number;
    name: string;
    body: string;
    image: File;

    constructor(name: string, body: string, image: File) {
        this.name = name;
        this.body = body; 
        this.image = image;

    }

}

export class Post {

    id?: number;
    name: string;
    header: string;
    body: string;
    image: File;

    constructor(name: string, header: string, body: string, image: File) {
        this.name = name;
        this.header = header;
        this.body = body; 
        this.image = image;

    }

}

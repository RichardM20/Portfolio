class ProjectModel{
    constructor(title, content, links, isAvaliable, img){
        this.title= title;
        this.content = content;
        this.links = links;
        this.isAvaliable  = isAvaliable;
        this.img = img;
    }
    static parse(data){
        return new ProjectModel(data.title,data.content,data.links,data.isAvaliable,data.img);
    }
}
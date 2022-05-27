export class Urls {
    constructor(){}
    urls={
        get:`${document.location.protocol}//${document.location.hostname}/api/get.php`,
        post:`${document.location.protocol}//${document.location.hostname}/api/post.php`,
        update:`${document.location.protocol}//${document.location.hostname}/api/update.php`
    }
}

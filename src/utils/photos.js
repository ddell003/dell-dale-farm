export const formatImgUrl = (url) => {
    let formatted = url;
    const urlParts = url.split("/");

    if(urlParts[2] === "drive.google.com"){
        const id = urlParts[(urlParts.length - 2)];
        //formatted = `https://drive.google.com/thumbnail?id=${id}`;
        formatted = `https://lh3.google.com/u/0/d/${id}`;
        console.log(id)
    }
    return formatted;
}

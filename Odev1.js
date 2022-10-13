const blogs = [
    {yazı:"Node js dersleri", yazar: "Kullanıcı 1"},
    {yazı:"patika dev dersleri", yazar: "Kullanıcı 2"},
    {yazı:"odev açıklaması", yazar: "Kullanıcı 3"},
    {yazı:"Deneme yazıları", yazar: "Kullanıcı 4"}
]

const listblog = () => {
    blogs.map((blog) =>{
        console.log(blog.yazı);
    })
}

//listblog();

const addBlog = (newBlog) => {
    const promissee = new Promise((resolve, reject) =>{
        blogs.push(newBlog);
        resolve(blogs);
        //reject("Bir Hata Oluştu");
    });
    return promissee;
};

async function showBlog() {
    try{
        await addBlog({yazı:"async-await odevi", yazar:"BerkayT"});
        listblog();
    }catch(error) {
        console.log(error);
    }
}

showBlog();
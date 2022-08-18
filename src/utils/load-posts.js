export const loadPosts = async () => {
    //vai realizar um async fetch na api do link e retornar uma promisse
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
    //retornando a promisse dos dois fetchs
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
    //transformando em formato json
    const postsJson = await posts.json();
    const photosJson = await photos.json();

    //vai mapear os posts através dos index para que para cada post, seja carregado apenas uma url (imagem)
    const postsAndPhotos = postsJson.map((post, index) => {
        return { ...post, cover: photosJson[index].url }
    });
    return postsAndPhotos;
}
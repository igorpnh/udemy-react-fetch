import React, { Component } from 'react'

import './styles.css';

import { Posts } from './components/Posts';
import { loadPosts } from './utils/load-posts';

class Home extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        await this.loadPosts();
    }

    loadPosts = async () => {
        //vai passar o conteúdo de postsAndPhotos para posts
        const postsAndPhotos = await loadPosts();
        this.setState({ posts: postsAndPhotos });
    }

    render() {
        const { posts } = this.state;
        /*map vai pegar o array existente e nos entregar um novo array */
        //sempre que utilizar um map, será necessário colocar uma key (algo que seja único de cada um, como por ex o ID nesse caso) no primeiro elemento para identificar
        //em react não se pode colocar mais de um elemento sem ter um elemento pai, como por exempo para colocar o h1 e o p é necessário coloca-los dentro de uma div ou um fragmento
        return (
            <section className='container'>
                <Posts posts={posts} />
            </section>
        )
    };
}

export default Home
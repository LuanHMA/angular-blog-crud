import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
    providedIn: 'root',
})
export class PostsService {
    private http = inject(HttpClient)

    getPosts() {
        return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    }

    getPostById({ postId }: { postId: string }) {
        return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    }
}

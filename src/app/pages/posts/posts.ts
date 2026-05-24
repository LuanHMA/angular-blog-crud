import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post.interface';
import { PostsLoading } from '../../components/loading/posts-loading/posts-loading';
import { finalize } from 'rxjs';

@Component({
    selector: 'app-posts',
    imports: [RouterLink, PostsLoading],
    templateUrl: './posts.html',
})
export class Posts {
    private postsService = inject(PostsService)

    posts = signal<Post[]>([])
    isLoading = signal(false)
    error = signal<string | null>(null)

    ngOnInit() {
        this.isLoading.set(true)

        this.postsService.getPosts()
            .pipe(
                finalize(() => this.isLoading.set(false)),
            )
            .subscribe({
                next: (data) => {
                    this.posts.set(data)
                },
                error: (err) => {
                    console.log(err)
                    this.error.set("There was an error retrieving the posts, try again later")
                },
            })
    }
}

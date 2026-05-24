import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post.interface';
import { finalize } from 'rxjs';
import { LucideArrowLeft } from "@lucide/angular"

@Component({
    selector: 'app-post-details',
    imports: [LucideArrowLeft, RouterLink],
    templateUrl: './post-details.html',
})
export default class PostDetails {
    private activedRoute = inject(ActivatedRoute)
    private postsService = inject(PostsService)

    error = signal<string | null>(null)
    isLoading = signal(false)
    post = signal<Post | null>(null)
    postData = new Date().toLocaleDateString()

    ngOnInit() {
        const postId = this.activedRoute.snapshot.paramMap.get('id')


        if (!postId) {
            this.error.set('Post not found')
            return
        }

        this.isLoading.set(true)

        this.postsService.getPostById({ postId })
            .pipe(
                finalize(() => this.isLoading.set(false))
            )
            .subscribe({
                next: (data) => {
                    this.post.set(data)
                },
                error: (err) => {
                    console.log(err)
                    this.error.set("There was an error retrieving the post, try again later")
                },
            })
    }
}

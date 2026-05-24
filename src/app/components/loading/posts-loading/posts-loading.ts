import { Component } from '@angular/core';

@Component({
    selector: 'app-posts-loading',
    imports: [],
    templateUrl: './posts-loading.html',
})
export class PostsLoading {
    loadingItems = Array.from({ length: 16 })
}

import { Routes } from '@angular/router';
import { Posts } from './pages/posts/posts';
import PostDetails from './pages/post-details/post-details';

export const routes: Routes = [
    {
        path: "",
        redirectTo: '/posts',
        pathMatch: 'full' //Precisa inserir o pathMatch full pois por padrão o angular usa o 'prefix', que faz com que analise se a rota que vai ser redirecionada possui o prefixo "/" e como todas possuem, ele acaba entrando em um loop infinito, para isso utilizamos o full, pois assim ele analisa o caminho da rota inteiro ao inves do prefixo.
    },
    {
        path: "posts",
        component: Posts,
        title: "Angular News - Posts"
    },
    {
        path: "posts/:id",
        component: PostDetails,
        title: "Angular News - Post Details",
    },
];

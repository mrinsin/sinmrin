import { NgModule } from "@angular/core";
import { RouterModule, PreloadAllModules } from "@angular/router";
import { WelcomeComponent } from "./home/welcome.component";
import { PageNotFoundComponent } from "./page-not-found.component";

const appRoutes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'posts', loadChildren: './blog-posts/blog-posts.module#BlogPostsModule' },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
  ];

@NgModule({
   imports: [
    RouterModule.forRoot(
        appRoutes, 
        { preloadingStrategy: PreloadAllModules }
    )
],
   exports: [
       RouterModule 
   ]
})
export class AppRoutingModule {

}
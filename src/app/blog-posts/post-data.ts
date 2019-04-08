import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Post } from './post';

export class PostData implements InMemoryDbService {

  createDb() {
    const posts: Post[] = [
      {
        'id': 1,
       'postBody': 'Hi is this a first post or what',
       'postDate':'1/2/2019',
       'postTitle': 'the first ever post',
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
        'category': 'Garden',
        'tags': ['rake', 'leaf', 'yard', 'home']
      },
      {
        'id': 2,
       'postBody': 'Hi is this a second post or what',
       'postDate':'1/2/2019',
       'postTitle': 'the second ever post',
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
        'category': 'Dog',
        'tags': ['woof', 'puppy', 'bark', 'fur']
      },
      {
        'id': 3,
       'postBody': 'Hi is this a third post or what',
       'postDate':'1/2/2019',
       'postTitle': 'the third ever post',
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
        'category': 'Horse',
        'tags': ['neigh', 'barn', 'yard', 'tail']
      },
      {
        'id': 4,
       'postBody': 'Hi is this a fourth post or what',
       'postDate':'1/2/2019',
       'postTitle': 'the fourth ever post',
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
        'category': 'Book',
        'tags': ['page', 'publish', 'read', 'author']
      },
     
    ];
    return { posts };
  }
}

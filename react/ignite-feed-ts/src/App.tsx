import { Header } from "./components/Header.tsx";

import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar.tsx";
import { Post, PostType } from "./components/Post.tsx";

const post: PostType[] = [
  {
    id: 1,
    author: {
      name: 'Tiago Souza',
      avatarUrl: 'https://github.com/tiago0214.png',
      role: 'Web developer'
    },
    publishedAt: new Date('2024-05-11 08:30:00'),
    content: [
      {
      type: 'paragraph',
      content: 'Alo galera'
      }, 
      {
      type: 'paragraph',
      content: 'Tudo na santa paz'
      },
      {
      type: 'paragraph',
      content: 'Hi everyone'
      }, 
      {
      type: 'link',
      content: 'Finishing'
      }
    ]
  },
  {
    id: 2,
    author: {
      name: 'Matheus Gomes',
      avatarUrl: 'https://github.com/matheus0214.png',
      role: 'Web developer'
    },
    publishedAt: new Date('2024-09-11 08:30:00'),
    content: [
      {
      type: 'paragraph',
      content: 'Alo galera'
      }, 
      {
      type: 'paragraph',
      content: 'Tudo na santa paz'
      },
      {
      type: 'paragraph',
      content: 'Hi everyone'
      }, 
      {
      type: 'link',
      content: 'Finishing'
      }
    ]
  }
]



export function App() {
  return ( 
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        
        <main>
          {post.map(post =>{
            return(
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
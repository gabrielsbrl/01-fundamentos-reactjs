import Post from './Post';

import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar'
function App() {

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Gabriel" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit nisi corrupti iure. Reiciendis obcaecati dolore quod placeat, magni voluptas veritatis saepe eveniet asperiores mollitia rerum porro tempore, consequuntur ullam?"/>
        </main>
      </div>      
    </div>
  )
}

export default App

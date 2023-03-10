import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="Developer unsplash free content" />
            <div className={styles.profile}>
                <img 
                    className={styles.avatar} 
                    src="https://avatars.githubusercontent.com/u/25852691?v=4" 
                    alt="user profile image" 
                />
                <strong>Gabriel Laines</strong>
                <span>Web developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/> Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}
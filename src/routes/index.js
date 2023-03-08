import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Book from '../pages/Book';
import Contact from '../pages/Contact';

export const routes = [
    {
        path: '/', component: Home
    },
    {
        path: 'menu', component: Menu
    },
    {
        path: '/book', component: Book
    },
    {
        path: '/contact', component: Contact
    },
]
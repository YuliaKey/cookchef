import './assets/styles/style.scss'
import Content from './pages/Homepage/Homepage';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import styles from './App.module.scss';

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

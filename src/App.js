import './assets/styles/style.scss'
import Content from './component/layout/Content';
import Footer from './component/layout/Footer';
import Header from './component/layout/Header';
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

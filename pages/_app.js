import '../styles/globals.css'
// 做全局的配置
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }
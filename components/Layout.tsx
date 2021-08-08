import Link from 'next/link'
import Head from 'next/head'

//titleは各ページのタブのタイトルに対応する。デフォルトでNext.jsを指定している
//React.FCでジェネリック型で引数の型を指定している
//childrenは別コンポーネントやpageからインポートして使う時のpropsとして使うLayoutコンポーネントが
//ラップするコンテンツをchildrenとしてまとめる

interface TITLE {
  title: string
}

const Layout: React.FC<TITLE> = ({ children, title = 'Nextjs' }) => {
  return(
    <div className="flex justify-center items-center flex-col min-h-screen font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
              <a 
                data-testid="home-nav"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                Home
              </a>
              </Link>
              <Link href="/blog-page">
                <a
                  data-testid="blog-nav"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  Blog
                </a>
              </Link>
              <Link href="/comment-page">
                <a
                  data-testid="comment-nav"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  Commnent
                </a>
              </Link>
              <Link href="/context-page">
                <a
                  data-testid="context-nav"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  Context
                </a>
              </Link>
              <Link href="/task-page">
                <a
                  data-testid="task-nav"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  Todos
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a 
          className="flex items-center"
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
          >
          Powered by
          <img/>
        </a>
      </footer>
    </div>
  )
}
export default Layout
//型のための導入
import { NextPage } from 'next'
//Nrest.jsの組み込みコンポーネント
import Head from 'next/head'

//ページコンポーネントのpropsの型定義（ここでは空）
type SSGProps = {}

//SSG向けのページを実装
//NextPageはNext.jsのPage向けの型
//NextPage<props>でpropsが入るPageであることを明示
const SSG: NextPage<SSGProps> = () => {
    return (
        <div>
            {/* HEadコンポーネントで包むと、その要素は<head>タグに配置されます　*/}
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href='@\favicon.ico' />
            </Head>
            <main>
                <p>
                    このぺージは静的サイト生成によってビルド時に生成されたページです。
                </p>
            </main>
        </div>
    )
}

export default SSG
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'   // next/routerからuseRouterというフックを取り込む
import { ParsedUrlQuery } from 'querystring'
import { Interface } from 'readline'


// Nextjs の動的ルーティングを使った演習。パスパラメータを使って複数ページを１つのファイルで作成できる。


type PostProps = {
    id: string
}

const Post: NextPage<PostProps> = (props) => {
    const { id } = props
    const router = useRouter()

    if (router.isFallback) {
        // フォールバック向けの表示を返す
        return <div>Loading...</div>
        
    }

    return <div>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href='@\favicon.ico' />
        </Head>
        <main>
                <p>
                    このぺージは静的サイト生成によってビルド時に生成されたページです。
                </p>
                <p>{`/post/${id}に対応するページです。`}</p>
            </main>

    </div>
}

// getStaticPathsは生成したいページのパスパラメータの組み合わせを返す
// このファイルはpages/posts/[id].tsxなので、パスパラメータとしてidの値を返す必要がある




export const getStaticPaths: GetStaticPaths = async () => {

    //　それぞれのページのパスパラメータをまとめたもの
    const paths = [
        {
            params: {
                id: '1',
            },
        },
        {
            params: {
                id: '2',
            },
        },
        {
            params: {
                id: '3',
            },
        },
    ]

    // fallbackをfalseにすると、pathsで定義されたページ以外は404ページを表示する。
    return (
    { paths, fallback: false }
    )
}

// パラメータの型の定義
interface PostParams extends ParsedUrlQuery{
    id: string
}

// getStaticPaths実行後にそれぞれのパスの対してgetStaticPropsが実行される
export const getStaticProps: GetStaticPaths<PostProps, PostParams> = async (context) => {
    return {
        props: {
            //paramsにgetStaticPathで指定した値がそれぞれ入っている
            id: context.params!['id']
        },
    }
}




export default Post
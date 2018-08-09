import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render () {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel='stylesheet' href='/_next/static/style.css'/>
                    <title>Hoojobs</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
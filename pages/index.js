import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey I'm Vali Olar From Balkan</p>
        <p>
          (This is a begginging of a beautiful friendship){' '}
        </p>
      </section>
    </Layout>
  );
}
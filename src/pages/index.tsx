import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

import { FiCalendar, FiUser } from 'react-icons/fi';
import Link from 'next/link';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
      <main className={commonStyles.container}>
        <Head>
          <Header />
        </Head>
        <section className={styles.posts}>
          <div className={styles.post}>
            <Link href="/posts/[uid]" as="/posts/first-post">
              <a>
                <strong>Como utilizar Hooks</strong>
                <p>Pensando em sincronização em vez de ciclos de vida.</p>
                <ul>
                  <li>
                    <FiCalendar />
                    15 Mar 2021
                  </li>
                  <li>
                    <FiUser />
                    Joseph Oliveira
                  </li>
                </ul>
              </a>
            </Link>
          </div>

          <div className={styles.post}>
            <Link href="/posts/[uid]" as="/posts/first-post">
              <a>
                <strong>Como utilizar Hooks</strong>
                <p>Pensando em sincronização em vez de ciclos de vida.</p>
                <ul>
                  <li>
                    <FiCalendar />
                    15 Mar 2021
                  </li>
                  <li>
                    <FiUser />
                    Joseph Oliveira
                  </li>
                </ul>
              </a>
            </Link>
          </div>

          <div className={styles.post}>
            <Link href="/posts/[uid]" as="/posts/first-post">
              <a>
                <strong>Como utilizar Hooks</strong>
                <p>Pensando em sincronização em vez de ciclos de vida.</p>
                <ul>
                  <li>
                    <FiCalendar />
                    15 Mar 2021
                  </li>
                  <li>
                    <FiUser />
                    Joseph Oliveira
                  </li>
                </ul>
              </a>
            </Link>
          </div>

          <div className={styles.post}>
            <Link href="/posts/[uid]" as="/posts/first-post">
              <a>
                <strong>Como utilizar Hooks</strong>
                <p>Pensando em sincronização em vez de ciclos de vida.</p>
                <ul>
                  <li>
                    <FiCalendar />
                    15 Mar 2021
                  </li>
                  <li>
                    <FiUser />
                    Joseph Oliveira
                  </li>
                </ul>
              </a>
            </Link>
          </div>

          <div className={styles.post}>
            <Link href="/posts/[uid]" as="/posts/first-post">
              <a>
                <strong>Como utilizar Hooks</strong>
                <p>Pensando em sincronização em vez de ciclos de vida.</p>
                <ul>
                  <li>
                    <FiCalendar />
                    15 Mar 2021
                  </li>
                  <li>
                    <FiUser />
                    Joseph Oliveira
                  </li>
                </ul>
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient({});
//   // const postsResponse = await prismic.getByType(TODO);

//   // TODO
// };

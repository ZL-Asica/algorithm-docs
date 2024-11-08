import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.introSection}>
      <div className='container'>
        <h1 className={styles.siteTitle}>{siteConfig.title}</h1>
        <p className={styles.siteSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary', styles.readNotesButton)}
            to='/intro'
          >
            阅读笔记
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description='LeetCode题解和算法思路的总结和笔记'
    >
      <HomepageHeader />
      <main className={styles.mainContent}>
        {/* Maybe add latest doc here */}
      </main>
    </Layout>
  );
}

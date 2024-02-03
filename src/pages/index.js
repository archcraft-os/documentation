import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img className="banner__img" alt="Banner" src="https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/openbox/main.png"/>
        <h1 className="hero__title"><Translate>Archcraft</Translate></h1>
        <p className="hero__subtitle"><Translate>Yet another minimal Linux distribution, based on Arch Linux.</Translate></p>
        <div className={styles.buttons}>
          <Link
            className="button button--lg"
            to="/docs/intro">
            <Translate>Get Started</Translate>
          </Link>
          <Link
            className="button button--dl button--lg"
            to="https://archcraft.io/download#second">
            <Translate>Download</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate({message: 'Welcome to Archcraft Wiki'})}
      description="Archcraft Wiki / Tutorials / News, Etc">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

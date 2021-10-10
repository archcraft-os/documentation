import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({message :'Minimal',}),
    Svg: require('../../static/img/minimal.svg').default,
    description: (
      <>
		<Translate>
		Archcraft is very minimal and lightweight.
		It can run under 500Mb of memory as It only uses window managers and lightweight applications.
		</Translate>
      </>
    ),
  },
  {
    title: translate({message :'Stunning',}),
    Svg: require('../../static/img/stunning.svg').default,
    description: (
      <>
		<Translate>
		Flat and pastel colors, the consistency among all the UI elements, 
		And various themes make Archcraft look very clean, minimal and Stunning.
		</Translate>
      </>
    ),
  },
  {
    title: translate({message :'Powerful',}),
    Svg: require('../../static/img/powerful.svg').default,
    description: (
      <>
		<Translate>
		With built-in support for AUR, Chaotic AUR and being lightweight, 
		Archcraft gives you the power to do whatever you want on your Linux PC.
		</Translate>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

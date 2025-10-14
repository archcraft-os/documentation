import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({message :'Minimal',}),
    Svg: require('../../../static/img/minimal.svg').default,
    description: (
		<Translate>
			Archcraft stays minimal and responsive. 
			With lightweight apps and window managers, it runs smoothly on under 500 MB of memory.
		</Translate>
    ),
  },
  {
    title: translate({message :'Stunning',}),
    Svg: require('../../../static/img/stunning.svg').default,
    description: (
		<Translate>
			Flat and pastel colors, consistent UI elements, and multiple themes make Archcraft look clean, minimal, and stunning.
		</Translate>
    ),
  },
  {
    title: translate({message :'Powerful',}),
    Svg: require('../../../static/img/powerful.svg').default,
    description: (
		<Translate>
			With cutting-edge software, seamless AUR access, and a minimal footprint, Archcraft empowers you to do more on your Linux PC.
		</Translate>
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

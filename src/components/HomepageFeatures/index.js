import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({message :'Lightweight',}),
    Svg: require('../../../static/img/minimal.svg').default,
    description: (
		<Translate>
			Lightweight apps and window managers keep Archcraft responsive, with a desktop that can run on under 800 MB of RAM.
		</Translate>
    ),
  },
  {
    title: translate({message :'Refined',}),
    Svg: require('../../../static/img/stunning.svg').default,
    description: (
		<Translate>
			Muted color palettes, consistent interface styling, and a selection of themes give Archcraft a clean, cohesive look.
		</Translate>
    ),
  },
  {
    title: translate({message :'Flexible',}),
    Svg: require('../../../static/img/powerful.svg').default,
    description: (
		<Translate>
			Get up-to-date software from Arch Linux repositories and access the Arch User Repository (AUR) to tailor your setup.
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

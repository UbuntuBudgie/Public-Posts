import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/input-keyboard.svg').default,
    description: (
      <>
      Friendly to newcomers from other Operating Systems, programmers and normal users alike.
      </>
    ),
  },
  {
    title: 'Updated',
    Svg: require('@site/static/img/system-software-update.svg').default,
    description: (
      <>
      Easy to update and maintain. Update to next release or wait for big upgrade. The choice is always yours.
      </>
    ),
  },
  {
    title: 'Powerful',
    Svg: require('@site/static/img/cpu.svg').default,
    description: (
      <>
      Customizable, optimized for performance on both the desktop and laptop.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <center><Svg className={styles.featureSvg} role="img" /></center>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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

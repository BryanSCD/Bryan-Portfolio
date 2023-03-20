import { useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { CloudsComponent, CloudsComponentProps } from './CloudsComponent';

export default function SeparatorDesktopComponent({
  separatorLabel,
  separatorCloud,
  separatorCloudsBackgroundSrc: separatorCloudsBackground,
  separatorColor,
  ...rest
}: CloudsComponentProps) {
  const separatorRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: separatorRef,
    offset: ['start end', 'end start'],
  });

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const translateXCloud = useTransform(smoothScrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <CloudsComponent
      ref={separatorRef}
      separatorCloud={separatorCloud}
      separatorCloudsBackgroundSrc={separatorCloudsBackground}
      separatorColor={separatorColor}
      separatorLabel={separatorLabel}
      showSeparatorCloudsBackground
      translateXCloud={translateXCloud}
      translateXHeading={translateXCloud}
      {...rest}
    />
  );
}

import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { CloudsComponent, CloudsComponentProps } from './CloudsComponent';

export type SeparatorMobileComponentProps = Omit<CloudsComponentProps, 'separatorCloudsBackground'>;

export default function SeparatorMobileComponent({
  separatorLabel,
  separatorCloud,
  separatorColor,
}: SeparatorMobileComponentProps) {
  const separatorRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: separatorRef,
    offset: ['start end', 'end start'],
  });

  const translateXCloud = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <CloudsComponent
      ref={separatorRef}
      separatorCloud={separatorCloud}
      separatorColor={separatorColor}
      separatorLabel={separatorLabel}
      translateXCloud={translateXCloud}
    />
  );
}

import { useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { CloudsComponent, CloudsComponentProps } from "./CloudsComponent";

export type SeparatorDesktopComponentProps = Omit<
  CloudsComponentProps,
  "translateXCloud" | "translateXHeading"
>;

export function SeparatorDesktopComponent({
  separatorLabel,
  separatorCloud,
  separatorCloudsBackground,
  separatorColor,
}: SeparatorDesktopComponentProps) {
  const separatorRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: separatorRef,
    offset: ["start end", "end start"],
  });

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const translateXCloud = useTransform(
    smoothScrollYProgress,
    [0, 1],
    ["-10%", "10%"]
  );

  return (
    <CloudsComponent
      ref={separatorRef}
      separatorLabel={separatorLabel}
      separatorCloud={separatorCloud}
      separatorCloudsBackground={separatorCloudsBackground}
      separatorColor={separatorColor}
      translateXCloud={translateXCloud}
      translateXHeading={translateXCloud}
    ></CloudsComponent>
  );
}

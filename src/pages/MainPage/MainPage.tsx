import { Avatar } from "@readyplayerme/visage";
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

import { FireworksHandlers } from "@fireworks-js/react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Page } from "../../components";
import { Box, StackProps } from "@chakra-ui/react";
import Particles from "react-particles";
import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { particlesJSON } from "./Particles";

export const MainPage = ({ ...rest }: StackProps) => {
  const fireworks = useRef<FireworksHandlers>(null);
  const divAvatar = useRef<HTMLDivElement>(null);
  const divFireworks = useRef<HTMLDivElement>(null);

  const [optimize, setOptimize] = useState<boolean>(true);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fireworks.current?.updateOptions({ intensity: 1 });
    }, 4000);
  }, []);

  const fireworksLayer: BannerLayer = {
    children: (
      <motion.div ref={divFireworks} hidden={!optimize}>
        <Particles
          id='tsparticles'
          options={particlesJSON}
          init={particlesInit}
        />
      </motion.div>
    ),
  };

  const avatar: BannerLayer = {
    children: (
      <motion.div ref={divAvatar}>
        <Avatar
          ambientLightColor='#fff5b6'
          ambientLightIntensity={0.25}
          animationSrc='/main_page/male-idle.glb'
          cameraInitialDistance={0.9}
          cameraTarget={1.59}
          dirLightColor='#002aff'
          dirLightIntensity={5}
          headMovement
          modelSrc='/main_page/bryanavatar.glb'
          onLoaded={function noRefCheck() {}}
          onLoading={function noRefCheck() {}}
          scale={1}
          spotLightAngle={0.314}
          spotLightColor='#fff5b6'
          spotLightIntensity={1}
          style={{
            background: "transparent",
            height: "100%",
            visibility: `${optimize ? "visible" : "hidden"}`,
            position: "absolute",
          }}
        />
      </motion.div>
    ),
  };

  const touchLayer: BannerLayer = {
    children: <Box width='100%' height='100%' />,
    onClickCapture: (e) => {
      const event = new MouseEvent("click", e.nativeEvent);
      divAvatar.current?.lastChild?.dispatchEvent(event);
      divFireworks.current?.lastChild?.lastChild?.dispatchEvent(event);
    },
    onPointerMoveCapture: (e) => {
      const event = new PointerEvent("pointermove", e.nativeEvent);
      divAvatar.current?.lastChild?.dispatchEvent(event);
      divFireworks.current?.lastChild?.lastChild?.dispatchEvent(event);
    },
    onEnter: () => {
      setOptimize(true);
    },
    onExit: () => {
      setOptimize(false);
    },
  };

  return (
    <Page {...rest} childrenPaddingX='0' childrenPaddingY='0'>
      <ParallaxBanner
        layers={[fireworksLayer, avatar, touchLayer]}
        style={{ height: "100vh" }}
      />
    </Page>
  );
};

import { Avatar } from "@readyplayerme/visage";

import { Box, forwardRef, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { Page, PageProps } from "../../components";
import { particlesJSON } from "./Particles";

export const MainPage = forwardRef<PageProps, "div">(({ ...rest }, ref) => {
  const particles = useRef<Particles>(null);
  const divAvatar = useRef<HTMLDivElement>(null);
  const divParticles = useRef<HTMLDivElement>(null);

  const [optimize, setOptimize] = useState<boolean>(true);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLayer = (
    <motion.div
      ref={divParticles}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        zIndex: 10,
      }}
    >
      <Particles
        id='tsparticles'
        options={particlesJSON}
        init={particlesInit}
        ref={particles}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
    </motion.div>
  );

  const avatar = (
    <motion.div
      ref={divAvatar}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        zIndex: 20,
      }}
    >
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
        scale={1}
        spotLightAngle={0.314}
        spotLightColor='#fff5b6'
        spotLightIntensity={1}
        style={{
          background: "transparent",
          position: "absolute",
          width: "100%",
          height: "100%",
          visibility: `${optimize ? "visible" : "hidden"}`,
        }}
      />
    </motion.div>
  );

  const touchLayer = (
    <Box
      width='100%'
      height='100%'
      zIndex='30'
      onClickCapture={(e) => {
        const event = new MouseEvent("click", e.nativeEvent);
        divAvatar.current?.lastChild?.dispatchEvent(event);
        divParticles.current?.lastChild?.lastChild?.dispatchEvent(event);
      }}
      onPointerMoveCapture={(e) => {
        const event = new PointerEvent("pointermove", e.nativeEvent);
        divAvatar.current?.lastChild?.dispatchEvent(event);
        divParticles.current?.lastChild?.lastChild?.dispatchEvent(event);
      }}
      // onEnter: () => {
      //   setOptimize(true);
      // },
      // onExit: () => {
      //   setOptimize(false);
      // },
    />
  );

  return (
    <Page ref={ref} childrenPaddingX='0' childrenPaddingY='0' {...rest}>
      <VStack height='100vh' width='100%' spacing='-100vh'>
        {particlesLayer}
        {avatar}
        {touchLayer}
      </VStack>
    </Page>
  );
});

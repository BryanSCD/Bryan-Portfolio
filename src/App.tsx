import { useEffect, useRef, useState } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Sidebar, SidebarItem } from "./components";
import {
  IoBag,
  IoBook,
  IoFolderOpen,
  IoHappy,
  IoPerson,
} from "react-icons/io5";
import { ExperiencePage, MainPage, ProjectsPage, StudiesPage } from "./pages";
import { ContactPage } from "./pages/ContactPage";

function App() {
  const isSmall = useBreakpointValue({ base: true, md: false });
  const isLarge = useBreakpointValue({ base: true, xl: false });

  const sidebarRef = useRef<HTMLDivElement>(null);

  const mainPageRef = useRef<HTMLDivElement>(null);
  const experiencePageRef = useRef<HTMLDivElement>(null);
  const projectsPageRef = useRef<HTMLDivElement>(null);
  const studiesPageRef = useRef<HTMLDivElement>(null);
  const contactPageRef = useRef<HTMLDivElement>(null);

  const [sidebarOffsetWidth, setSidebarOffsetWidth] = useState<
    string | undefined
  >(undefined);

  useEffect(() => {
    if (!isSmall && sidebarRef.current) {
      setSidebarOffsetWidth(
        `${
          (document.documentElement.clientWidth -
            sidebarRef.current?.getBoundingClientRect().right) *
            2 +
          sidebarRef.current?.clientWidth
        }px`
      );
    } else {
      setSidebarOffsetWidth(undefined);
    }
  }, [isSmall, sidebarRef]);

  return (
    <>
      <Sidebar
        ref={sidebarRef}
        right={isSmall ? "auto" : "4"}
        top={isSmall ? "auto" : "50%"}
        bottom={isSmall ? "4" : "auto"}
        left={isSmall ? "50%" : "auto"}
        transform={isSmall ? "translate(-50%, 0)" : "translate(0, -50%)"}
        direction={isSmall ? "row" : "column"}
        zIndex='1000'
      >
        <SidebarItem
          icon={<IoHappy />}
          label='Main'
          onButtonClick={() =>
            window.scrollTo({
              top: mainPageRef.current?.offsetTop as number,
              behavior: "smooth",
            })
          }
        />
        <SidebarItem
          icon={<IoFolderOpen />}
          label='Experience'
          onButtonClick={() =>
            window.scrollTo({
              top: experiencePageRef.current?.offsetTop as number,
              behavior: "smooth",
            })
          }
        />
        <SidebarItem
          icon={<IoBag />}
          label='Projects'
          onButtonClick={() =>
            window.scrollTo({
              top: projectsPageRef.current?.offsetTop as number,
              behavior: "smooth",
            })
          }
        />
        <SidebarItem
          icon={<IoBook />}
          label='Studies'
          onButtonClick={() =>
            window.scrollTo({
              top: studiesPageRef.current?.offsetTop as number,
              behavior: "smooth",
            })
          }
        />

        <SidebarItem
          icon={<IoPerson />}
          label='Contact'
          onButtonClick={() =>
            window.scrollTo({
              top: contactPageRef.current?.offsetTop as number,
              behavior: "smooth",
            })
          }
        />
      </Sidebar>
      <Box
        bgGradient='linear-gradient(180deg, #09090b 0%, #021120 33%, #665cb2 80%)'
        zIndex='10'
      >
        <MainPage ref={mainPageRef} />
        <ExperiencePage
          ref={experiencePageRef}
          separatorColor='black'
          marginTop='-20'
          childrenPaddingRight={sidebarOffsetWidth}
        />
        <ProjectsPage
          ref={projectsPageRef}
          separatorColor='#030F1B'
          marginTop={isLarge ? "0" : "-40"}
          childrenPaddingRight={sidebarOffsetWidth}
        />
        <StudiesPage
          ref={studiesPageRef}
          separatorColor='#282E58'
          childrenPaddingRight={sidebarOffsetWidth}
        />
        <ContactPage
          ref={contactPageRef}
          separatorColor='#564EA2'
          childrenPaddingRight={isLarge ? sidebarOffsetWidth : undefined}
          paddingBottom={isSmall ? "20" : undefined}
        />
      </Box>
    </>
  );
}

export default App;

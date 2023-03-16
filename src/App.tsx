import { useRef } from "react";
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

  const mainPageRef = useRef<HTMLDivElement>(null);
  const experiencePageRef = useRef<HTMLDivElement>(null);
  const projectsPageRef = useRef<HTMLDivElement>(null);
  const studiesPageRef = useRef<HTMLDivElement>(null);
  const contactPageRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Sidebar zIndex='1000'>
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
        />
        <ProjectsPage
          ref={projectsPageRef}
          separatorColor='#030F1B'
          marginTop={isSmall ? "0" : "-40"}
        />
        <StudiesPage ref={studiesPageRef} separatorColor='#282E58' />
        <ContactPage ref={contactPageRef} separatorColor='#564EA2' />
      </Box>
    </>
  );
}

export default App;

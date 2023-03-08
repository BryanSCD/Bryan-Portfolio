import { Box } from "@chakra-ui/react";
import { ExperiencePage, MainPage, ProjectsPage, StudiesPage } from "./pages";
import { ContactPage } from "./pages/ContactPage";

function App() {
  return (
    <Box
      className='App'
      bgGradient='linear-gradient(180deg, #09090b 0%, #021120 33%, #CDDEE8 90%)'
    >
      <MainPage />
      <ExperiencePage separatorColor='black' />
      <ProjectsPage separatorColor='#293B4C' marginTop='-40' />
      <StudiesPage separatorColor='#556B7F' />
      <ContactPage separatorColor='#BACFE2' />
    </Box>
  );
}

export default App;

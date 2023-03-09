import { Box } from "@chakra-ui/react";
import { ExperiencePage, MainPage, ProjectsPage, StudiesPage } from "./pages";
import { ContactPage } from "./pages/ContactPage";

function App() {
  return (
    <Box
      className='App'
      bgGradient='linear-gradient(180deg, #09090b 0%, #021120 33%, #665cb2 80%)'
    >
      <MainPage />
      <ExperiencePage separatorColor='black' />
      <ProjectsPage separatorColor='#030F1B' marginTop='-40' />
      <StudiesPage separatorColor='#282E58' />
      <ContactPage separatorColor='#564EA2' />
    </Box>
  );
}

export default App;

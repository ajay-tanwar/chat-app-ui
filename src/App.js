import React from "react";
import DrawerComponent from "./components/Drawer";
import { Box } from "@mui/material";
import IconComponent from "./components/IconComponent";

function App() {
  return (
    <div className="App">
      <Box sx={{ display: 'flex', height: '100vh' }}>
          <IconComponent />
          <DrawerComponent />
      </Box>

    </div>
  );
}

export default App;

import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";
import createEmotionCache from "@/utils/createEmotionCache";

const clientSideEmotionCache = createEmotionCache()

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
 return (
   <ThemeProvider theme={theme}>
     <Component {...pageProps} />
   </ThemeProvider>
 );
}

export default MyApp;
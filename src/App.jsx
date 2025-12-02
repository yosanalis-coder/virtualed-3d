{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red183\green111\blue247;\red23\green24\blue24;\red202\green202\blue202;
\red54\green192\blue160;\red212\green212\blue212;\red113\green192\blue131;\red109\green115\blue120;\red246\green124\blue48;
\red238\green46\blue56;}
{\*\expandedcolortbl;;\cssrgb\c77255\c54118\c97647;\cssrgb\c11765\c12157\c12549;\cssrgb\c83137\c83137\c83137;
\cssrgb\c23922\c78824\c69020;\cssrgb\c86275\c86275\c86275;\cssrgb\c50588\c78824\c58431;\cssrgb\c50196\c52549\c54510;\cssrgb\c98039\c56471\c24314;
\cssrgb\c95686\c27843\c27843;}
\margl1440\margr1440\vieww28680\viewh18100\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 React\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  useState\cf6 \strokec6 ,\cf4 \strokec4  useEffect \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'react'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  initializeApp \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'firebase/app'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  getAuth\cf6 \strokec6 ,\cf4 \strokec4  signInAnonymously\cf6 \strokec6 ,\cf4 \strokec4  onAuthStateChanged \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'firebase/auth'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   getFirestore\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   collection\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   addDoc\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   onSnapshot\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   doc\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   updateDoc\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   increment\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   query\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   orderBy \cb1 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'firebase/firestore'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 Box\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 Rotate3d\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 Heart\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 Upload\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 X\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 Maximize2\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 Loader2\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 AlertCircle\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 HelpCircle\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 ScanFace\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 Trophy\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 Cuboid\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'lucide-react'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 // Import the functions you need from the SDKs you need\
import \{ initializeApp \} from "firebase/app";\
import \{ getAnalytics \} from "firebase/analytics";\
// TODO: Add SDKs for Firebase products that you want to use\
// https://firebase.google.com/docs/web/setup#available-libraries\
\
// Your web app's Firebase configuration\
// For Firebase JS SDK v7.20.0 and later, measurementId is optional\
const firebaseConfig = \{\
  apiKey: "AIzaSyC9-3BJ9LOUaVIRCKGx4GJazxe6p5jnVy8",\
  authDomain: "virtualed-3d.firebaseapp.com",\
  projectId: "virtualed-3d",\
  storageBucket: "virtualed-3d.firebasestorage.app",\
  messagingSenderId: "532276598760",\
  appId: "1:532276598760:web:d4c57ee41c8b16719cf65d",\
  measurementId: "G-RXZ2PCZ59E"\
\};\
\
// Initialize Firebase\
const app = initializeApp(firebaseConfig);\
const analytics = getAnalytics(app);\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   storageBucket\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "TU_BUCKET.appspot.com"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   messagingSenderId\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "TU_SENDER_ID"\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   appId\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "TU_APP_ID"\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 // Inicializaci\'f3n de la App (Robusta)\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 let\cf4 \strokec4  auth\cf6 \strokec6 ,\cf4 \strokec4  db\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 try\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf8 \strokec8 // Verificamos que se hayan puesto las credenciales reales antes de iniciar\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 firebaseConfig\cf6 \strokec6 .\cf4 \strokec4 apiKey \cf6 \strokec6 !==\cf4 \strokec4  \cf7 \strokec7 "PEGA_AQUI_TU_API_KEY"\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  app \cf6 \strokec6 =\cf4 \strokec4  initializeApp\cf6 \strokec6 (\cf4 \strokec4 firebaseConfig\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     auth \cf6 \strokec6 =\cf4 \strokec4  getAuth\cf6 \strokec6 (\cf4 \strokec4 app\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     db \cf6 \strokec6 =\cf4 \strokec4  getFirestore\cf6 \strokec6 (\cf4 \strokec4 app\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 else\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     console\cf6 \strokec6 .\cf4 \strokec4 warn\cf6 \strokec6 (\cf7 \strokec7 "\uc0\u9888 \u65039  FALTA CONFIGURAR FIREBASE: Pega tus credenciales en src/App.jsx"\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 catch\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   console\cf6 \strokec6 .\cf4 \strokec4 error\cf6 \strokec6 (\cf7 \strokec7 "Error inicializando Firebase:"\cf6 \strokec6 ,\cf4 \strokec4  e\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 // ID de la App para separar datos si usas la misma DB para varias cosas\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  appId \cf6 \strokec6 =\cf4 \strokec4  \cf7 \strokec7 'virtualed-mes-app'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\
\cf2 \cb3 \strokec2 export\cf4 \strokec4  \cf2 \strokec2 default\cf4 \strokec4  \cf2 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 App\cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 user\cf6 \strokec6 ,\cf4 \strokec4  setUser\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 projects\cf6 \strokec6 ,\cf4 \strokec4  setProjects\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 ([]);\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 localUploads\cf6 \strokec6 ,\cf4 \strokec4  setLocalUploads\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\{\});\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 loading\cf6 \strokec6 ,\cf4 \strokec4  setLoading\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 true\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 uploading\cf6 \strokec6 ,\cf4 \strokec4  setUploading\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 selectedProject\cf6 \strokec6 ,\cf4 \strokec4  setSelectedProject\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 isUploadModalOpen\cf6 \strokec6 ,\cf4 \strokec4  setIsUploadModalOpen\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 uploadError\cf6 \strokec6 ,\cf4 \strokec4  setUploadError\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 initError\cf6 \strokec6 ,\cf4 \strokec4  setInitError\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3   \cf8 \strokec8 // 1. Autenticaci\'f3n An\'f3nima\cf4 \cb1 \strokec4 \
\cb3   useEffect\cf6 \strokec6 (()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (!\cf4 \strokec4 auth\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf8 \strokec8 // Si auth no est\'e1 definido, es porque no han puesto la config\cf4 \cb1 \strokec4 \
\cb3       setLoading\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 return\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\
\cb3     \cf2 \strokec2 const\cf4 \strokec4  initAuth \cf6 \strokec6 =\cf4 \strokec4  \cf2 \strokec2 async\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 try\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 await\cf4 \strokec4  signInAnonymously\cf6 \strokec6 (\cf4 \strokec4 auth\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 catch\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 error\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         console\cf6 \strokec6 .\cf4 \strokec4 error\cf6 \strokec6 (\cf7 \strokec7 "Error de autenticaci\'f3n:"\cf6 \strokec6 ,\cf4 \strokec4  error\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\cb3     initAuth\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  unsubscribe \cf6 \strokec6 =\cf4 \strokec4  onAuthStateChanged\cf6 \strokec6 (\cf4 \strokec4 auth\cf6 \strokec6 ,\cf4 \strokec4  setUser\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  unsubscribe\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \strokec4  \cf6 \strokec6 []);\cf4 \cb1 \strokec4 \
\
\cb3   \cf8 \strokec8 // 2. Cargar Script de Model Viewer (Google)\cf4 \cb1 \strokec4 \
\cb3   useEffect\cf6 \strokec6 (()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 try\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (!\cf4 \strokec4 document\cf6 \strokec6 .\cf4 \strokec4 querySelector\cf6 \strokec6 (\cf7 \strokec7 'script[src*="model-viewer"]'\cf6 \strokec6 ))\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 const\cf4 \strokec4  script \cf6 \strokec6 =\cf4 \strokec4  document\cf6 \strokec6 .\cf4 \strokec4 createElement\cf6 \strokec6 (\cf7 \strokec7 'script'\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3         script\cf6 \strokec6 .\cf4 \strokec4 type \cf6 \strokec6 =\cf4 \strokec4  \cf7 \strokec7 'module'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3         script\cf6 \strokec6 .\cf4 \strokec4 src \cf6 \strokec6 =\cf4 \strokec4  \cf7 \strokec7 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3         document\cf6 \strokec6 .\cf4 \strokec4 body\cf6 \strokec6 .\cf4 \strokec4 appendChild\cf6 \strokec6 (\cf4 \strokec4 script\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 catch\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       console\cf6 \strokec6 .\cf4 \strokec4 error\cf6 \strokec6 (\cf7 \strokec7 "Error cargando Model Viewer"\cf6 \strokec6 ,\cf4 \strokec4  e\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \strokec4  \cf6 \strokec6 []);\cf4 \cb1 \strokec4 \
\
\cb3   \cf8 \strokec8 // 3. Escuchar Proyectos en Tiempo Real (Firestore)\cf4 \cb1 \strokec4 \
\cb3   useEffect\cf6 \strokec6 (()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (!\cf4 \strokec4 user \cf6 \strokec6 ||\cf4 \strokec4  \cf6 \strokec6 !\cf4 \strokec4 db\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3     \cf8 \strokec8 // Timer de seguridad por si la conexi\'f3n es lenta\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  safetyTimer \cf6 \strokec6 =\cf4 \strokec4  setTimeout\cf6 \strokec6 (()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 loading\cf6 \strokec6 )\cf4 \strokec4  setLoading\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \},\cf4 \strokec4  \cf9 \strokec9 5000\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3     \cf8 \strokec8 // Usamos la colecci\'f3n v9\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  q \cf6 \strokec6 =\cf4 \strokec4  query\cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3       collection\cf6 \strokec6 (\cf4 \strokec4 db\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'artifacts'\cf6 \strokec6 ,\cf4 \strokec4  appId\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'public'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'data'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'student_projects_v9'\cf6 \strokec6 ),\cf4 \cb1 \strokec4 \
\cb3       orderBy\cf6 \strokec6 (\cf7 \strokec7 'timestamp'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'desc'\cf6 \strokec6 )\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3     \cf2 \strokec2 const\cf4 \strokec4  unsubscribe \cf6 \strokec6 =\cf4 \strokec4  onSnapshot\cf6 \strokec6 (\cf4 \strokec4 q\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3       \cf6 \strokec6 (\cf4 \strokec4 snapshot\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 const\cf4 \strokec4  fetchedProjects \cf6 \strokec6 =\cf4 \strokec4  snapshot\cf6 \strokec6 .\cf4 \strokec4 docs\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 doc \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \cb1 \strokec4 \
\cb3           id\cf6 \strokec6 :\cf4 \strokec4  doc\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 ...\cf4 \strokec4 doc\cf6 \strokec6 .\cf4 \strokec4 data\cf6 \strokec6 ()\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \}));\cf4 \cb1 \strokec4 \
\cb3         setProjects\cf6 \strokec6 (\cf4 \strokec4 fetchedProjects\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3         setLoading\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3         clearTimeout\cf6 \strokec6 (\cf4 \strokec4 safetyTimer\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 (\cf4 \strokec4 error\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         console\cf6 \strokec6 .\cf4 \strokec4 error\cf6 \strokec6 (\cf7 \strokec7 "Error leyendo base de datos:"\cf6 \strokec6 ,\cf4 \strokec4  error\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3         setLoading\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3     \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       unsubscribe\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3       clearTimeout\cf6 \strokec6 (\cf4 \strokec4 safetyTimer\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 user\cf6 \strokec6 ]);\cf4 \cb1 \strokec4 \
\
\cb3   \cf8 \strokec8 // Funci\'f3n para Votar\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  handleVote \cf6 \strokec6 =\cf4 \strokec4  \cf2 \strokec2 async\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 e\cf6 \strokec6 ,\cf4 \strokec4  project\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     e\cf6 \strokec6 .\cf4 \strokec4 stopPropagation\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (!\cf4 \strokec4 user \cf6 \strokec6 ||\cf4 \strokec4  \cf6 \strokec6 !\cf4 \strokec4 db\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  projectRef \cf6 \strokec6 =\cf4 \strokec4  doc\cf6 \strokec6 (\cf4 \strokec4 db\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'artifacts'\cf6 \strokec6 ,\cf4 \strokec4  appId\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'public'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'data'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'student_projects_v9'\cf6 \strokec6 ,\cf4 \strokec4  project\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 try\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 await\cf4 \strokec4  updateDoc\cf6 \strokec6 (\cf4 \strokec4 projectRef\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  votes\cf6 \strokec6 :\cf4 \strokec4  increment\cf6 \strokec6 (\cf9 \strokec9 1\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \});\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 catch\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 error\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  console\cf6 \strokec6 .\cf4 \strokec4 error\cf6 \strokec6 (\cf7 \strokec7 "Error al votar:"\cf6 \strokec6 ,\cf4 \strokec4  error\cf6 \strokec6 );\cf4 \strokec4  \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf8 \strokec8 // Funci\'f3n para Subir Proyecto\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  handleUpload \cf6 \strokec6 =\cf4 \strokec4  \cf2 \strokec2 async\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     e\cf6 \strokec6 .\cf4 \strokec4 preventDefault\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (!\cf4 \strokec4 db\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         alert\cf6 \strokec6 (\cf7 \strokec7 "Error: No hay conexi\'f3n a la base de datos."\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 return\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     setUploading\cf6 \strokec6 (\cf2 \strokec2 true\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     setUploadError\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  form \cf6 \strokec6 =\cf4 \strokec4  e\cf6 \strokec6 .\cf4 \strokec4 target\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  title \cf6 \strokec6 =\cf4 \strokec4  form\cf6 \strokec6 .\cf4 \strokec4 title\cf6 \strokec6 .\cf4 \strokec4 value\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  student \cf6 \strokec6 =\cf4 \strokec4  form\cf6 \strokec6 .\cf4 \strokec4 student\cf6 \strokec6 .\cf4 \strokec4 value\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  file \cf6 \strokec6 =\cf4 \strokec4  form\cf6 \strokec6 .\cf4 \strokec4 file\cf6 \strokec6 .\cf4 \strokec4 files\cf6 \strokec6 [\cf9 \strokec9 0\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (!\cf4 \strokec4 file\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       setUploadError\cf6 \strokec6 (\cf7 \strokec7 "Por favor selecciona un archivo."\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       setUploading\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 return\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\
\cb3     \cf2 \strokec2 const\cf4 \strokec4  fileName \cf6 \strokec6 =\cf4 \strokec4  file\cf6 \strokec6 .\cf4 \strokec4 name\cf6 \strokec6 .\cf4 \strokec4 toLowerCase\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 fileName\cf6 \strokec6 .\cf4 \strokec4 endsWith\cf6 \strokec6 (\cf7 \strokec7 '.blend'\cf6 \strokec6 ))\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       setUploadError\cf6 \strokec6 (\cf7 \strokec7 "\uc0\u10060  NO subas archivos .blend. Exporta desde Blender a .glb"\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       setUploading\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 return\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\
\cb3     \cf8 \strokec8 // Creamos URL local para visualizaci\'f3n r\'e1pida\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  finalModelUrl \cf6 \strokec6 =\cf4 \strokec4  \cf5 \strokec5 URL\cf6 \strokec6 .\cf4 \strokec4 createObjectURL\cf6 \strokec6 (\cf4 \strokec4 file\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  isLocal \cf6 \strokec6 =\cf4 \strokec4  \cf2 \strokec2 true\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\
\cb3     \cf2 \strokec2 try\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  docRef \cf6 \strokec6 =\cf4 \strokec4  \cf2 \strokec2 await\cf4 \strokec4  addDoc\cf6 \strokec6 (\cf4 \strokec4 collection\cf6 \strokec6 (\cf4 \strokec4 db\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'artifacts'\cf6 \strokec6 ,\cf4 \strokec4  appId\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'public'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'data'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'student_projects_v9'\cf6 \strokec6 ),\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         title\cf6 \strokec6 :\cf4 \strokec4  title\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         studentName\cf6 \strokec6 :\cf4 \strokec4  student\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         votes\cf6 \strokec6 :\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         modelUrl\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "LOCAL_FILE"\cf6 \strokec6 ,\cf4 \strokec4  \cf8 \strokec8 // Marca especial\cf4 \cb1 \strokec4 \
\cb3         fileName\cf6 \strokec6 :\cf4 \strokec4  file\cf6 \strokec6 .\cf4 \strokec4 name\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3         timestamp\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 new\cf4 \strokec4  \cf5 \strokec5 Date\cf6 \strokec6 ().\cf4 \strokec4 toISOString\cf6 \strokec6 (),\cf4 \cb1 \strokec4 \
\cb3         description\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Modelo 3D subido por el estudiante."\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \});\cf4 \cb1 \strokec4 \
\
\cb3       \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 isLocal\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         setLocalUploads\cf6 \strokec6 (\cf4 \strokec4 prev \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 ...\cf4 \strokec4 prev\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 [\cf4 \strokec4 docRef\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ]:\cf4 \strokec4  finalModelUrl\cb1 \
\cb3         \cf6 \strokec6 \}));\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\
\cb3       setUploading\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       setIsUploadModalOpen\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       form\cf6 \strokec6 .\cf4 \strokec4 reset\cf6 \strokec6 ();\cf4 \cb1 \strokec4 \
\cb3       \cb1 \
\cb3     \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 catch\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 error\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       console\cf6 \strokec6 .\cf4 \strokec4 error\cf6 \strokec6 (\cf7 \strokec7 "Error subiendo:"\cf6 \strokec6 ,\cf4 \strokec4  error\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       setUploadError\cf6 \strokec6 (\cf7 \strokec7 "Error de conexi\'f3n. Intenta de nuevo."\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       setUploading\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf8 \strokec8 // Helper para resolver URL\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  getModelUrl \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 project\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 project\cf6 \strokec6 .\cf4 \strokec4 modelUrl \cf6 \strokec6 ===\cf4 \strokec4  \cf7 \strokec7 "LOCAL_FILE"\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 return\cf4 \strokec4  localUploads\cf6 \strokec6 [\cf4 \strokec4 project\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 ||\cf4 \strokec4  \cf7 \strokec7 "https://modelviewer.dev/shared-assets/models/Astronaut.glb"\cf6 \strokec6 ;\cf4 \strokec4  \cb1 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 return\cf4 \strokec4  project\cf6 \strokec6 .\cf4 \strokec4 modelUrl\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf8 \strokec8 // --- Componente Visor 3D ---\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 ModelViewerComponent\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \strokec4  src\cf6 \strokec6 ,\cf4 \strokec4  alt \cf6 \strokec6 \})\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 loadError\cf6 \strokec6 ,\cf4 \strokec4  setLoadError\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 isLoaded\cf6 \strokec6 ,\cf4 \strokec4  setIsLoaded\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3     \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "w-full h-full bg-[#111827] relative overflow-hidden"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "absolute inset-0 bg-radial-gradient from-gray-800/20 to-transparent pointer-events-none"\cf4 \strokec4 ></div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3         \cf6 \strokec6 \{\cf4 \strokec4 loadError \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "absolute inset-0 flex flex-col items-center justify-center text-center p-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf5 \strokec5 AlertCircle\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-8 h-8 text-red-500 mb-2"\cf4 \strokec4  />\cb1 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-sm font-semibold text-gray-300"\cf6 \strokec6 >\cf5 \strokec5 Error\cf4 \strokec4  al cargar \cf9 \strokec9 3\cf5 \strokec5 D\cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3           <>\cb1 \
\cb3             \cf6 \strokec6 \{\cf8 \strokec8 /* @ts-ignore - model-viewer es un custom element */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 model\cf6 \strokec6 -\cf4 \strokec4 viewer\cb1 \
\cb3               src\cf6 \strokec6 =\{\cf4 \strokec4 src\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3               alt\cf6 \strokec6 =\{\cf4 \strokec4 alt\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3               auto\cf6 \strokec6 -\cf4 \strokec4 rotate\cb1 \
\cb3               camera\cf6 \strokec6 -\cf4 \strokec4 controls\cb1 \
\cb3               shadow\cf6 \strokec6 -\cf4 \strokec4 intensity\cf6 \strokec6 =\cf7 \strokec7 "2"\cf4 \strokec4  \cb1 \
\cb3               shadow\cf6 \strokec6 -\cf4 \strokec4 softness\cf6 \strokec6 =\cf7 \strokec7 "1"\cf4 \cb1 \strokec4 \
\cb3               style\cf6 \strokec6 =\{\{\cf4 \strokec4  width\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '100%'\cf6 \strokec6 ,\cf4 \strokec4  height\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '100%'\cf4 \strokec4  \cf6 \strokec6 \}\}\cf4 \cb1 \strokec4 \
\cb3               ar\cb1 \
\cb3               loading\cf6 \strokec6 =\cf7 \strokec7 "eager"\cf4 \cb1 \strokec4 \
\cb3               camera\cf6 \strokec6 -\cf4 \strokec4 orbit\cf6 \strokec6 =\cf7 \strokec7 "45deg 55deg 2.5m"\cf4 \cb1 \strokec4 \
\cb3               on\cf6 \strokec6 -\cf4 \strokec4 error\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setLoadError\cf6 \strokec6 (\cf2 \strokec2 true\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3               on\cf6 \strokec6 -\cf4 \strokec4 load\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setIsLoaded\cf6 \strokec6 (\cf2 \strokec2 true\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3               exposure\cf6 \strokec6 =\cf7 \strokec7 "1.0"\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div slot\cf6 \strokec6 =\cf7 \strokec7 "poster"\cf4 \strokec4  className\cf6 \strokec6 =\{\cf7 \strokec7 `absolute inset-0 flex flex-col items-center justify-center bg-[#111827] transition-opacity duration-500 \cf6 \strokec6 $\{\cf4 \strokec4 isLoaded \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'opacity-0 pointer-events-none'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'opacity-100'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3                  \cf6 \strokec6 <\cf5 \strokec5 Loader2\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-8 h-8 text-[#10b981] animate-spin mb-2"\cf4 \strokec4  />\cb1 \
\cb3                  \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "text-xs text-gray-400 font-medium"\cf6 \strokec6 >\cf5 \strokec5 Cargando\cf4 \strokec4  pieza\cf6 \strokec6 ...</\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 model\cf6 \strokec6 -\cf4 \strokec4 viewer\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           </>\cb1 \
\cb3         \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf8 \strokec8 // Renderizado si falta configuraci\'f3n\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (!\cf4 \strokec4 auth \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 !\cf4 \strokec4 loading\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "min-h-screen flex items-center justify-center bg-slate-50 p-4 text-center"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "max-w-md bg-white p-8 rounded-xl shadow-xl"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3            \cf6 \strokec6 <\cf5 \strokec5 AlertCircle\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-12 h-12 text-yellow-500 mx-auto mb-4"\cf4 \strokec4  />\cb1 \
\cb3            \cf6 \strokec6 <\cf4 \strokec4 h2 className\cf6 \strokec6 =\cf7 \strokec7 "text-xl font-bold text-slate-800 mb-2"\cf6 \strokec6 >\cf5 \strokec5 Falta\cf4 \strokec4  \cf5 \strokec5 Configuraci\cf10 \strokec10 \'f3\cf4 \strokec4 n\cf6 \strokec6 </\cf4 \strokec4 h2\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3            \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-slate-600 mb-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3              \cf5 \strokec5 Para\cf4 \strokec4  que la app funcione\cf6 \strokec6 ,\cf4 \strokec4  necesitas pegar tus credenciales de \cf5 \strokec5 Firebase\cf4 \strokec4  en el archivo \cf6 \strokec6 <\cf4 \strokec4 code\cf6 \strokec6 >\cf5 \strokec5 App\cf6 \strokec6 .\cf4 \strokec4 jsx\cf6 \strokec6 </\cf4 \strokec4 code\cf6 \strokec6 >.\cf4 \cb1 \strokec4 \
\cb3            \cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3            \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-xs text-slate-400 bg-slate-100 p-2 rounded"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3              \cf5 \strokec5 Busca\cf4 \strokec4  la l\cf10 \strokec10 \'ed\cf4 \strokec4 nea\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 code\cf6 \strokec6 >\cf2 \strokec2 const\cf4 \strokec4  firebaseConfig \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ...</\cf4 \strokec4 code\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3            \cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\
\cb3   \cf8 \strokec8 // --- UI PRINCIPAL ---\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "min-h-screen bg-[#f8fafc] font-sans text-slate-800"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cb1 \
\cb3       \cf6 \strokec6 \{\cf8 \strokec8 /* Navbar con Branding VirtualEd-MES */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 nav className\cf6 \strokec6 =\cf7 \strokec7 "bg-[#1e3a8a] text-white sticky top-0 z-40 shadow-md"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "max-w-7xl mx-auto px-4 py-2 sm:h-16 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-3 w-full sm:w-auto overflow-hidden"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-white/10 p-2 rounded-lg backdrop-blur-sm flex-shrink-0"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf5 \strokec5 Cuboid\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-6 h-6 text-[#10b981]"\cf4 \strokec4  />\cb1 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex flex-col justify-center min-w-0"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 h1 className\cf6 \strokec6 =\cf7 \strokec7 "font-bold text-base sm:text-lg leading-tight flex flex-col sm:flex-row sm:items-baseline gap-0 sm:gap-2"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 span\cf6 \strokec6 >\cf5 \strokec5 VirtualEd\cf6 \strokec6 -\cf5 \strokec5 MES\cf6 \strokec6 </\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "text-xs sm:text-sm font-normal text-blue-200 opacity-90 truncate"\cf6 \strokec6 >(\cf5 \strokec5 Modeling\cf4 \strokec4  \cf6 \strokec6 &\cf4 \strokec4  \cf5 \strokec5 Simulation\cf4 \strokec4  \cf5 \strokec5 Program\cf6 \strokec6 )</\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 h1\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-[10px] sm:text-xs text-[#10b981] uppercase tracking-wider font-semibold opacity-100 mt-0.5 truncate"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf5 \strokec5 Dise\cf10 \strokec10 \'f1\cf4 \strokec4 o de \cf5 \strokec5 Experiencias\cf4 \strokec4  \cf5 \strokec5 Inmersivas\cf4 \strokec4  \cf9 \strokec9 3\cf5 \strokec5 D\cf4 \strokec4  \cf5 \strokec5 Competition\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cb1 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 button \cb1 \
\cb3             onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setIsUploadModalOpen\cf6 \strokec6 (\cf2 \strokec2 true\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3             className\cf6 \strokec6 =\cf7 \strokec7 "w-full sm:w-auto bg-[#10b981] hover:bg-[#059669] text-white px-4 py-1.5 rounded-full text-sm font-bold transition-all shadow-lg flex items-center justify-center gap-2 flex-shrink-0"\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf5 \strokec5 Upload\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-4 h-4"\cf4 \strokec4  />\cb1 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 span\cf6 \strokec6 >\cf5 \strokec5 Subir\cf4 \strokec4  \cf5 \strokec5 Proyecto\cf6 \strokec6 </\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 nav\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3       \cf6 \strokec6 \{\cf8 \strokec8 /* Contenido Principal */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 main className\cf6 \strokec6 =\cf7 \strokec7 "max-w-7xl mx-auto px-4 py-8"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "mb-8 flex items-center gap-3"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "h-8 w-1 bg-[#10b981] rounded-full"\cf4 \strokec4 ></div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 h2 className\cf6 \strokec6 =\cf7 \strokec7 "text-2xl font-bold text-[#1e3a8a]"\cf6 \strokec6 >\cf5 \strokec5 Galer\cf10 \strokec10 \'ed\cf4 \strokec4 a de \cf5 \strokec5 Dise\cf10 \strokec10 \'f1\cf4 \strokec4 o\cf6 \strokec6 </\cf4 \strokec4 h2\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3         \cf6 \strokec6 \{\cf4 \strokec4 loading \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex flex-col justify-center items-center h-40"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf5 \strokec5 Loader2\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-10 h-10 text-[#1e3a8a] animate-spin mb-3"\cf4 \strokec4  />\cb1 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-slate-500 text-sm font-medium"\cf6 \strokec6 >\cf5 \strokec5 Cargando\cf4 \strokec4  galer\cf10 \strokec10 \'ed\cf4 \strokec4 a\cf6 \strokec6 ...</\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  projects\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 ===\cf4 \strokec4  \cf9 \strokec9 0\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "text-center py-16 bg-white rounded-2xl border-2 border-dashed border-slate-200 shadow-sm"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf5 \strokec5 Trophy\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-10 h-10 text-[#1e3a8a]"\cf4 \strokec4  />\cb1 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 h3 className\cf6 \strokec6 =\cf7 \strokec7 "text-lg font-bold text-slate-700"\cf6 \strokec6 >\cf5 \strokec5 La\cf4 \strokec4  competencia comienza ahora\cf6 \strokec6 </\cf4 \strokec4 h3\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-slate-500 text-sm mb-6 max-w-sm mx-auto"\cf6 \strokec6 >\cf5 \strokec5 A\cf10 \strokec10 \'fa\cf4 \strokec4 n no hay dise\cf10 \strokec10 \'f1\cf4 \strokec4 os subidos\cf6 \strokec6 .\cf4 \strokec4  \cf10 \strokec10 \'a1\cf5 \strokec5 S\cf10 \strokec10 \'e9\cf4 \strokec4  el primer estudiante en presentar tu trabajo\cf6 \strokec6 !</\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setIsUploadModalOpen\cf6 \strokec6 (\cf2 \strokec2 true\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "bg-[#1e3a8a] text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-blue-900 transition-colors"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf5 \strokec5 Subir\cf4 \strokec4  mi \cf5 \strokec5 Dise\cf10 \strokec10 \'f1\cf4 \strokec4 o\cb1 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 \{\cf4 \strokec4 projects\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 ((\cf4 \strokec4 project\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div \cb1 \
\cb3                 key\cf6 \strokec6 =\{\cf4 \strokec4 project\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 \}\cf4 \strokec4  \cb1 \
\cb3                 onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setSelectedProject\cf6 \strokec6 (\cf4 \strokec4 project\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                 className\cf6 \strokec6 =\cf7 \strokec7 "bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 cursor-pointer group flex flex-col h-full"\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 \{\cf8 \strokec8 /* 3D Preview - Dark Mode */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "h-64 bg-[#111827] relative overflow-hidden group-hover:ring-2 ring-[#10b981] transition-all"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                    \cf6 \strokec6 <\cf5 \strokec5 ModelViewerComponent\cf4 \strokec4  \cb1 \
\cb3                      src\cf6 \strokec6 =\{\cf4 \strokec4 getModelUrl\cf6 \strokec6 (\cf4 \strokec4 project\cf6 \strokec6 )\}\cf4 \strokec4  \cb1 \
\cb3                      alt\cf6 \strokec6 =\{\cf4 \strokec4 project\cf6 \strokec6 .\cf4 \strokec4 title\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                    />\cb1 \
\cb3                    \cb1 \
\cb3                    \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent pt-12"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                      \cf6 \strokec6 <\cf4 \strokec4 h3 className\cf6 \strokec6 =\cf7 \strokec7 "text-white font-bold truncate text-lg drop-shadow-md"\cf6 \strokec6 >\{\cf4 \strokec4 project\cf6 \strokec6 .\cf4 \strokec4 title\cf6 \strokec6 \}</\cf4 \strokec4 h3\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                      \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-gray-300 text-xs font-medium drop-shadow-md"\cf6 \strokec6 >\{\cf4 \strokec4 project\cf6 \strokec6 .\cf4 \strokec4 studentName\cf6 \strokec6 \}</\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                    \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3                    \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "absolute top-3 right-3 bg-white/20 hover:bg-white/30 backdrop-blur text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 <\cf5 \strokec5 Maximize2\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-4 h-4"\cf4 \strokec4  />\cb1 \
\cb3                    \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "p-4 bg-white flex justify-between items-center border-t border-slate-50"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-1 text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf5 \strokec5 Rotate3d\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-3 h-3"\cf4 \strokec4  /> \cf9 \strokec9 360\cf10 \strokec10 \'b0\cf4 \strokec4  \cf5 \strokec5 View\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cb1 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 button \cb1 \
\cb3                     onClick\cf6 \strokec6 =\{(\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  handleVote\cf6 \strokec6 (\cf4 \strokec4 e\cf6 \strokec6 ,\cf4 \strokec4  project\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                     className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-2 text-slate-600 hover:text-red-500 transition-colors bg-slate-50 hover:bg-red-50 px-3 py-1.5 rounded-full border border-slate-100"\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf5 \strokec5 Heart\cf4 \strokec4  className\cf6 \strokec6 =\{\cf7 \strokec7 `w-4 h-4 \cf6 \strokec6 $\{\cf4 \strokec4 project\cf6 \strokec6 .\cf4 \strokec4 votes \cf6 \strokec6 >\cf4 \strokec4  \cf9 \strokec9 0\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'fill-red-500 text-red-500'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'text-slate-400'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}\cf4 \strokec4  />\cb1 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "text-sm font-bold"\cf6 \strokec6 >\{\cf4 \strokec4 project\cf6 \strokec6 .\cf4 \strokec4 votes\cf6 \strokec6 \}</\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 ))\}\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 main\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3       \cf6 \strokec6 \{\cf8 \strokec8 /* Modal Subida */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4 isUploadModalOpen \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-white rounded-2xl w-full max-w-md p-0 shadow-2xl relative overflow-hidden"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-[#1e3a8a] p-4 flex justify-between items-center"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                \cf6 \strokec6 <\cf4 \strokec4 h3 className\cf6 \strokec6 =\cf7 \strokec7 "text-lg font-bold text-white flex items-center gap-2"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                  \cf6 \strokec6 <\cf5 \strokec5 Upload\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-5 h-5"\cf4 \strokec4  /> \cf5 \strokec5 Subir\cf4 \strokec4  \cf5 \strokec5 Dise\cf10 \strokec10 \'f1\cf4 \strokec4 o\cb1 \
\cb3                \cf6 \strokec6 </\cf4 \strokec4 h3\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                \cf6 \strokec6 <\cf4 \strokec4 button onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setIsUploadModalOpen\cf6 \strokec6 (\cf2 \strokec2 false\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "text-white/70 hover:text-white"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                  \cf6 \strokec6 <\cf5 \strokec5 X\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-6 h-6"\cf4 \strokec4  />\cb1 \
\cb3                \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cb1 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "p-6"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-blue-50 border-l-4 border-blue-500 p-4 mb-5 rounded-r text-sm"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 h4 className\cf6 \strokec6 =\cf7 \strokec7 "font-bold text-blue-900 mb-1 flex items-center gap-2"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                    \cf6 \strokec6 <\cf5 \strokec5 HelpCircle\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-4 h-4"\cf4 \strokec4  /> \cf5 \strokec5 Importante\cf6 \strokec6 :\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 h4\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-blue-800 mb-1"\cf6 \strokec6 >\cf5 \strokec5 Para\cf4 \strokec4  que se vea correctamente:</p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 ul className\cf6 \strokec6 =\cf7 \strokec7 "list-disc list-inside text-blue-700 text-xs space-y-1"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                    \cf6 \strokec6 <\cf4 \strokec4 li\cf6 \strokec6 >\cf5 \strokec5 Usa\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 strong\cf6 \strokec6 >\cf5 \strokec5 File\cf4 \strokec4  \cf6 \strokec6 &\cf4 \strokec4 gt\cf6 \strokec6 ;\cf4 \strokec4  \cf5 \strokec5 Export\cf4 \strokec4  \cf6 \strokec6 &\cf4 \strokec4 gt\cf6 \strokec6 ;\cf4 \strokec4  glTF \cf6 \strokec6 (.\cf4 \strokec4 glb\cf6 \strokec6 )</\cf4 \strokec4 strong></li\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                    \cf6 \strokec6 <\cf4 \strokec4 li\cf6 \strokec6 >\cf5 \strokec5 Aplica\cf4 \strokec4  transformaciones \cf6 \strokec6 (\cf5 \strokec5 Ctrl\cf6 \strokec6 +\cf5 \strokec5 A\cf6 \strokec6 )\cf4 \strokec4  si el objeto sale raro\cf6 \strokec6 .</\cf4 \strokec4 li\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 ul\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3               \cf6 \strokec6 \{\cf4 \strokec4 uploadError \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-xs font-bold border border-red-100 flex items-center gap-2"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf5 \strokec5 AlertCircle\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-4 h-4"\cf4 \strokec4  /> \cf6 \strokec6 \{\cf4 \strokec4 uploadError\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3               \cb1 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 form onSubmit\cf6 \strokec6 =\{\cf4 \strokec4 handleUpload\cf6 \strokec6 \}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "space-y-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 label className\cf6 \strokec6 =\cf7 \strokec7 "text-xs font-bold text-slate-600 uppercase"\cf6 \strokec6 >\cf5 \strokec5 Nombre\cf4 \strokec4  del \cf5 \strokec5 Estudiante\cf6 \strokec6 </\cf4 \strokec4 label\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 input required name\cf6 \strokec6 =\cf7 \strokec7 "student"\cf4 \strokec4  type\cf6 \strokec6 =\cf7 \strokec7 "text"\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-full mt-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#10b981] outline-none"\cf4 \strokec4  placeholder\cf6 \strokec6 =\cf7 \strokec7 "Ej. Juan P\'e9rez"\cf4 \strokec4  />\cb1 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 label className\cf6 \strokec6 =\cf7 \strokec7 "text-xs font-bold text-slate-600 uppercase"\cf6 \strokec6 >\cf5 \strokec5 T\cf10 \strokec10 \'ed\cf4 \strokec4 tulo de la \cf5 \strokec5 Pieza\cf6 \strokec6 </\cf4 \strokec4 label\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 input required name\cf6 \strokec6 =\cf7 \strokec7 "title"\cf4 \strokec4  type\cf6 \strokec6 =\cf7 \strokec7 "text"\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-full mt-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#10b981] outline-none"\cf4 \strokec4  placeholder\cf6 \strokec6 =\cf7 \strokec7 "Ej. Prototipo V1"\cf4 \strokec4  />\cb1 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cb1 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 label className\cf6 \strokec6 =\cf7 \strokec7 "block w-full cursor-pointer group mt-2"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center gap-2 group-hover:border-[#10b981] group-hover:bg-emerald-50 transition-all"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                        \cf6 \strokec6 <\cf5 \strokec5 Upload\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-8 h-8 text-slate-300 group-hover:text-[#10b981]"\cf4 \strokec4  />\cb1 \
\cb3                        \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "text-sm font-medium text-slate-600 group-hover:text-[#10b981]"\cf6 \strokec6 >\cf5 \strokec5 Click\cf4 \strokec4  para subir \cf6 \strokec6 .\cf5 \strokec5 GLB\cf6 \strokec6 </\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 input required name\cf6 \strokec6 =\cf7 \strokec7 "file"\cf4 \strokec4  type\cf6 \strokec6 =\cf7 \strokec7 "file"\cf4 \strokec4  accept\cf6 \strokec6 =\cf7 \strokec7 ".glb,.gltf"\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "hidden"\cf4 \strokec4  />\cb1 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 label\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 button \cb1 \
\cb3                   type\cf6 \strokec6 =\cf7 \strokec7 "submit"\cf4 \strokec4  \cb1 \
\cb3                   disabled\cf6 \strokec6 =\{\cf4 \strokec4 uploading\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                   className\cf6 \strokec6 =\cf7 \strokec7 "w-full bg-[#1e3a8a] hover:bg-[#172554] text-white font-bold py-3 rounded-xl shadow-md disabled:bg-slate-400 mt-2 flex justify-center items-center gap-2"\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 \{\cf4 \strokec4 uploading \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 Loader2\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-5 h-5 animate-spin"\cf4 \strokec4  /> \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 "Publicar"\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 form\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\
\cb3       \cf6 \strokec6 \{\cf8 \strokec8 /* Visor Pantalla Completa - Dark Mode */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4 selectedProject \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "fixed inset-0 z-50 flex items-center justify-center bg-black animate-in fade-in duration-300"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 button \cb1 \
\cb3               onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  setSelectedProject\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3               className\cf6 \strokec6 =\cf7 \strokec7 "absolute top-6 right-6 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md border border-white/10 transition-all transform hover:rotate-90"\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf5 \strokec5 X\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-6 h-6"\cf4 \strokec4  />\cb1 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cb1 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "w-full h-full flex flex-col relative bg-[#0b0f19]"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex-1 w-full relative"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                  \cf6 \strokec6 <\cf5 \strokec5 ModelViewerComponent\cf4 \strokec4  \cb1 \
\cb3                    src\cf6 \strokec6 =\{\cf4 \strokec4 getModelUrl\cf6 \strokec6 (\cf4 \strokec4 selectedProject\cf6 \strokec6 )\}\cf4 \strokec4  \cb1 \
\cb3                    alt\cf6 \strokec6 =\{\cf4 \strokec4 selectedProject\cf6 \strokec6 .\cf4 \strokec4 title\cf6 \strokec6 \}\cf4 \strokec4  \cb1 \
\cb3                  />\cb1 \
\cb3                  \cb1 \
\cb3                  \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "absolute top-0 left-0 p-8 pointer-events-none bg-gradient-to-b from-black/80 to-transparent w-full"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 h2 className\cf6 \strokec6 =\cf7 \strokec7 "text-white font-bold text-3xl drop-shadow-lg tracking-tight"\cf6 \strokec6 >\{\cf4 \strokec4 selectedProject\cf6 \strokec6 .\cf4 \strokec4 title\cf6 \strokec6 \}</\cf4 \strokec4 h2\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-2 mt-2"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-[#10b981] w-2 h-2 rounded-full"\cf4 \strokec4 ></div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-gray-200 text-lg font-medium drop-shadow-md"\cf6 \strokec6 >\cf5 \strokec5 Dise\cf10 \strokec10 \'f1\cf4 \strokec4 ado por\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4 selectedProject\cf6 \strokec6 .\cf4 \strokec4 studentName\cf6 \strokec6 \}</\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                  \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                  \cb1 \
\cb3                  \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "absolute bottom-24 left-0 right-0 text-center pointer-events-none opacity-50"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "inline-flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full backdrop-blur text-white text-xs"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                        \cf6 \strokec6 <\cf5 \strokec5 ScanFace\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-4 h-4"\cf4 \strokec4  />\cb1 \
\cb3                        \cf6 \strokec6 <\cf4 \strokec4 span\cf6 \strokec6 >\cf5 \strokec5 Usa\cf4 \strokec4  un dedo para rotar \cf10 \strokec10 \'95\cf4 \strokec4  \cf5 \strokec5 Dos\cf4 \strokec4  dedos para mover\cf6 \strokec6 </\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                  \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cb1 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-[#111827] border-t border-gray-800 p-4 md:p-6 flex justify-between items-center safe-area-bottom"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                  \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "text-gray-400 text-xs hidden md:block"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                    \cf5 \strokec5 Visualizaci\cf10 \strokec10 \'f3\cf4 \strokec4 n en tiempo real \cf10 \strokec10 \'95\cf4 \strokec4  \cf5 \strokec5 GLTF\cf4 \strokec4  \cf9 \strokec9 2.0\cf4 \cb1 \strokec4 \
\cb3                  \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                  \cf6 \strokec6 <\cf4 \strokec4 button \cb1 \
\cb3                     onClick\cf6 \strokec6 =\{(\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  handleVote\cf6 \strokec6 (\cf4 \strokec4 e\cf6 \strokec6 ,\cf4 \strokec4  selectedProject\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                     className\cf6 \strokec6 =\cf7 \strokec7 "bg-[#10b981] hover:bg-[#059669] active:scale-95 text-white px-8 py-3 rounded-full text-base font-bold shadow-lg shadow-emerald-900/20 flex items-center gap-3 transition-all mx-auto md:mx-0"\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf5 \strokec5 Heart\cf4 \strokec4  className\cf6 \strokec6 =\{\cf7 \strokec7 `w-5 h-5 \cf6 \strokec6 $\{\cf4 \strokec4 selectedProject\cf6 \strokec6 .\cf4 \strokec4 votes \cf6 \strokec6 >\cf4 \strokec4  \cf9 \strokec9 0\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'fill-white'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 ''\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}\cf4 \strokec4  />\cb1 \
\cb3                     \cf5 \strokec5 Votar\cf4 \strokec4  por este dise\cf10 \strokec10 \'f1\cf4 \strokec4 o \cf6 \strokec6 (\{\cf4 \strokec4 selectedProject\cf6 \strokec6 .\cf4 \strokec4 votes\cf6 \strokec6 \})\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \cb1 \strokec4 \
}
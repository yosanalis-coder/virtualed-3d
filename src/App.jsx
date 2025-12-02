import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot, 
  doc, 
  updateDoc, 
  increment, 
  query, 
  orderBy 
} from 'firebase/firestore';
import { 
  Rotate3d, 
  Heart, 
  Upload, 
  X, 
  Maximize2, 
  Loader2,
  AlertCircle,
  HelpCircle,
  ScanFace,
  Trophy,
  Cuboid
} from 'lucide-react';

// ==========================================
// CONFIGURACIÓN DE FIREBASE
// (Recuperada de tu archivo)
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyC9-3BJ9LOUaVIRCKGx4GJazxe6p5jnVy8",
  authDomain: "virtualed-3d.firebaseapp.com",
  projectId: "virtualed-3d",
  storageBucket: "virtualed-3d.firebasestorage.app",
  messagingSenderId: "532276598760",
  appId: "1:532276598760:web:d4c57ee41c8b16719cf65d",
  measurementId: "G-RXZ2PCZ59E"
};

// Inicialización de la App
let auth, db;
try {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
} catch (e) {
  console.error("Error inicializando Firebase:", e);
}

const appId = 'virtualed-mes-app';

export default function App() {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [localUploads, setLocalUploads] = useState({});
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  // Autenticación Anónima
  useEffect(() => {
    if (!auth) return;
    signInAnonymously(auth).catch(console.error);
    return onAuthStateChanged(auth, setUser);
  }, []);

  // Cargar Script de Model Viewer
  useEffect(() => {
    try {
      if (!document.querySelector('script[src*="model-viewer"]')) {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js';
        document.body.appendChild(script);
      }
    } catch (e) { console.error(e); }
  }, []);

  // Escuchar base de datos
  useEffect(() => {
    if (!user || !db) return;
    const q = query(collection(db, 'artifacts', appId, 'public', 'data', 'student_projects_v9'), orderBy('timestamp', 'desc'));
    return onSnapshot(q, (snap) => {
      setProjects(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
  }, [user]);

  // Votar
  const handleVote = async (e, project) => {
    e.stopPropagation();
    if (!user || !db) return;
    await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'student_projects_v9', project.id), { votes: increment(1) });
  };

  // Subir Archivo
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!db) { alert("Error de conexión a base de datos"); return; }
    
    setUploading(true);
    const form = e.target;
    const title = form.title.value;
    const student = form.student.value;
    const file = form.file.files[0];

    if (!file || file.name.toLowerCase().endsWith('.blend')) {
      setUploadError("Por favor sube un archivo .glb válido (no .blend)");
      setUploading(false);
      return;
    }

    const url = URL.createObjectURL(file);
    try {
      const docRef = await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'student_projects_v9'), {
        title, studentName: student, votes: 0, modelUrl: "LOCAL_FILE", fileName: file.name, timestamp: new Date().toISOString()
      });
      setLocalUploads(prev => ({ ...prev, [docRef.id]: url }));
      setIsUploadModalOpen(false); form.reset();
    } catch (e) { console.error(e); setUploadError("Error subiendo"); }
    setUploading(false);
  };

  const getModelUrl = (p) => p.modelUrl === "LOCAL_FILE" ? (localUploads[p.id] || "https://modelviewer.dev/shared-assets/models/Astronaut.glb") : p.modelUrl;

  const ModelViewerComponent = ({ src, alt }) => (
    <div className="w-full h-full bg-[#111827] relative overflow-hidden">
      {/* @ts-ignore */}
      <model-viewer src={src} alt={alt} auto-rotate camera-controls shadow-intensity="2" style={{ width: '100%', height: '100%' }} ar loading="eager" camera-orbit="45deg 55deg 2.5m">
      </model-viewer>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800">
      <nav className="bg-[#1e3a8a] text-white sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2 sm:h-16 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-lg"><Cuboid className="w-6 h-6 text-[#10b981]" /></div>
            <div>
              <h1 className="font-bold text-base sm:text-lg">VirtualEd-MES <span className="text-xs font-normal text-blue-200">(Modeling & Simulation Program)</span></h1>
              <p className="text-[10px] text-[#10b981] uppercase font-bold">Diseño de Experiencias Inmersivas 3D Competition</p>
            </div>
          </div>
          <button onClick={() => setIsUploadModalOpen(true)} className="bg-[#10b981] text-white px-4 py-1.5 rounded-full text-sm font-bold flex gap-2"><Upload className="w-4 h-4" /> Subir Proyecto</button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {loading ? <div className="text-center py-20"><Loader2 className="w-10 h-10 animate-spin mx-auto text-[#1e3a8a]" /></div> : 
         projects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border-dashed border-2">
            <Trophy className="w-16 h-16 text-[#1e3a8a] mx-auto mb-4"/>
            <h3 className="text-lg font-bold">La competencia comienza ahora</h3>
            <button onClick={() => setIsUploadModalOpen(true)} className="mt-4 bg-[#1e3a8a] text-white px-6 py-2 rounded-full font-bold">Subir mi Diseño</button>
          </div>
         ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(p => (
              <div key={p.id} onClick={() => setSelectedProject(p)} className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer group hover:ring-2 ring-[#10b981]">
                <div className="h-64 bg-[#111827] relative">
                  <ModelViewerComponent src={getModelUrl(p)} alt={p.title} />
                  <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent pt-12">
                     <h3 className="text-white font-bold">{p.title}</h3>
                     <p className="text-gray-300 text-xs">{p.studentName}</p>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500">360° View</span>
                  <button onClick={(e) => handleVote(e, p)} className="flex gap-2 text-slate-600 hover:text-red-500"><Heart className={`w-4 h-4 ${p.votes > 0 ? 'fill-red-500 text-red-500' : ''}`} /> {p.votes}</button>
                </div>
              </div>
            ))}
          </div>
         )}
      </main>

      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md p-6">
             <div className="flex justify-between mb-4"><h3 className="font-bold text-[#1e3a8a]">Subir Diseño</h3><button onClick={() => setIsUploadModalOpen(false)}><X className="w-5 h-5"/></button></div>
             <div className="bg-blue-50 p-3 rounded mb-4 text-xs text-blue-800"><HelpCircle className="w-3 h-3 inline mr-1"/> Usa <b>File &gt; Export &gt; glTF (.glb)</b> en Blender.</div>
             {uploadError && <div className="text-red-600 text-xs mb-3 font-bold">{uploadError}</div>}
             <form onSubmit={handleUpload} className="space-y-3">
               <input name="student" required placeholder="Nombre del Estudiante" className="w-full border p-2 rounded" />
               <input name="title" required placeholder="Título de la Pieza" className="w-full border p-2 rounded" />
               <input name="file" type="file" required accept=".glb,.gltf" className="w-full border p-2 rounded" />
               <button disabled={uploading} className="w-full bg-[#1e3a8a] text-white font-bold py-2 rounded">{uploading ? "Subiendo..." : "Publicar"}</button>
             </form>
          </div>
        </div>
      )}

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
           <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 z-20 bg-white/20 text-white p-2 rounded-full"><X className="w-6 h-6" /></button>
           <div className="w-full h-full relative bg-[#0b0f19]">
              <ModelViewerComponent src={getModelUrl(selectedProject)} alt={selectedProject.title} />
              <div className="absolute top-0 left-0 p-8 pointer-events-none w-full bg-gradient-to-b from-black/80 to-transparent">
                 <h2 className="text-white font-bold text-3xl">{selectedProject.title}</h2>
                 <p className="text-[#10b981] text-lg font-medium">{selectedProject.studentName}</p>
              </div>
              <div className="absolute bottom-0 w-full p-6 bg-[#111827] flex justify-center border-t border-gray-800">
                 <button onClick={(e) => handleVote(e, selectedProject)} className="bg-[#10b981] text-white px-8 py-3 rounded-full font-bold flex gap-2"><Heart className="w-5 h-5"/> Votar ({selectedProject.votes})</button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
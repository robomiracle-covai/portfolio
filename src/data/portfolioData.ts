import type { Project, BuildLogEntry, Robot, SocialLink } from '../types';

export const GITHUB_USERNAME = "ragunath4";
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;
export const RESUME_URL = "/resume.pdf";

export const PERSONAL_INFO = {
  name: "Ragunath Periyasamy",
  brandName: "Ragunath Periyasamy",
  title: "Robotics Software & AI Engineer",
  headline: "I build software for robots that work in the real world.",
  subline: "Research Engineer at RoboMiracle — building navigation, UI, voice and AI software for service robots deployed in hospitals and schools across India. Exploring on-device AI, LLMs and computer vision.",
  email: "ragunathprof@gmail.com",
  location: "Coimbatore, India",
  philosophy: {
    quote: "Explore. Build. Experiment. Learn.",
    subtext: "I believe the best way to understand technology is to build with it."
  },
  about: {
    paragraphs: [
      "I'm Ragunath, a Research Engineer at RoboMiracle in Coimbatore, where I build software for service robots that work alongside people in hospitals, schools and workplaces.",
      "My work spans navigation and autonomy, touchscreen interfaces, voice and AI interaction, and the backend and hardware integration that ties a robot together — often finishing on-site, installing and tuning robots where they are deployed.",
      "Outside work I explore on-device AI, large language models and computer vision, and I like learning by building working prototypes rather than only reading about ideas."
    ],
    experience: [
      { role: "Research Engineer", org: "RoboMiracle, Coimbatore", period: "Aug 2026 – Present" },
      { role: "Software Engineer", org: "dsignz media", period: "Jun 2025 – Aug 2026" }
    ],
    education: {
      degree: "B.E. Electronics & Communication Engineering",
      school: "Muthayammal Engineering College"
    }
  }
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: GITHUB_URL,
    icon: "github",
    handle: `@${GITHUB_USERNAME}`
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/ragunathmp",
    icon: "linkedin",
    handle: "ragunathmp"
  },
  {
    platform: "Email",
    url: "mailto:ragunathprof@gmail.com",
    icon: "mail",
    handle: "ragunathprof@gmail.com"
  }
];

export const ROBOTS: Robot[] = [
  {
    id: "nexus-a1",
    name: "Nexus A1",
    image: "/robots/nexus.webp",
    description: "Service humanoid robot with touchscreen, deployed at a hospital in Thiruvananthapuram.",
    role: "Software and on-site installation."
  },
  {
    id: "nova-a1",
    name: "Nova A1",
    image: "/robots/nova.webp",
    description: "AI educational humanoid for schools and STEM labs, with face recognition and voice commands.",
    role: "Voice and AI interaction."
  },
  {
    id: "aurra",
    name: "Aurra",
    image: "/robots/aurra.webp",
    description: "Humanoid robot for workplaces and events.",
    role: "Robot software."
  },
  {
    id: "nila-dine",
    name: "Nila and Dine Bot",
    image: "/robots/nila.webp",
    secondaryImage: "/robots/dine.webp",
    description: "Reception and restaurant service robots."
  }
];

export const ROBOTS_SUMMARY = "Across these robots I work on navigation & autonomy, touchscreen UI & apps, voice & AI interaction, and backend & hardware integration — using Python, ROS / ROS 2, Raspberry Pi and NVIDIA Jetson.";

export const PROJECTS: Project[] = [
  {
    id: "mister-mini",
    name: "Mister Mini",
    subtitle: "Adaptive Autonomous Assistance using Raspberry Pi",
    image: "/projects/mister-mini.jpg",
    description: "A 3D-printed humanoid robot built as my college final-year project with a team of six. It uses an OAK-D depth camera for perception and face recognition, with servo-driven arms, hands and head controlled from a Raspberry Pi.",
    technologies: ["Raspberry Pi", "OAK-D", "Servo Motors", "Face Recognition", "3D Printing"],
    context: "College final-year project · Team of 6",
    githubUrl: `${GITHUB_URL}?tab=repositories&q=MisterMini`,
    githubLabel: "Mechanical parts"
  },
  {
    id: "rag-chatbot",
    name: "RAG Chatbot from scratch",
    subtitle: "Retrieval-augmented generation",
    description: "A retrieval-augmented generation chatbot built from the ground up — chunking and embedding documents, retrieving the most relevant passages for a question, and grounding the language model's answer in them.",
    technologies: ["LLMs", "RAG", "Embeddings", "Python"],
    context: "Personal project"
  }
];

export const BUILD_LOGS: BuildLogEntry[] = [
  {
    id: "running-local-llms-on-android",
    date: "August 2026",
    readTime: "8 min read",
    title: "Running Local LLMs on Android Devices",
    summary: "Experiments with running lightweight language models on mobile and tablet hardware.",
    tags: ["LLMs", "Edge Computing", "Android", "Benchmarks"],
    content: {
      overview: "With open-weight models like Qwen-1.5B, Llama-3.2-1B, and Phi-3 Mini becoming increasingly compact, running LLMs entirely offline on smartphone hardware is no longer just theoretical. I spent the past month benchmarking generation speed and thermal profiles across multiple Android devices.",
      keyLearnings: [
        "Memory bandwidth is the primary bottleneck for mobile LLM generation, not raw compute cycles.",
        "Qwen 1.5B in Q4_K_S format achieves ~24 tokens/second on Snapdragon 8 Gen 2 while drawing under 3.8 Watts.",
        "Sustained load causes thermal throttling after 4 minutes of uninterrupted generation; chunked context evaluation helps maintain cool device temperatures."
      ],
      technicalArchitecture: "Evaluated three distinct runtimes: (1) llama.cpp compiled for arm64-v8a via NDK, (2) ExecuTorch with Qualcomm NPU backend, and (3) MLC-LLM WebGPU runtime on mobile browsers.",
      codeSnippet: {
        language: "bash",
        caption: "NDK compilation flag configuration for optimal ARM Neon vector instructions",
        code: `# CMake compilation settings for ARM64 llama.cpp build
cmake -B build \\
  -DCMAKE_TOOLCHAIN_FILE=$NDK/build/cmake/android.toolchain.cmake \\
  -DANDROID_ABI=arm64-v8a \\
  -DANDROID_PLATFORM=android-28 \\
  -DLLAMA_NATIVE=OFF \\
  -DLLAMA_BUILD_SERVER=OFF \\
  -DCMAKE_C_FLAGS="-O3 -mcpu=native"`
      },
      nextSteps: [
        "Publish open benchmark comparison table across mid-range and flagship Android phones.",
        "Test structured JSON output constraints (Grammar sampling) on mobile CPU."
      ]
    }
  },
  {
    id: "building-face-recognition-pipeline",
    date: "July 2026",
    readTime: "5 min read",
    title: "Building a Face Recognition Pipeline",
    summary: "Exploring face detection, registration, recognition, and practical implementation challenges.",
    tags: ["Computer Vision", "OpenCV", "Face Recognition", "Python"],
    content: {
      overview: "Building a reliable face recognition pipeline requires balancing detection accuracy, alignment precision, embedding generation, and fast similarity matching. This build log documents my end-to-end pipeline implementation.",
      keyLearnings: [
        "Facial alignment using 5 key landmarks (eyes, nose tip, mouth corners) boosts downstream MobileFaceNet embedding match accuracy by over 14%.",
        "Cosine distance metrics perform significantly better than Euclidean distance when comparing normalized 128-dimensional facial feature vectors.",
        "Implementing a simple motion liveness test prevents spoofing attacks using flat paper printouts or phone screen photos."
      ],
      technicalArchitecture: "Pipeline stage 1: SCRFD / MediaPipe for fast face box detection. Stage 2: Affine transformation alignment. Stage 3: MobileFaceNet feature extraction. Stage 4: FAISS vector index lookup with threshold matching.",
      codeSnippet: {
        language: "python",
        caption: "Cosine similarity matching and threshold verification in Python",
        code: `import numpy as np

def compute_similarity(embedding1: np.ndarray, embedding2: np.ndarray) -> float:
    """Computes cosine similarity between two 128-d facial embeddings."""
    norm1 = np.linalg.norm(embedding1)
    norm2 = np.linalg.norm(embedding2)
    if norm1 == 0 or norm2 == 0:
        return 0.0
    return float(np.dot(embedding1, embedding2) / (norm1 * norm2))

def is_same_person(emb1: np.ndarray, emb2: np.ndarray, threshold: float = 0.65) -> bool:
    similarity = compute_similarity(emb1, emb2)
    return similarity >= threshold`
      },
      nextSteps: [
        "Port the embedding model to ONNX runtime with INT8 quantization.",
        "Integrate live RTSP video stream input with multi-threading."
      ]
    }
  },
  {
    id: "beginning-humanoid-robotics-journey",
    date: "June 2026",
    readTime: "7 min read",
    title: "Beginning My Humanoid Robotics Journey",
    summary: "Documenting my exploration into humanoid development, AI integration, and 3D printing.",
    tags: ["Robotics", "3D Printing", "Hardware", "Humanoid"],
    content: {
      overview: "Humanoid robotics sits at the intersection of mechanical engineering, kinematics, embedded systems, and artificial intelligence. This initial entry logs my journey setting up CAD modeling workflows, selecting high-torque servos, and 3D printing structural bipedal joints.",
      keyLearnings: [
        "PETG is far superior to standard PLA for load-bearing robot joints due to higher layer adhesion and flexibility under impact.",
        "Infill density matters less than wall perimeter count: 4 perimeters with 30% gyroid infill yields maximum structural rigidity.",
        "Bus-based serial servos (e.g., Lewansoul / FeeTech) greatly simplify cabling compared to standard individual PWM signal wires."
      ],
      technicalArchitecture: "Hardware: Custom 3D printed PETG skeletal limbs housing 25kg/cm serial bus servos. Brain interface: Android tablet acting as host computer running ROS2 nodes communicating over micro-USB serial to an ESP32 actuator board.",
      codeSnippet: {
        language: "cpp",
        caption: "ESP32 serial bus servo command packet dispatch",
        code: `#include <Arduino.h>

struct ServoCommand {
    uint8_t id;
    uint16_t position; // 0 to 1000
    uint16_t timeMs;
};

void sendServoPosition(uint8_t id, uint16_t position, uint16_t timeMs) {
    uint8_t buf[7];
    buf[0] = 0x55; // Header frame
    buf[1] = 0x55;
    buf[2] = id;
    buf[3] = 7;    // Data length
    buf[4] = 1;    // Write position command
    buf[5] = position & 0xFF;
    buf[6] = (position >> 8) & 0xFF;
    Serial1.write(buf, 7);
}`
      },
      nextSteps: [
        "Assemble 2-DOF leg joint testing rig for static torque verification.",
        "Implement basic inverse kinematics solver in Python with PyBullet simulation."
      ]
    }
  }
];

import type { Project, BuildLogEntry, Experiment, ExploringTopic, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: "Ragunath Periyasamy",
  brandName: "Ragunath Periyasamy",
  title: "AI Developer, Builder & Technology Experimenter",
  headline: "Hello, I'm Ragunath.",
  subtitle: "AI Developer, Builder & Technology Experimenter.",
  description: "I explore and build practical AI systems, local language models, computer vision applications, and intelligent technologies for real-world devices.",
  identityStatement: "I explore emerging technologies and turn ideas into working prototypes.",
  email: "raguanth.prof@gmail.com",
  location: "On-device AI & Robotics Lab",
  philosophy: {
    quote: "Explore. Build. Experiment. Learn.",
    subtext: "I believe the best way to understand technology is to build with it."
  },
  about: {
    paragraphs: [
      "I'm Ragunath, a developer and technology enthusiast interested in building practical AI-powered systems.",
      "My current work and experiments focus on local language models, AI assistants, computer vision, Android development, humanoid robotics, and 3D printing.",
      "I enjoy learning emerging technologies by building with them. Rather than only studying ideas theoretically, I like turning concepts into working prototypes and documenting what I learn along the way.",
      "I'm particularly interested in the future of AI beyond the cloud — where intelligent systems can run directly on personal devices, interact with the physical world, and eventually become part of robotics and humanoid systems."
    ]
  }
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com",
    icon: "github",
    handle: "@ragunath"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/ragunathmp",
    icon: "linkedin",
    handle: "ragunathmp"
  },
  {
    platform: "Email",
    url: "mailto:raguanth.prof@gmail.com",
    icon: "mail",
    handle: "raguanth.prof@gmail.com"
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "local-ai-edge-llms",
    name: "Local AI & Edge LLM Experiments",
    subtitle: "On-Device Open Source LLM Execution",
    description: "Experiments focused on running open-source language models efficiently on personal devices, tablets, and resource-constrained hardware.",
    fullDetails: "Benchmarking and optimizing Qwen, Llama 3, and Phi models across consumer hardware. Exploring memory quantization techniques (Q4_K_M, IQ3_XS), RAM bandwidth bounds, thermal throttling behavior on handheld devices, and local RPC endpoints using Ollama and MLC-LLM.",
    technologies: ["LLMs", "Qwen", "Ollama", "On-device AI", "Edge Computing"],
    status: "Research & Experimentation",
    isPrimary: true,
    highlights: [
      "Evaluated 1.5B to 7B parameter models on Snapdragon 8-series & Apple Silicon",
      "Custom memory mapping scripts for low-RAM mobile targets",
      "Structured JSON output generation with zero network latencies"
    ],
    metrics: [
      { label: "Max Tokens/sec", value: "28.4 tok/s (Qwen-1.5B)" },
      { label: "RAM Footprint", value: "< 2.1 GB Peak" }
    ]
  },
  {
    id: "face-recognition-system",
    name: "Face Recognition System",
    subtitle: "Real-time Detection & Biometric Matching Pipeline",
    description: "A practical computer vision project exploring face detection, face registration, recognition, and real-world integration.",
    fullDetails: "Implements lightweight face detection (MediaPipe/YOLOv8-face) combined with MobileFaceNet embedding generation for real-time edge biometric verification. Supports batch image registration, lighting normalization, and cosine distance indexing.",
    technologies: ["Computer Vision", "Face Detection", "Face Recognition", "AI"],
    status: "Experimental",
    isPrimary: false,
    highlights: [
      "Multi-angle face registration pipeline with anti-spoofing heuristic checks",
      "Embedding database indexed with FAISS for instantaneous lookups",
      "Runs at 30+ FPS on embedded Linux single-board computers"
    ],
    metrics: [
      { label: "Accuracy", value: "99.2% LFW benchmark" },
      { label: "Latency", value: "32ms / frame" }
    ]
  },
  {
    id: "humanoid-robotics-3d-printing",
    name: "Humanoid Robotics & 3D Printing",
    subtitle: "Physical AI, Kinematics & Custom Hardware Fabrication",
    description: "Exploring the intersection of AI, robotics, humanoid development, hardware experimentation, and 3D printing.",
    fullDetails: "Designing custom 3D printed mechanical joints, servo actuation controllers, and micro-ROS nodes. Focuses on bringing vision-language models and motor control down to physical bipedal and arm manipulators.",
    technologies: ["Robotics", "AI", "3D Printing", "Hardware"],
    status: "Exploration",
    isPrimary: false,
    highlights: [
      "Custom CAD designs for lightweight PETG/PLA+ structural limbs",
      "PWM controller board interfacing with Android USB-serial communication",
      "Forward and inverse kinematics experiments using Python & Rust"
    ],
    metrics: [
      { label: "DOF Explored", value: "12 Degrees of Freedom" },
      { label: "Material Focus", value: "PETG & Carbon PLA" }
    ]
  }
];

export const EXPLORING_TOPICS: ExploringTopic[] = [
  {
    id: "humanoid-robotics",
    icon: "bot",
    title: "Humanoid Robotics",
    subtitle: "Embodied Intelligence & Kinematics",
    description: "Building physical structural components with 3D printing and experimenting with actuator control, balance algorithms, and sensory feedback loops.",
    focusAreas: ["Kinematics & Servo Control", "Micro-ROS Interfacing", "CAD & Structural Printing"]
  },
  {
    id: "local-edge-llms",
    icon: "brain",
    title: "Local & Edge LLMs",
    subtitle: "Offline Language Modeling",
    description: "Benchmarking 1B to 8B open-weight models on consumer hardware, optimizing quantization (GGUF, AWQ), and evaluating local prompt execution speed.",
    focusAreas: ["llama.cpp & Ollama Optimization", "4-bit & 3-bit Quantization", "On-Device Inference Latency"]
  },
  {
    id: "ai-on-mobile",
    icon: "smartphone",
    title: "AI on Mobile Devices",
    subtitle: "Android & NPU Acceleration",
    description: "Leveraging Android NNAPI, LiteRT (TensorFlow Lite), and Qualcomm NPU SDKs to run neural networks locally on smartphones and tablets.",
    focusAreas: ["Kotlin Native Integration", "NPU / GPU Delegate Execution", "Zero-Latency Offline Features"]
  },
  {
    id: "computer-vision",
    icon: "eye",
    title: "Computer Vision",
    subtitle: "Perception & Spatial Understanding",
    description: "Real-time object detection, face registration, edge depth estimation, and visual feature tracking for camera-equipped prototype devices.",
    focusAreas: ["Face Recognition Pipelines", "OpenCV & MediaPipe", "Embedded Camera Streams"]
  },
  {
    id: "3d-printing",
    icon: "box",
    title: "3D Printing",
    subtitle: "Rapid Prototyping & Enclosures",
    description: "Designing functional enclosures, mechanical joints, structural brackets, and motor mounts using CAD and additive manufacturing.",
    focusAreas: ["Functional Mechanical Design", "PETG / PLA+ Print Optimization", "Enclosures for IoT & AI Modules"]
  },
  {
    id: "intelligent-automation",
    icon: "cog",
    title: "Intelligent Automation",
    subtitle: "Autonomous Local Workflows",
    description: "Connecting local LLM reasoning to tool execution, device sensors, and system scripts for seamless hands-free automated tasks.",
    focusAreas: ["Agentic Tool Calling", "Local Microservices & RPC", "Event-Driven Trigger Systems"]
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

export const EXPERIMENTS: Experiment[] = [
  {
    id: "exp-1",
    title: "Testing Local Language Models on ARM64",
    category: "LLMs",
    description: "Benchmarking prompt processing time and RAM utilization for Qwen-1.5B and Phi-3 Mini across 4-bit and 3-bit GGUF quantizations.",
    status: "Completed",
    date: "Aug 2026",
    technologies: ["GGUF", "llama.cpp", "Qwen", "ARM64"],
    takeaway: "Q4_K_M quant offers the optimal memory/accuracy ratio on mobile hardware.",
    codeSnippet: "./main -m qwen1.5-1.5b-chat-q4_k_m.gguf -p 'Summarize system state:' -n 128 -t 4",
    githubUrl: "https://github.com/ragunath/edge-llm-benchmarks"
  },
  {
    id: "exp-2",
    title: "Android Native AI Camera Pipeline",
    category: "Android & Mobile",
    description: "Built a zero-copy Android Camera2 frame buffer consumer feeding raw YUV memory directly to LiteRT vision models.",
    status: "Completed",
    date: "Jul 2026",
    technologies: ["Kotlin", "Android NDK", "LiteRT", "CameraX"],
    takeaway: "Eliminating Bitmap allocation reduced frame latency from 45ms to 12ms.",
    codeSnippet: "val imageBuffer = imageProxy.planes[0].buffer // Direct ByteBuffer transfer",
    githubUrl: "https://github.com/ragunath/android-camera-pipeline"
  },
  {
    id: "exp-3",
    title: "Face Detection Prototype on Embedded Hardware",
    category: "Computer Vision",
    description: "Evaluated MobileNetV2 SSD vs SCRFD for face detection on low-power ARM single board computers.",
    status: "Completed",
    date: "Jun 2026",
    technologies: ["OpenCV", "Python", "SCRFD", "TFLite"],
    takeaway: "SCRFD maintains higher accuracy on rotated and occluded faces under low light.",
    githubUrl: "https://github.com/ragunath/face-recognition-pipeline"
  },
  {
    id: "exp-4",
    title: "Voice Interaction & Wake-Word Engine",
    category: "Voice & Audio",
    description: "Testing open-source wake-word engines (openWakeWord and Porcupine) on Android for hands-free AI voice activation.",
    status: "In Progress",
    date: "Aug 2026",
    technologies: ["Android", "AudioRecord", "TFLite", "DSP"],
    takeaway: "A 120KB quantized wake-word model can run continuously with <1% battery impact per day."
  },
  {
    id: "exp-5",
    title: "Mobile NPU vs GPU Benchmark Matrix",
    category: "Android & Mobile",
    description: "Comparative speed testing for FP16 and INT8 tensor operations on Snapdragon Adreno GPU vs Hexagon NPU.",
    status: "Completed",
    date: "May 2026",
    technologies: ["NNAPI", "LiteRT", "Qualcomm NPU SDK"],
    takeaway: "INT8 models on Hexagon NPU run 3.4x faster with 60% less energy consumption than GPU."
  },
  {
    id: "exp-6",
    title: "3D Printed Mechanical Servo Joint Structural Tests",
    category: "Robotics & Hardware",
    description: "Tested tensile load tolerances of PETG vs Carbon Fiber PLA for robot hip and knee rotational mounts.",
    status: "Prototype",
    date: "Jul 2026",
    technologies: ["3D Printing", "PETG", "CAD", "Hardware"],
    takeaway: "PETG with 4 wall perimeters sustained 38kg static load before flex distortion."
  }
];

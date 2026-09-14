export const projectDetailsData = {
  "project1": {
    subtitle: "A four-wheel differential-drive Autonomous Mobile Robot developed using ROS 2 for LiDAR-based mapping, localization, path planning, and autonomous navigation.",
    images: Array.from({ length: 5 }, (_, i) => `./project_pictures/project1/${i + 1}.png`),
    metrics: [
      { value: "ROS 2 Jazzy", label: "Core Framework" },
      { value: "LiDAR", label: "Mapping Sensor" },
      { value: "JPS", label: "Path Planning" },
      { value: "RPP", label: "Path Tracking" }
    ],
    techSpecs: [
      { label: "Robot Platform", value: "Four-Wheel Differential-Drive AMR" },
      { label: "Framework", value: "ROS 2 Jazzy" },
      { label: "Simulation", value: "Gazebo Harmonic" },
      { label: "Mapping", value: "LiDAR-Based SLAM" },
      { label: "Navigation", value: "Navigation2" },
      { label: "Control", value: "ROS 2 Control" }
    ],
    architectureTitle: "ROS 2 Autonomous Navigation & Control Flow",
    architectureNodes: [
      { title: "1. LiDAR & Robot Sensors", desc: "Collects environmental data for mapping and navigation", icon: "upload-cloud" },
      { title: "2. SLAM", desc: "Generates the environment map using LiDAR sensor data", icon: "cpu" },
      { title: "3. JPS Path Planner", desc: "Computes an efficient global path toward the navigation goal", icon: "shuffle" },
      { title: "4. RPP Controller", desc: "Tracks the planned path and generates robot motion commands", icon: "hard-drive" },
      { title: "5. ROS 2 Control", desc: "Executes wheel commands for autonomous robot movement", icon: "monitor" }
    ],
    narratives: [
      {
        heading: "Project Overview & Engineering Goals",
        paragraphs: [
          "Developed a four-wheel differential-drive Autonomous Mobile Robot using ROS 2 Jazzy and Gazebo Harmonic for autonomous navigation in a simulated industrial environment.",
          "The project focused on integrating LiDAR-based SLAM, path planning, path tracking, and robot control into a complete autonomous navigation pipeline."
        ]
      },
      {
        heading: "ROS 2 Navigation & Autonomous Control",
        paragraphs: [
          "The autonomous navigation system integrates mapping, global path planning, local path tracking, and wheel control through the ROS 2 ecosystem:"
        ],
        bullets: [
          "LiDAR-Based SLAM: Uses LiDAR sensor information to build a map of the robot's surrounding environment.",
          "Jump Point Search: JPS is used for efficient global path planning between the robot's current position and navigation goal.",
          "Regulated Pure Pursuit: RPP provides smooth path tracking while generating motion commands for the differential-drive robot."
        ],
        paragraphsAfter: [
          "ROS 2 Control and Navigation2 integrate the navigation and motion-control pipeline, allowing the AMR to execute autonomous navigation within the simulated environment."
        ]
      },
      {
        heading: "Results & Testing Milestones",
        paragraphs: [
          "The complete autonomous navigation pipeline was validated in Gazebo Harmonic, demonstrating LiDAR-based SLAM, JPS path planning, RPP path tracking, and autonomous robot navigation using ROS 2 Control and Navigation2."
        ]
      }
    ]
  },

  "project2": {
    subtitle: "A template project for multi-axis robotic arm design, inverse kinematics modeling, and automated pick-and-place manipulation.",
    images: Array.from({ length: 10 }, (_, i) => `./project_pictures/project2/${i + 1}.png`),
    metrics: [
      { value: "3-DOF", label: "Manipulator" },
      { value: "YOLOv8n", label: "Object Detection" },
      { value: "RGB-D", label: "3D Localization" },
      { value: "ESP32", label: "Servo Control" }
    ],
    techSpecs: [
      { label: "Manipulator", value: "3-DOF Robotic Arm" },
      { label: "Programming", value: "Python" },
      { label: "Vision", value: "YOLOv8n + OpenCV" },
      { label: "Depth Sensor", value: "Intel RealSense D435 RGB-D Camera" },
      { label: "Speech", value: "Whisper Speech Recognition" },
      { label: "Actuation", value: "ESP32 + Servo Motors" }
    ],
    architectureTitle: "Voice, Vision & Robotic Manipulation Flow",
    architectureNodes: [
      { title: "1. Voice Command", desc: "Receives the user's spoken object-selection command", icon: "upload-cloud" },
      { title: "2. YOLOv8 Detection", desc: "Identifies the requested object in the camera image", icon: "cpu" },
      { title: "3. RGB-D Localization", desc: "Obtains the object's 3D position using depth information", icon: "shuffle" },
      { title: "4. Inverse Kinematics", desc: "Calculates the required joint angles for the target position", icon: "hard-drive" },
      { title: "5. ESP32 Actuation", desc: "Executes joint and gripper movement through servo control", icon: "monitor" }
    ],
    narratives: [
      {
        heading: "Project Overview & Engineering Goals",
        paragraphs: [
          "Developed an intelligent 3-DOF robotic manipulator that combines voice interaction, computer vision, depth sensing, kinematic computation, and embedded servo control.",
          "The system was designed to allow a user to specify an object by voice and enable the robot to detect, localize, reach, and pick the requested object autonomously."
        ]
      },
      {
        heading: "Vision, Voice & Manipulation Pipeline",
        paragraphs: [
          "The system connects human input, perception, mathematical motion planning, and physical actuation into one integrated pipeline:"
        ],
        bullets: [
          "Voice Processing: Whisper converts the user's spoken command into text and identifies the requested object.",
          "Object Detection: YOLOv8n detects and identifies objects in the robot's workspace.",
          "3D Localization: RGB-D depth information is used to estimate the object's three-dimensional position.",
          "Inverse Kinematics: The target position is transformed into the robot coordinate frame and used to calculate the required joint angles."
        ],
        paragraphsAfter: [
          "The calculated joint commands are sent from the Python system to the ESP32, which controls the servo motors and gripper to execute the physical pick-and-place operation."
        ]
      },
      {
        heading: "Results & Testing Milestones",
        paragraphs: [
          "The completed system was tested on real hardware and demonstrated autonomous object detection, inverse-kinematics computation, servo actuation, and physical pick-and-place operations with real objects."
        ]
      }
    ]
  },

  "project3": {
    subtitle: "A vision-guided agricultural harvesting prototype designed to detect fruits, position a robotic manipulator, and perform automated harvesting using a custom blade-integrated gripper.",
    images: Array.from({ length: 10 }, (_, i) => `./project_pictures/project3/${i + 1}.png`),
    metrics: [
      { value: "YOLO", label: "Fruit Detection" },
      { value: "Raspberry Pi 5", label: "Vision Controller" },
      { value: "ESP32", label: "Actuation Control" },
      { value: "3D Printed", label: "Manipulator Structure" }
    ],
    techSpecs: [
      { label: "Main Controller", value: "Raspberry Pi 5" },
      { label: "Motor Controller", value: "ESP32" },
      { label: "Vision", value: "YOLO-Based Fruit Detection" },
      { label: "Manipulator", value: "Multi-Joint Robotic Manipulator" },
      { label: "Actuation", value: "Servo Motors" },
      { label: "End Effector", value: "Custom Blade-Integrated Gripper" }
    ],
    architectureTitle: "Vision-Guided Agricultural Harvesting Flow",
    architectureNodes: [
      { title: "1. Camera Input", desc: "Captures images of fruits within the harvesting workspace", icon: "upload-cloud" },
      { title: "2. Fruit Detection", desc: "YOLO-based vision identifies and locates the target fruit", icon: "cpu" },
      { title: "3. Position Calculation", desc: "Determines the required manipulator position for harvesting", icon: "shuffle" },
      { title: "4. Manipulator Control", desc: "ESP32 controls the servo-driven robotic arm", icon: "hard-drive" },
      { title: "5. Harvesting Gripper", desc: "Custom blade-integrated gripper performs the harvesting action", icon: "monitor" }
    ],
    narratives: [
      {
        heading: "Project Overview & Engineering Goals",
        paragraphs: [
          "Developed a vision-guided agricultural fruit harvesting prototype that combines computer vision, robotic manipulation, embedded control, and a custom harvesting end effector.",
          "The main objective was to automate fruit localization and harvesting by allowing the robotic manipulator to identify the target fruit and position the end effector for the harvesting operation."
        ]
      },
      {
        heading: "Computer Vision & Robotic Harvesting",
        paragraphs: [
          "The system combines visual perception with robotic actuation to perform the harvesting task:"
        ],
        bullets: [
          "Fruit Detection: A YOLO-based computer vision system identifies the target fruit from camera images.",
          "Manipulator Positioning: The detected fruit position is used to determine the required robotic manipulator movement.",
          "Embedded Control: Raspberry Pi 5 and ESP32 coordinate the vision-processing and servo-actuation functions.",
          "Custom End Effector: A blade-integrated gripper was developed to support the fruit harvesting operation."
        ],
        paragraphsAfter: [
          "The system was developed as a physical prototype using a 3D-printed manipulator structure, servo actuation, embedded controllers, and a custom harvesting mechanism."
        ]
      },
      {
        heading: "Results & Testing Milestones",
        paragraphs: [
          "The completed prototype demonstrated vision-guided fruit detection, robotic positioning, servo-based manipulation, and automated harvesting using the custom blade-integrated gripper."
        ]
      }
    ]
  },

  "project4": {
    subtitle: "An Arduino UNO-based robotic synchronization arm that mirrors human-controlled potentiometer movement through real-time servo actuation.",
    images: Array.from({ length: 2 }, (_, i) => `./project_pictures/project4/${i + 1}.png`),
    metrics: [
      { value: "Arduino UNO", label: "Core Controller" },
      { value: "Servo", label: "Arm Actuation" },
      { value: "Potentiometer", label: "Position Input" },
      { value: "Real-Time", label: "Motion Synchronization" }
    ],
    techSpecs: [
      { label: "Microcontroller", value: "Arduino UNO" },
      { label: "Input", value: "Potentiometers" },
      { label: "Actuation", value: "Servo Motors" },
      { label: "Control", value: "Analog Input + PWM" },
      { label: "System Type", value: "Synchronization Robotic Arm" },
      { label: "Application", value: "Real-Time Mirrored Motion" }
    ],
    architectureTitle: "Real-Time Robotic Synchronization Flow",
    architectureNodes: [
      { title: "1. Potentiometer Input", desc: "Captures the user's arm-position input through analog signals", icon: "upload-cloud" },
      { title: "2. Arduino Processing", desc: "Reads and processes the analog input values", icon: "cpu" },
      { title: "3. Position Mapping", desc: "Maps potentiometer values to corresponding servo positions", icon: "shuffle" },
      { title: "4. PWM Control", desc: "Generates PWM signals for servo motor positioning", icon: "hard-drive" },
      { title: "5. Synchronized Arm", desc: "Servo motors reproduce the input movement in real time", icon: "monitor" }
    ],
    narratives: [
      {
        heading: "Project Overview & Engineering Goals",
        paragraphs: [
          "Developed a real-time robotic synchronization arm using Arduino UNO, potentiometers, and servo motors.",
          "The project focused on demonstrating sensor-actuator integration by converting manual potentiometer movements into corresponding robotic arm movements."
        ]
      },
      {
        heading: "Embedded Control & Motion Synchronization",
        paragraphs: [
          "The robotic arm uses analog position sensing and servo control to reproduce the input movement:"
        ],
        bullets: [
          "Analog Position Sensing: Potentiometers provide continuous position input to the Arduino UNO.",
          "Position Mapping: The controller converts the analog readings into corresponding servo positions.",
          "PWM Servo Control: PWM signals are generated to control the servo motors and reproduce the desired arm movement."
        ],
        paragraphsAfter: [
          "The project demonstrates fundamental embedded robotics concepts including analog sensing, position mapping, PWM actuation, and real-time sensor-actuator integration."
        ]
      },
      {
        heading: "Results & Testing Milestones",
        paragraphs: [
          "The prototype demonstrated real-time synchronized movement between the potentiometer inputs and the servo-driven robotic arm."
        ]
      }
    ]
  },

  "project5": {
    subtitle: "An Autonomous Mobile Robot with switchable two-wheel and four-wheel steering modes using solenoid valves to improve maneuverability and autonomous movement.",
    images: Array.from({ length: 8 }, (_, i) => `./project_pictures/project5/${i + 1}.png`),
    metrics: [
      { value: "AMR", label: "Robot Platform" },
      { value: "Solenoid", label: "Steering Control" },
      { value: "4-Wheel", label: "Steering Mode" },
      { value: "Autonomous", label: "Navigation Mode" }
    ],
    techSpecs: [
      { label: "Robot Type", value: "Autonomous Mobile Robot" },
      { label: "Steering", value: "Switchable 2-Wheel / 4-Wheel Steering" },
      { label: "Steering Actuation", value: "Solenoid Valves" },
      { label: "Movement", value: "Four-Wheel Mobile Platform" },
      { label: "Navigation", value: "Autonomous Navigation" },
      { label: "Function", value: "Obstacle Avoidance & Maneuverability" }
    ],
    architectureTitle: "Four-Wheel Steering & Autonomous Movement Flow",
    architectureNodes: [
      { title: "1. Environment Detection", desc: "Detects obstacles and surrounding conditions during robot movement", icon: "upload-cloud" },
      { title: "2. Steering Decision", desc: "Determines the required steering mode for robot movement", icon: "cpu" },
      { title: "3. Solenoid Actuation", desc: "Controls the steering mechanism through solenoid valves", icon: "shuffle" },
      { title: "4. Wheel Movement", desc: "Drives the four-wheel platform according to the selected steering mode", icon: "hard-drive" },
      { title: "5. Autonomous Navigation", desc: "Enables the robot to move and maneuver through its environment", icon: "monitor" }
    ],
    narratives: [
      {
        heading: "Project Overview & Engineering Goals",
        paragraphs: [
          "Designed and developed a solenoid valve-based Autonomous Mobile Robot with switchable two-wheel and four-wheel steering modes.",
          "The project focused on improving robot maneuverability by allowing the steering configuration to be changed according to the required movement and operating condition."
        ]
      },
      {
        heading: "Solenoid-Based Steering & Autonomous Movement",
        paragraphs: [
          "The mobile robot combines mechanical steering, solenoid actuation, obstacle avoidance, and autonomous movement:"
        ],
        bullets: [
          "Two-Wheel Steering Mode: Provides conventional steering behavior for general robot movement.",
          "Four-Wheel Steering Mode: Enables coordinated steering of the wheels to improve maneuverability.",
          "Solenoid Valve Control: Solenoid valves are used to actuate the steering mechanism and switch between steering configurations.",
          "Obstacle Avoidance: The robot incorporates obstacle detection and avoidance during autonomous movement."
        ],
        paragraphsAfter: [
          "The project demonstrates the integration of mechanical steering, electromechanical actuation, autonomous navigation, and mobile robotics to achieve enhanced maneuverability."
        ]
      },
      {
        heading: "Results & Testing Milestones",
        paragraphs: [
          "The developed prototype demonstrated switchable two-wheel and four-wheel steering operation along with autonomous movement, obstacle avoidance, and improved maneuverability."
        ]
      }
    ]
  },

  "project6": {
    subtitle: "A miniature walking robot capable of moving from one location to another using motor-driven legs with ultrasonic-based object detection and obstacle avoidance.",
    images: Array.from({ length: 1 }, (_, i) => `./project_pictures/project6/${i + 1}.png`),
    metrics: [
      { value: "ESP32", label: "Core Controller" },
      { value: "Ultrasonic", label: "Obstacle Detection" },
      { value: "Motor Driver", label: "Motor Control" },
      { value: "Walking", label: "Robot Movement" }
    ],
    techSpecs: [
      { label: "Microcontroller", value: "ESP32" },
      { label: "Sensor", value: "Ultrasonic Sensor" },
      { label: "Motor Control", value: "Motor Driver" },
      { label: "Actuation", value: "Motor-Driven Legs" },
      { label: "Robot Type", value: "Miniature Walking Robot" },
      { label: "Navigation", value: "Obstacle Detection & Avoidance" }
    ],
    architectureTitle: "Walking Robot & Obstacle Avoidance Flow",
    architectureNodes: [
      { title: "1. Ultrasonic Sensor", desc: "Measures distance to objects in front of the robot", icon: "upload-cloud" },
      { title: "2. ESP32 Controller", desc: "Processes sensor information and determines robot movement", icon: "cpu" },
      { title: "3. Obstacle Detection", desc: "Identifies obstacles present in the robot's walking path", icon: "shuffle" },
      { title: "4. Motor Driver", desc: "Controls the motors responsible for the robot's leg movement", icon: "hard-drive" },
      { title: "5. Walking Mechanism", desc: "Motor-driven legs move the robot from one location to another", icon: "monitor" }
    ],
    narratives: [
      {
        heading: "Project Overview & Engineering Goals",
        paragraphs: [
          "Developed a miniature walking robot capable of moving from one location to another using motors that act as the robot's legs.",
          "The main objective was to create a compact mobile robot that combines embedded control, ultrasonic sensing, motor driving, and a mechanical walking mechanism."
        ]
      },
      {
        heading: "Embedded Control & Obstacle Avoidance",
        paragraphs: [
          "The ESP32 processes information from the ultrasonic sensor and controls the walking mechanism through the motor driver:"
        ],
        bullets: [
          "Ultrasonic Detection: Measures the distance to objects and identifies obstacles in the robot's path.",
          "ESP32 Processing: Processes the sensor information and controls the robot's movement.",
          "Motor Driver Control: Provides the required motor control signals for the motors used as the robot's legs.",
          "Obstacle Avoidance: The robot responds to detected obstacles while moving through its environment."
        ],
        paragraphsAfter: [
          "The project demonstrates the integration of ultrasonic sensing, embedded programming, motor-driver control, and mechanical walking in a compact miniature robotic platform."
        ]
      },
      {
        heading: "Results & Testing Milestones",
        paragraphs: [
          "The prototype demonstrated walking movement from one location to another while using ultrasonic sensing for object detection and obstacle avoidance."
        ]
      }
    ]
  },
  "project7": {
    subtitle: "A quadruped walking robot prototype developed with a multi-leg mechanical structure and servo-driven joints for legged locomotion and robotic movement.",
    images: Array.from({ length: 1 }, (_, i) => `./project_pictures/project7/${i + 1}.png`),
    metrics: [
      { value: "Quadruped", label: "Robot Platform" },
      { value: "Servo Motors", label: "Leg Actuation" },
      { value: "4-Leg", label: "Walking Mechanism" },
      { value: "Prototype", label: "Development Stage" }
    ],
    techSpecs: [
      { label: "Robot Type", value: "Quadruped Walking Robot" },
      { label: "Mechanical Structure", value: "Custom Multi-Leg Frame" },
      { label: "Actuation", value: "Servo-Driven Leg Joints" },
      { label: "Locomotion", value: "Legged Walking Mechanism" },
      { label: "Control System", value: "Embedded Robotic Control" },
      { label: "Development", value: "Physical Working Prototype" }
    ],
    architectureTitle: "Quadruped Locomotion & Leg Actuation Flow",
    architectureNodes: [
      { title: "1. Control Input", desc: "Provides movement commands for the quadruped robot", icon: "upload-cloud" },
      { title: "2. Motion Processing", desc: "Processes the required movement for the individual legs", icon: "cpu" },
      { title: "3. Joint Coordination", desc: "Coordinates servo-driven joints across the four legs", icon: "shuffle" },
      { title: "4. Servo Actuation", desc: "Drives the leg joints to produce the required motion", icon: "hard-drive" },
      { title: "5. Walking Mechanism", desc: "Converts coordinated leg movement into quadruped locomotion", icon: "monitor" }
    ],
    narratives: [
      {
        heading: "Project Overview & Engineering Goals",
        paragraphs: [
          "Designed and developed a quadruped walking robot prototype with a custom mechanical structure and servo-driven leg mechanisms.",
          "The project focused on developing a legged robotic platform capable of coordinated movement by controlling multiple joints across four legs."
        ]
      },
      {
        heading: "Quadruped Mechanism & Motion Control",
        paragraphs: [
          "The robot combines a custom mechanical frame, multiple servo-driven joints, and coordinated leg movement to achieve quadruped locomotion:"
        ],
        bullets: [
          "Four-Leg Structure: Uses four independently articulated legs to support the robot and generate walking motion.",
          "Servo Actuation: Servo motors provide controlled movement at the robotic leg joints.",
          "Joint Coordination: Multiple leg joints are coordinated to produce stable and repeatable walking movements.",
          "Mechanical Integration: The custom-built frame integrates the leg mechanisms and actuators into a compact robotic platform."
        ],
        paragraphsAfter: [
          "The project demonstrates practical experience in legged robotics, servo actuation, mechanical integration, and multi-joint robotic motion."
        ]
      },
      {
        heading: "Results & Testing Milestones",
        paragraphs: [
          "The completed prototype demonstrated coordinated movement of the four legs and provided a working platform for experimenting with quadruped robotic locomotion."
        ]
      }
    ]
  },
};
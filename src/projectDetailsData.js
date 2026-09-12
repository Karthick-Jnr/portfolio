export const projectDetailsData = {
  "project1": {
    subtitle: "A template project for autonomous mobile robotics, embedded firmware architecture, and sensor-driven navigation.",
    images: Array.from({ length: 4 }, (_, i) => `./project_pictures/project1/${i + 1}.png`),
    metrics: [
      { value: "STM32", label: "Core MCU" },
      { value: "PID", label: "Motor Control" },
      { value: "100Hz", label: "Sensor Loop" },
      { value: "Autonomous", label: "Navigation Mode" }
    ],
    techSpecs: [
      { label: "Microcontroller", value: "STM32F4 / ARM Cortex-M4" },
      { label: "Language", value: "Embedded C / C++" },
      { label: "Middleware", value: "FreeRTOS / Micro-ROS" },
      { label: "Sensors", value: "IMU, Ultrasonic & LiDAR" },
      { label: "Actuation", value: "DC Geared Motors + Encoders" },
      { label: "Power System", value: "3S LiPo + Buck Regulators" }
    ],
    architectureTitle: "Embedded System & Control Flow",
    architectureNodes: [
      { title: "1. Sensor Array", desc: "IMU & distance telemetry sampling", icon: "upload-cloud" },
      { title: "2. RTOS Tasks", desc: "Preemptive sensor fusion scheduling", icon: "cpu" },
      { title: "3. Kinematics Solver", desc: "Differential drive velocity calculations", icon: "shuffle" },
      { title: "4. Motor Drivers", desc: "PWM H-Bridge actuation control", icon: "hard-drive" },
      { title: "5. Telemetry & UI", desc: "Wireless status monitoring dashboard", icon: "monitor" }
    ],
    narratives: [
      {
        heading: "Project Overview & Engineering Goals",
        paragraphs: [
          "This is a template showcase for Project 1. Replace this narrative with the background of your autonomous robotics or embedded design project.",
          "Describe the key challenges faced during mechanical design, firmware development, sensor integration, and real-time control optimization."
        ]
      },
      {
        heading: "Embedded Firmware & Real-Time Control",
        paragraphs: [
          "Explain the low-level architecture used in the project, such as microcontroller timers, interrupts, and communication protocols (I2C, SPI, UART, CAN):"
        ],
        bullets: [
          "Sensor Fusion: Combining IMU orientation data with wheel encoder feedback for accurate dead-reckoning odometry.",
          "PID Velocity Control: Tuning proportional-integral-derivative loops to ensure smooth trajectory execution under variable payloads.",
          "Fail-Safe Protocols: Automated emergency shutdown routines triggered upon obstacle detection or signal loss."
        ],
        paragraphsAfter: [
          "Detail how hardware and software work in harmony to guarantee predictable, fail-safe operation."
        ]
      },
      {
        heading: "Results & Testing Milestones",
        paragraphs: [
          "Summarize benchmark results, runtime battery performance, positional accuracy, or physical testing milestones achieved during fabrication and field testing."
        ]
      }
    ]
  },

  "project2": {
    subtitle: "A template project for multi-axis robotic arm design, inverse kinematics modeling, and automated pick-and-place manipulation.",
    images: Array.from({ length: 4 }, (_, i) => `./project_pictures/project2/${i + 1}.png`),
    metrics: [
      { value: "4-DOF", label: "Articulated Axis" },
      { value: "±0.5mm", label: "Position Repeatability" },
      { value: "Inverse", label: "Kinematics Engine" },
      { value: "Custom", label: "End-Effector Gripper" }
    ],
    techSpecs: [
      { label: "Hardware Platform", value: "Custom Aluminum & 3D Printed Chassis" },
      { label: "Controller", value: "Arduino Mega / ESP32" },
      { label: "Kinematics", value: "Analytical Inverse Kinematics (Python)" },
      { label: "CAD Suite", value: "SolidWorks / Fusion 360" },
      { label: "Actuators", value: "High-Torque Metal Gear Servos" },
      { label: "Interface", value: "Serial GUI / Robotic Control Panel" }
    ],
    architectureTitle: "Manipulator Kinematics & Control Flow",
    architectureNodes: [
      { title: "1. Motion Planner", desc: "Waypoint trajectory planning in Python", icon: "monitor" },
      { title: "2. Kinematics Engine", desc: "Computes joint angles for target coordinates", icon: "cpu" },
      { title: "3. Serial Protocol", desc: "Transmits angle packets via UART", icon: "terminal" },
      { title: "4. Microcontroller", desc: "PWM timer generation for multi-axis servos", icon: "hard-drive" },
      { title: "5. Gripper Mechanism", desc: "Object grasping and optical limit sensing", icon: "shield" }
    ],
    narratives: [
      {
        heading: "Robotic Manipulator Conception & Design",
        paragraphs: [
          "This is a template showcase for Project 2. Replace this narrative with details about your robotic arm, automated gripper, or mechanical design project.",
          "Describe the design constraints, payload capacity, reach specifications, and degree-of-freedom selections."
        ]
      },
      {
        heading: "Kinematics Modeling & Motion Planning",
        paragraphs: [
          "Explain the mathematical modeling applied to translate Cartesian coordinates (X, Y, Z) into precise joint motor angles:"
        ],
        bullets: [
          "Denavit-Hartenberg (D-H) Parameters: Establishing link frames to compute forward kinematic transformation matrices.",
          "Inverse Kinematics Solver: Geometric and algebraic solutions resolving target end-effector coordinates into motor PWM duty cycles.",
          "Trajectory Interpolation: Generating cubic spline trajectories to avoid abrupt acceleration jerks and mechanical stress."
        ],
        paragraphsAfter: [
          "Describe how physical hardware tolerances were accounted for during software calibration."
        ]
      },
      {
        heading: "Fabrication & Real-World Validation",
        paragraphs: [
          "Outline the manufacturing methods (3D printing, CNC machining, laser cutting), assembly workflow, and automated pick-and-place cycle test results."
        ]
      }
    ]
  }
};
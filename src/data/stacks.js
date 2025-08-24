export const STACKS = {
  web: {
    label: "Web",
    nodes: {
      react:     { x: 34, y: 28, label: "React",      icon: "react",      class: "text-cyan-400" },
      js:        { x: 66, y: 28, label: "JavaScript", icon: "javascript", class: "text-yellow-400" },
      node:      { x: 50, y: 50, label: "Node.js",    icon: "node",       class: "text-green-400" },
      express:   { x: 58, y: 54, label: "Express",    icon: "express",    class: "text-gray-200" },
      mongo:     { x: 42, y: 72, label: "MongoDB",    icon: "mongo",      class: "text-green-500" },
      postgres:  { x: 66, y: 70, label: "PostgreSQL", icon: "postgres",   class: "text-sky-400" },
    },
    connections: [
      { from: "react", to: "node" },
      { from: "js",    to: "node" },
      { from: "node",  to: "express" },
      { from: "express", to: "mongo" },
      { from: "express", to: "postgres" },
    ],
  },

  game: {
    label: "Game",
    nodes: {
      godot:     { x: 30, y: 30, label: "Godot",     icon: "godot",    class: "text-sky-400" },
      csharp:    { x: 20, y: 55, label: "C#",        icon: "csharp",   class: "text-indigo-300" },
      gdscript:  { x: 40, y: 60, label: "GDScript",  icon: "gdscript", class: "text-purple-300" },
      cpp:       { x: 70, y: 30, label: "C++",       icon: "cpp",      class: "text-blue-400" },
      raylib:    { x: 60, y: 55, label: "raylib",    icon: "raylib",   class: "text-red-300" },
      sfml:      { x: 80, y: 55, label: "SFML",      icon: "sfml",     class: "text-green-300" },
    },
    connections: [
      { from: "godot", to: "csharp" },
      { from: "godot", to: "gdscript" },
      { from: "cpp",   to: "raylib" },
      { from: "cpp",   to: "sfml" },
    ],
  },

  embedded: {
  label: "Embedded",
  nodes: {
    c:          { x: 50, y: 15, label: "C",            icon: "c",        class: "text-blue-400" },
    stm32:      { x: 30, y: 40, label: "STM32",        icon: "stm32",    class: "text-cyan-300" },
    esp32:      { x: 50, y: 45, label: "ESP32",        icon: "esp32",    class: "text-emerald-300" },
    arduino:    { x: 70, y: 40, label: "Arduino",      icon: "arduino",  class: "text-sky-300" },
    armasm:     { x: 20, y: 70, label: "ARM Assembly", icon: "armasm",   class: "text-orange-300" },
    keil:       { x: 35, y: 70, label: "Keil (MDK)",   icon: "keil",     class: "text-gray-200" },
    arduinoide: { x: 70, y: 70, label: "Arduino IDE",  icon: "arduinoide", class: "text-sky-200" },
  },
  connections: [
    // Central C links to all MCUs
    { from: "c", to: "stm32" },
    { from: "c", to: "esp32" },
    { from: "c", to: "arduino" },

    // STM32-specific
    { from: "stm32", to: "armasm" },
    { from: "stm32", to: "keil" },

    // Arduino-specific
    { from: "arduino", to: "arduinoide" },
  ],
},


};

export const STACK_ORDER = ["web", "game", "embedded"];

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
      godot:     { x: 35, y: 35, label: "Godot",     icon: "godot",    class: "text-sky-400" },
      csharp:    { x: 65, y: 35, label: "C#",        icon: "csharp",   class: "text-indigo-300" },
      gdscript:  { x: 45, y: 60, label: "GDScript",  icon: "gdscript", class: "text-purple-300" },
      raylib:    { x: 70, y: 62, label: "raylib",    icon: "raylib",   class: "text-red-300" },
    },
    connections: [
      { from: "godot", to: "gdscript" },
      { from: "godot", to: "csharp" },
      { from: "csharp", to: "raylib", bend: -40 },   // small custom bend
    ],
  },

  embedded: {
    label: "Embedded",
    nodes: {
      stm32:      { x: 30, y: 40, label: "STM32",       icon: "stm32",      class: "text-cyan-300" },
      esp32:      { x: 50, y: 25, label: "ESP32",       icon: "esp32",      class: "text-emerald-300" },
      arduino:    { x: 70, y: 40, label: "Arduino",     icon: "arduino",    class: "text-sky-300" },
      arduinoide: { x: 30, y: 70, label: "Arduino IDE", icon: "arduinoide", class: "text-sky-200" },
      keil:       { x: 70, y: 70, label: "Keil (MDK)",  icon: "keil",       class: "text-gray-200" },
    },
    connections: [
      { from: "stm32", to: "keil" },
      { from: "arduino", to: "arduinoide" },
      { from: "esp32", to: "stm32", bend: -30 },
      { from: "esp32", to: "arduino", bend: -30 },
    ],
  },
};


export const STACK_ORDER = ["web", "game", "embedded"];

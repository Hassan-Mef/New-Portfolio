import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript, SiExpress, SiPostgresql, SiGodotengine } from "react-icons/si";
import { ICONS } from "../assets/Icons";

export const iconMap = {
  // Web
  react: FaReact,
  javascript: SiJavascript,
  node: FaNodeJs,
  express: SiExpress,
  mongo: SiMongodb,
  postgres: SiPostgresql,
  database: FaDatabase,
  tailwind: SiTailwindcss,

  // Game
  godot: SiGodotengine,
  csharp: ICONS.csharp,
  cpp: ICONS.cpp,
  raylib: ICONS.raylib,
  sfml: ICONS.sfml,
  gdscript :ICONS.gdscript,

  // Embedded
  c: ICONS.c,
  stm32: ICONS.stm32,
  esp32: ICONS.esp32,
  keil: ICONS.keil,
  arm: ICONS.arm,
  armcortex: ICONS.armcortex,
  arduinoide:ICONS.arduinoIDE,
};

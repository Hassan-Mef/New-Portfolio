import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGodotengine,
  SiCashapp,
  SiArduino,
} from "react-icons/si";
import { FaMicrochip } from "react-icons/fa";



export const ICONS = {
  react: SiReact,
  javascript: SiJavascript,
  node: SiNodedotjs,
  express: SiExpress,
  mongo: SiMongodb,
  postgres: SiPostgresql,

  // Game
  godot: SiGodotengine,
  csharp: SiCashapp,
  gdscript: FaMicrochip, // fallback
  raylib: FaMicrochip,   // fallback

  // Embedded
  stm32: FaMicrochip,
  esp32: FaMicrochip,
  arduino: SiArduino,
  arduinoide: FaMicrochip,
  keil: FaMicrochip,
};

/*************************************************************************
 * This file is part of input-overlay
 * git.vrsal.cc/alex/input-overlay
 * Copyright 2025 univrsal <uni@vrsal.xyz>.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 2 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *************************************************************************/

var key2vc = new Map();
var key2vcnew = new Map(); // use this once 5.0.7 is released
var mouse2vc = new Map();
var gamepad2vc = new Map();
var vc2gamepad = new Map();
var legacy2sdl2 = new Map();

var vcto507 = new Map();

$(function () {
  
  let vc = (id, vc) => {
    key2vc.set(id, vc);
    key2vcnew.set(id, vcto507.get(vc));
  };
  let vc2 = (vcold, vcnew) => vcto507.set(vcnew, vcold);

  let gp = (id, vc) => {
    gamepad2vc.set(id, vc);
    vc2gamepad.set(vc, id);
  };
  let lgp2sdl = (libgamepad, sdl2) => {
    legacy2sdl2.set(libgamepad, sdl2);
  };

  
  // <5.0.7 to 5.0.7+ keycodes
  vc2(0x0041, 0x001e);
  vc2(0x0042, 0x0030);
  vc2(0x0043, 0x002e);
  vc2(0x0044, 0x0020);
  vc2(0x0045, 0x0012);
  vc2(0x0046, 0x0021);
  vc2(0x0047, 0x0022);
  vc2(0x0048, 0x0023);
  vc2(0x0049, 0x0017);
  vc2(0x004A, 0x0024);
  vc2(0x004B, 0x0025);
  vc2(0x004C, 0x0026);
  vc2(0x004D, 0x0032);
  vc2(0x004E, 0x0031);
  vc2(0x004F, 0x0018);
  vc2(0x0050, 0x0019);
  vc2(0x0051, 0x0010);
  vc2(0x0052, 0x0013);
  vc2(0x0053, 0x001f);
  vc2(0x0054, 0x0014);
  vc2(0x0055, 0x0016);
  vc2(0x0056, 0x002f);
  vc2(0x0057, 0x0011);
  vc2(0x0058, 0x002d);
  vc2(0x0059, 0x0015);
  vc2(0x005A, 0x002c);
  vc2(0x0030, 0x0002);
  vc2(0x0031, 0x0003);
  vc2(0x0032, 0x0004);
  vc2(0x0033, 0x0005);
  vc2(0x0034, 0x0006);
  vc2(0x0035, 0x0007);
  vc2(0x0036, 0x0008);
  vc2(0x0037, 0x0009);
  vc2(0x0038, 0x000a);
  vc2(0x0039, 0x000b);
  vc2(0x00C0, 0x0029);
  vc2(0x0070, 0x003b);
  vc2(0x0071, 0x003c);
  vc2(0x0072, 0x003d);
  vc2(0x0073, 0x003e);
  vc2(0x0074, 0x003f);
  vc2(0x0075, 0x0040);
  vc2(0x0076, 0x0041);
  vc2(0x0077, 0x0042);
  vc2(0x0078, 0x0043);
  vc2(0x0079, 0x0044);
  vc2(0x007A, 0x0057);
  vc2(0x007B, 0x0058);
  vc2(0xF000, 0x005b);
  vc2(0xF001, 0x005c);
  vc2(0xF002, 0x005d);
  vc2(0xF003, 0x0063);
  vc2(0xF004, 0x0064);
  vc2(0xF005, 0x0065);
  vc2(0xF006, 0x0066);
  vc2(0xF007, 0x0067);
  vc2(0xF008, 0x0068);
  vc2(0xF009, 0x0069);
  vc2(0xF00A, 0x006a);
  vc2(0xF00B, 0x006b);
  vc2(0x001B, 0x0001);
  vc2(0x002D, 0x000c);
  vc2(0x003D, 0x000d);
  vc2(0x0008, 0x000e);
  vc2(0x0009, 0x000f);
  vc2(0x0014, 0x003a);
  vc2(0x005C, 0x001b);
  vc2(0x005B, 0x001a);
  vc2(0x005D, 0x002b);
  vc2(0x003B, 0x0027);
  vc2(0x00DE, 0x0028);
  vc2(0x000A, 0x001c);
  vc2(0x002C, 0x0033);
  vc2(0x002E, 0x0034);
  vc2(0x002F, 0x0035);
  vc2(0x0020, 0x0039);
  vc2(0x009A, 0x0e37);
  vc2(0x0091, 0x0046);
  vc2(0x0013, 0x0e45);
  vc2(0x0099, 0x0e46);
  vc2(0x009B, 0x0e52);
  vc2(0x007F, 0x0e53);
  vc2(0x0024, 0x0e47);
  vc2(0x0023, 0x0e4f);
  vc2(0x0021, 0x0e49);
  vc2(0x0022, 0x0e51);

  vc2(0x0026, 0xe048);
  vc2(0x0025, 0xe04b);
  vc2(0x0027, 0xe04d);
  vc2(0x0028, 0xe050);

  vc2(0x007C, 0x0e0d);
  vc2(0x0090, 0x0045);
  vc2(0x006F, 0x0e35);
  vc2(0x006A, 0x0037);
  vc2(0x006D, 0x004a);
  vc2(0x006B, 0x004e);
  vc2(0x007D, 0x0e1c);
  vc2(0x006E, 0x0053);

  vc2(0x0060, 0x004f);
  vc2(0x0061, 0x0050);
  vc2(0x0062, 0x0051);
  vc2(0x0063, 0x004b);
  vc2(0x0064, 0x004c);
  vc2(0x0065, 0x004d);
  vc2(0x0066, 0x0047);
  vc2(0x0067, 0x0048);
  vc2(0x0068, 0x0049);
  vc2(0x0069, 0x0052);

  vc2(0x0023, 0xee4f);
  vc2(0x0028, 0xee50);
  vc2(0x0022, 0xee51);
  vc2(0x0025, 0xee4b);
  // vc2('NumpadClear', 0xee4c);
  vc2(0x0027, 0xee4d);
  vc2(0x0024, 0xee47);
  vc2(0x0026, 0xee48);
  vc2(0x0021, 0xee49);
  vc2(0x009B, 0xee52);
  vc2(0x007F, 0xee53);

  vc2(0xA010, 0x002a);
  vc2(0xB010, 0x0036);
  vc2(0xA011, 0x001d);
  vc2(0xB011, 0x0e1d);
  vc2(0xA012, 0x0038);
  vc2(0xB012, 0x0e38);
  vc2(0xA09D, 0x0e5b);
  vc2(0xB09D, 0x0e5c);
  vc2(0x020D, 0x0e5d);

  // some keys are postfixed with their DOM3 location
  // No postfix = location 0
  // 1 = Left, 2 = Right, 3 = Numpad
  vc('KeyA', 0x001e);
  vc('KeyB', 0x0030);
  vc('KeyC', 0x002e);
  vc('KeyD', 0x0020);
  vc('KeyE', 0x0012);
  vc('KeyF', 0x0021);
  vc('KeyG', 0x0022);
  vc('KeyH', 0x0023);
  vc('KeyI', 0x0017);
  vc('KeyJ', 0x0024);
  vc('KeyK', 0x0025);
  vc('KeyL', 0x0026);
  vc('KeyM', 0x0032);
  vc('KeyN', 0x0031);
  vc('KeyO', 0x0018);
  vc('KeyP', 0x0019);
  vc('KeyQ', 0x0010);
  vc('KeyR', 0x0013);
  vc('KeyS', 0x001f);
  vc('KeyT', 0x0014);
  vc('KeyU', 0x0016);
  vc('KeyV', 0x002f);
  vc('KeyW', 0x0011);
  vc('KeyX', 0x002d);
  vc('KeyY', 0x0015);
  vc('KeyZ', 0x002c);
  vc('Digit1', 0x0002);
  vc('Digit2', 0x0003);
  vc('Digit3', 0x0004);
  vc('Digit4', 0x0005);
  vc('Digit5', 0x0006);
  vc('Digit6', 0x0007);
  vc('Digit7', 0x0008);
  vc('Digit8', 0x0009);
  vc('Digit9', 0x000a);
  vc('Digit0', 0x000b);
  vc('Backquote', 0x0029);
  vc('F1', 0x003b);
  vc('F2', 0x003c);
  vc('F3', 0x003d);
  vc('F4', 0x003e);
  vc('F5', 0x003f);
  vc('F6', 0x0040);
  vc('F7', 0x0041);
  vc('F8', 0x0042);
  vc('F9', 0x0043);
  vc('F10', 0x0044);
  vc('F11', 0x0057);
  vc('F12', 0x0058);
  vc('F13', 0x005b);
  vc('F14', 0x005c);
  vc('F15', 0x005d);
  vc('F16', 0x0063);
  vc('F17', 0x0064);
  vc('F18', 0x0065);
  vc('F19', 0x0066);
  vc('F20', 0x0067);
  vc('F21', 0x0068);
  vc('F22', 0x0069);
  vc('F23', 0x006a);
  vc('F24', 0x006b);
  vc('Escape', 0x0001);
  vc('Minus', 0x000c);
  vc('Equal', 0x000d);
  vc('Backspace', 0x000e);
  vc('Tab', 0x000f);
  vc('CapsLock', 0x003a);
  vc('BracketRight', 0x001b);
  vc('BracketLeft', 0x001a);
  vc('Backslash', 0x002b);
  vc('Semicolon', 0x0027);
  vc('Quote', 0x0028);
  vc('Enter', 0x001c);
  vc('Comma', 0x0033);
  vc('Period', 0x0034);
  vc('Slash', 0x0035);
  vc('Space', 0x0039);
  vc('PrintScreen', 0x0e37);
  vc('ScrollLock', 0x0046);
  vc('Pause', 0x0e45);
  vc('IntlBackslash', 0x0e46);
  vc('Insert', 0x0e52);
  vc('Delete', 0x0e53);
  vc('Home', 0x0e47);
  vc('End', 0x0e4f);
  vc('PageUp', 0x0e49);
  vc('PageDown', 0x0e51);

  vc('ArrowUp', 0xe048);
  vc('ArrowLeft', 0xe04b);
  vc('Clear', 0xe04c);
  vc('ArrowRight', 0xe04d);
  vc('ArrowDown', 0xe050);

  vc('NumpadEquals', 0x0e0d);
  vc('NumLock', 0x0045);
  vc('NumpadDivide', 0x0e35);
  vc('NumpadMultiply', 0x0037);
  vc('NumpadSubtract', 0x004a);
  vc('NumpadAdd', 0x004e);
  vc('NumpadEnter', 0x0e1c);
  vc('NumpadDecimal', 0x0053);

  vc('Numpad1', 0x004f);
  vc('Numpad2', 0x0050);
  vc('Numpad3', 0x0051);
  vc('Numpad4', 0x004b);
  vc('Numpad5', 0x004c);
  vc('Numpad6', 0x004d);
  vc('Numpad7', 0x0047);
  vc('Numpad8', 0x0048);
  vc('Numpad9', 0x0049);
  vc('Numpad0', 0x0052);

  vc('NumpadEnd', 0xee4f);
  vc('NumpadArrowDown', 0xee50);
  vc('NumpadPageDown', 0xee51);
  vc('NumpadArrowLeft', 0xee4b);
  vc('NumpadClear', 0xee4c);
  vc('NumpadArrowRight', 0xee4d);
  vc('NumpadHome', 0xee47);
  vc('NumpadArrowUp', 0xee48);
  vc('NumpadPageUp', 0xee49);
  vc('NumpadInsert', 0xee52);
  vc('NumpadDelete', 0xee53);

  vc('ShiftLeft', 0x002a);
  vc('ShiftRight', 0x0036);
  vc('ControlLeft', 0x001d);
  vc('ControlRight', 0x0e1d);
  vc('AltLeft', 0x0038);
  vc('AltRight', 0x0e38);
  vc('MetaLeft', 0x0e5b);
  vc('MetaRight', 0x0e5c);
  vc('ContextMenu', 0x0e5d);

  mouse2vc.set(0, 1);
  mouse2vc.set(1, 3);
  mouse2vc.set(2, 2);
  mouse2vc.set(3, 4);
  mouse2vc.set(4, 5);

  // browser <-> SDL2 mappings
  gp(0, 0); // a
  gp(1, 1); // b
  gp(2, 2); // x
  gp(3, 3); // y
  gp(4, 9); // left shoulder
  gp(5, 10); // right shoulder
  gp(8, 4); // back
  gp(9, 6); // start
  gp(10, 7); // left thumb stick down
  gp(11, 8); // right thumb stick down
  gp(12, 11); // up
  gp(13, 12); // down
  gp(14, 13); // dpad left
  gp(15, 14); // dpad right
  gp(16, 5); // guide

  lgp2sdl(0xec00, 0);
  lgp2sdl(0xec01, 1);
  lgp2sdl(0xec02, 2);
  lgp2sdl(0xec03, 3);
  lgp2sdl(0xec04, 9);
  lgp2sdl(0xec05, 10);
  lgp2sdl(0xec06, 4);
  lgp2sdl(0xec07, 6);
  lgp2sdl(0xec09, 7);
  lgp2sdl(0xec0a, 8);
  lgp2sdl(0xec0d, 11);
  lgp2sdl(0xec0e, 12);
  lgp2sdl(0xec0b, 13);
  lgp2sdl(0xec0c, 14);
  lgp2sdl(0xec08, 5);
});

function gamepad_to_vc(button) {
  if (gamepad2vc.has(button)) return gamepad2vc.get(button);
  return 0;
}

function gamepad_from_vc(vc) {
  if (vc2gamepad.has(vc)) return vc2gamepad.get(vc);
  return 0;
}

function mouse_to_vc(e) {
  let button = e.button;

  if (mouse2vc.has(button)) return mouse2vc.get(button);
  return 0;
}

function key_to_vc(e) {
  let key = e.code;

  if (key.indexOf('Numpad') >= 0 && /^[0-9]$/g.test(key.slice(-1))) {
    // Numpad has special handling
    // all keys Numpad1 through Numpad9 should use the key
    // so that we can tell numpad buttons with numlock on apart from
    // numpad buttons with numpad off
    key = key.slice(0, -1) + e.key;
  }

  if (key === 'NumpadDecimal' && e.keyCode === 46) key = 'NumpadDelete';

  if (key2vc.has(key)) return key2vc.get(key);
  return 0;
}

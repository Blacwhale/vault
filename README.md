# Vault | Personal Finance Environment

![Vault Concept](https://img.shields.io/badge/Status-Evaluation_Ready-D4AF37?style=for-the-badge) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)

Vault is a next-generation personal finance tracking interface. Distinct from legacy budgeting tools that rely exclusively on sterile mathematics, Vault inherently connects capital flow to human psychology by mapping precise transaction ledgers against logged emotional vectors over time.

## 🚀 Technical Architecture
This application is designed as a standalone, ultra-performant Single Page Application (SPA).
* **Framework**: React 18 / Vite Build Engine
* **Language**: Fully typed TypeScript ecosystem
* **Routing**: Client-side structure via `react-router`
* **Interaction Physics**: Spring-loaded animation routing mapped with `motion/react`
* **PWA Strategy**: Configured viewport metadata enforcing standalone mobile constraints (`apple-mobile-web-app-capable`)

## 🎨 UI/UX Mechanisms
The graphical layer emphasizes a "stealth wealth" aesthetic, leaning deliberately away from neon gamification. 
* **Custom Shader Logic**: Implemented an embedded base64 SVG Fractal Noise texture (`<feTurbulence>`) layered dynamically across the core `#0A0B0B` header gradients to simulate a physical metallic/paper surface.
* **Complex Glassmorphism**: Utilized advanced structural lighting via `backdrop-filter` and specific `inset` box-shadow properties mirroring refractive light behavior inside floating UI elements.
* **Component Motion State**: Heavy utilization of `layoutId` within Framer Motion causing elements (like active navbar tabs) to physically travel the DOM during state changes rather than abruptly snapping.

## 🛠 Active Development Commands

To view and interact with the Vault UI locally:

```bash
# 1. Install all dependencies strictly
npm install

# 2. Boot the high-speed Vite development server
npm run dev

# 3. Compile local typescript checks
npx tsc --noEmit

# 4. Compile the production bundle explicitly to /dist
npm run build
```

---
*Developed as a high-fidelity frontend evaluation prototype balancing dense data visualization algorithms against bespoke aesthetic systems.*
<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:091321,100:0891b2&height=170&section=header&text=Consistent%20Hash%20Ring&fontColor=ecfeff&fontSize=38" width="100%" alt="Consistent Hash Ring banner"/>
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=900&color=67E8F9&center=true&vCenter=true&width=620&lines=Map+keys+to+distributed+nodes;Explore+virtual+nodes+and+remapping" alt="Animated tagline"/>
<p><strong>A local visual explorer for consistent hashing.</strong></p>
<img src="https://img.shields.io/github/license/CyberLoop-dev/consistent-hash-ring?style=flat-square" alt="License"/> <img src="https://img.shields.io/github/languages/top/CyberLoop-dev/consistent-hash-ring?style=flat-square" alt="Language"/> <img src="https://img.shields.io/github/stars/CyberLoop-dev/consistent-hash-ring?style=flat-square" alt="Stars"/> <img src="https://img.shields.io/github/last-commit/CyberLoop-dev/consistent-hash-ring?style=flat-square" alt="Last commit"/>
<br/><img src="./assets/mark.svg" width="90%" alt="Hash ring illustration"/>
</div>

## 🧭 Overview
Consistent Hash Ring maps keys to the next virtual node on a deterministic 32-bit hash ring. Change the server list or virtual-node count to see ownership move.

## ✨ Features
- 🧭 Visualize physical nodes and their virtual points.
- 🔑 Map arbitrary keys to a responsible node.
- ➕ Add or remove nodes by editing the cluster list.
- ⚖️ Explore how virtual-node count affects distribution.
- 🔒 Run the model locally without a backend.

## 🎬 Demo
Start the app; a three-node cluster and sample keys are preloaded. Remove one node and rebuild the ring to compare assignments.

## 🚀 Quick Start
Requires Node.js 20 or newer.

```bash
npm start
```

Open http://127.0.0.1:4177. Run checks with npm test.

## 🧰 Tech Stack
- 🟢 Node.js built-in HTTP server
- 🌐 Browser JavaScript and SVG
- 🧪 Node.js built-in test runner

## 🗂️ Folder Structure
```text
public/       Hash ring model and visualization
test/         Hashing and mapping tests
assets/       Original SVG artwork
.github/      CI workflow
server.js     Dependency-free static server
```

## 🛣️ Roadmap
- [ ] Compare key movement before and after node changes.
- [ ] Add alternative hash functions.
- [ ] Export ownership maps as JSON.

## 🤝 Contributing
Contributions are welcome. Keep hashing deterministic, document collision handling, and add tests for ring wrap-around.

## 📄 License
MIT. See LICENSE.

<div align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:0891b2,100:091321&height=100&section=footer" width="100%" alt="Animated wave footer"/></div>

# SQL Hunter - Automated Vulnerability Scanner

## Overview
SQL Hunter is a specialized security tool developed in **Node.js** designed to automate the detection of **SQL Injection** vulnerabilities. It moves beyond manual testing by utilizing payload lists and real-time server response analysis.

## Key Features
- **Automated Payload Injection:** Reads multiple payloads from external files for sequential testing.
- **Error-Based Analysis:** Detects database syntax leaks (MySQL, Oracle, etc.) directly from HTML responses.
- **Result Exporting:** Automatically generates a `results.txt` report containing all successful hits.
- **Asynchronous Engine:** Built with `async/await` to handle network requests efficiently without blocking the execution flow.

## Technical Stack
- **Language:** JavaScript (Node.js).
- **Libraries:** Axios (HTTP requests), File System (File I/O).

## Learning Journey
This project was developed as part of my deep dive into **Web Security and Reverse Engineering**, bridging the gap between low-level memory analysis and high-level web vulnerabilities 
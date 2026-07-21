---
title: "How users navigate (Beta)"
description: "Decide if users move freely or follow a set order, with flexibility or sequential rules."
category: "create-content"
---

*NOTE: This feature is curretly in private beta.*

### **Content navigation modes**

Choose if users can go anywhere they want or if they must follow the path step-by-step.

### **The idea**

Think of HeaderPath like a big map with roads.

- **Flexible mode** = Users can walk, run, or skip to any road they want.
- **Sequential mode** = Users have to walk the roads in the right order—road 1, then road 2, then road 3.

### **The golden rule**

- If a parent is **sequential**, all its children must also be **sequential**.
- If a parent is **flexible**, each child can be **flexible** or **sequential**.

### **How it works at each level**

**Subject → Level**

1. If the Subject is sequential, all Levels inside it are sequential.
2. If the Subject is flexible, each Level can be flexible or sequential.

**Level → Path**

1. If the Level is sequential, all Paths inside it are sequential.
2. If the Level is flexible, each Path can be flexible or sequential.

**Path → Module**

1. If the Path is sequential, all Modules inside it are sequential.
2. If the Path is flexible, each Module can be flexible or sequential.

**Module → Step**

1. If the Module is sequential, all Steps inside it are sequential.
2. If the Module is flexible, each Step can be flexible or sequential.

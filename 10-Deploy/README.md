---
theme: default
_class: lead
paginate: true
backgroundColor: #fff
marp: true
backgroundImage: url('https://marp.app/assets/hero-background.svg')
header: 'Deploying'
footer: 'Marco Robol - Trento, 2024 - Software Engineering'
---

# **Deploying in the Cloud**

Software Engineering - Lab

#### Marco Robol - marco.robol@unitn.it

*Academic year 2023/2024 - Second semester*

---

# Deploying in the Cloud

> Choose between IaaS, PaaS, and SaaS - https://developer.ibm.com/articles/cl-best-practices-deploying-apps-in-cloud/

> IaaS vs PaaS: Che Differenza c’è? https://kinsta.com/it/blog/iaas-vs-paas/

---

# Modern Web Application Architecture

![w:850px](web-application-architechture-diagram.png)

> https://integrio.net/blog/modern-web-application-architecture

---

- Serverless Architecture

> In this architecture, the backend is built using cloud-based solutions, such as AWS or Azure. Each function is responsible for tasks like registering users or sending email notifications. It is highly scalable but difficult to manage and debug.
> https://integrio.net/blog/modern-web-application-architecture


![w:500px](serverless-architechture.png)

---

# Design choices for this lab

- One RESTful **Web Service** implemented in Node.js. This will be deployed on the cloud on render.com or a similar **PaaS**.

- One frontend developed in Vue.js as a **Single-Page Applications** (SPAs) e.g. Gmail, Trello, Spotify, and Twitter. Still, additional pages are allowed.

    - No Server-Side Rendered Application (SSR) e.g. WordPress, Airbnb.

    - Served as static content through CDN (Content Delivery Networks delivers content from the closest server). e.g. Cloudflare, Akamai, and Amazon CloudFront.

---

Nowadays we have a mix of statically-rendered web pages, web applications and services: **Software as a Service**, ***Platform as a Service***, ***Infrastructure as a Service***.

![w:800px](iaas-paas-saas-diagram.png)

---

## Render: Cloud Application Hosting for Developers

> Render is a unified cloud to build and run all your apps and websites with free TLS certificates, global CDN, private networks and auto deploys from Git. https://render.com/

> It’s easy to deploy a Web Service on Render. Link your GitHub or GitLab repository and click Create Web Service. Render automatically builds and deploys your service every time you push to your repository. Our platform has native support for Node.js, Python, Ruby, Elixir, Go, and Rust. If these don’t work for you, we can also build and deploy anything with a Dockerfile. https://render.com/docs/web-services

---

## Prepare and Deploy your npm Application 

1. Setup your *package.json* with dependencies and buid/start scripts.

```json
  "scripts": {
    "start": "node index.js", ...
```

2. Set listening port of your application:

```javascript
const PORT = process.env.PORT || 8080
```

3. On render.com Dashboard **Create a new Web Service** from github repository

    1. **Setup** Build Command and Start Command

    1. **Configure Environment** e.g. DB_URL and SUPER_SECRET

---

# Questions?

marco.robol@unitn.it
---
title: "Security overview"
description: "We are committed to safeguarding the confidentiality, integrity, and availability of customer data. Our infrastructure is hosted on Vercel (frontend), Railway (backend), and Supabase (database), each providing enterprise-grade security controls."
category: "security"
---

## Platform security

### Frontend hosting

- **Hosted on:** Vercel
- **Compliance & Certifications:** SOC 2 Type 2, ISO 27001:2022, GDPR, PCI DSS.
- **Network Security:** Global Edge Network with built-in DDoS mitigation, Web Application Firewall (WAF), and HTTPS by default with automatic SSL certificate management.
- **Deployment Security:** Immutable deployments tied to Git commits; full deployment history with instant rollbacks.
- **Access Controls:** Role-based team permissions and environment variable encryption.

### Backend services

- **Hosted on**: Railway
- **Compliance:** SOC 2 Type I, GDPR (DPA available).
- **Infrastructure Security:** Isolated project environments, private networking between services, and Infrastructure-as-Code (IaC) managed deployments.
- **Access Controls:** Environment-based permissions, encrypted secrets, and strict production access control.
- **Operational Security:** Deployment change logs and secure CLI/API token management.

### Database layer

- **Hosted on:** Supabade
- **Compliance:** SOC 2 Type 2.
- **Data Encryption:** AES-256 at rest and TLS 1.3 in transit.
- **Access Control:** Mandatory Row-Level Security (RLS) with granular SQL policies; strict key separation between client and server.
- **Monitoring:** Comprehensive access logging and anomaly detection.

## Internal security practices

- **Data Encryption:** All sensitive data encrypted in transit (TLS 1.3) and at rest (AES-256).
- **Principle of Least Privilege:** Team members have only the access required to perform their duties.
- **Multi-Factor Authentication (MFA):** Enforced for all critical systems and administrative accounts.
- **Environment Separation:** Dedicated staging and production environments; production data never used in development.

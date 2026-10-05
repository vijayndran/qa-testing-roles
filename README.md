# QA & Testing Roles — Enriched Taxonomy

[![build](https://github.com/vijayndran/qa-testing-roles/actions/workflows/build.yml/badge.svg)](https://github.com/vijayndran/qa-testing-roles/actions/workflows/build.yml)

A normalized, enriched taxonomy of Quality & Testing job roles. Collapses ~130 near-synonymous raw titles (from eaccmk/ALL_QA_Testing_Roles) into 18 canonical roles across a 7-specialty x 5-seniority matrix, each with a one-line JD skeleton, required/preferred skills, an indicative comp band and the raw aliases that map to it.

> **Source taxonomy:** [eaccmk/ALL_QA_Testing_Roles](https://github.com/eaccmk/ALL_QA_Testing_Roles) (MIT). This repo goes further: it de-duplicates the ~130 synonymous titles into **18 canonical roles**, adds skills, JD skeletons, indicative comp bands, career ladders and a reverse alias lookup — and ships it all as machine-readable `roles.json` plus a searchable [web page](https://vijayndran.github.io/qa-testing-roles/).

---

### Hiring QA & testing talent? StorkHR can streamline it

This taxonomy defines the roles — StorkHR helps you fill them. StorkHR is an HR platform that streamlines the whole hiring pipeline so you move from req to offer faster: structured requisitions, recruitment and interview workflows, candidate pipelines, offers and onboarding in one place.

- Turn a canonical role here into a structured requisition and JD in minutes
- Run recruitment, interview scheduling and candidate pipelines end to end
- Shorten time-to-hire with templated offers and automated onboarding

**[Explore StorkHR.com →](https://storkhr.com)**

> 🚀 **New job portal coming soon.**

---

## What's different from a plain list

| The source list | This report |
|---|---|
| ~130 raw titles, flat | 18 canonical roles in a 7×5 matrix |
| Title only | + required/preferred skills, JD skeleton, comp band |
| No structure | Career ladders + specialty tracks |
| "What *is* a Quality Advocate?" unanswered | Reverse alias lookup resolves every raw title |
| Markdown only | `roles.json` (machine-readable) + interactive HTML |

## Seniority × Specialty matrix

| Specialty ↓ / Seniority → | Entry / Junior | Mid (IC) | Senior (IC) | Lead / Principal | Manager / Head |
|---|---|---|---|---|---|
| **Manual / Functional** | Junior QA Engineer | QA Analyst | Senior QA Engineer | — | — |
| **Automation** | — | QA Automation Engineer | Senior Test Automation Engineer | Automation Architect | — |
| **SDET / Engineer-in-Test** | — | Software Development Engineer in Test (SDET) | — | Lead SDET | — |
| **Specialist (API / Perf / ETL / Security / Data)** | — | Performance Test Engineer<br>API Automation Tester<br>ETL / Data Test Engineer | Security QA Engineer | — | — |
| **Hardware / Systems** | — | Hardware Test Engineer | — | — | — |
| **Agile / UAT / UX** | — | Quality Engineer (Agile) | — | UAT Lead | — |
| **Leadership** | — | — | — | Test Lead | QA Manager<br>Head of Quality |

## Career ladders

- **Manual / Functional:** Junior QA Engineer → QA Analyst → Senior QA Engineer → QA Manager → Head of Quality
- **Automation:** Junior QA Engineer → QA Automation Engineer → Senior Test Automation Engineer → Automation Architect
- **SDET:** Software Development Engineer in Test (SDET) → Lead SDET
- **Leadership:** Senior QA Engineer → QA Manager → Head of Quality

## Canonical roles

### Junior QA Engineer

`junior-qa` · Manual / Functional · Entry / Junior · **RM2,800–RM4,500**/mo (indicative)

Executes test cases, logs defects clearly, and learns the product and SDLC/STLC under supervision.

- **Required:** Test case design, Bug reporting, SDLC/STLC basics
- **Preferred:** SQL basics, JIRA, API testing (Postman)
- **Also seen as:** Graduate Software Tester, Junior QA, Testing Associate, QA Tester, Software Tester

### QA Analyst

`qa-analyst` · Manual / Functional · Mid (IC) · **RM4,500–RM7,500**/mo (indicative)

Owns functional test planning and execution for a product area, driving defects through their lifecycle.

- **Required:** Functional testing, Test planning, Defect lifecycle, JIRA
- **Preferred:** SQL, API testing, Basic automation
- **Also seen as:** Quality Analyst, Test Analyst, Manual Test Analyst, Functional Tester, Software Test Analyst, Testing Analyst, Functional Test Analyst, Quality Assurance Analyst

### Senior QA Engineer

`senior-qa-analyst` · Manual / Functional · Senior (IC) · **RM7,500–RM12,000**/mo (indicative)

Sets risk-based test strategy for a product, mentors juniors, and is the quality authority for releases.

- **Required:** Test strategy, Risk-based testing, Mentoring, JIRA/TestRail
- **Preferred:** Automation frameworks, CI/CD, Performance basics
- **Also seen as:** Senior QA, Senior Test Analyst, QA Senior Test Analyst, Senior QA Specialist, Senior Manual Test Analyst, Senior Quality Assurance Analyst

### QA Automation Engineer

`automation-engineer` · Automation · Mid (IC) · **RM6,000–RM11,000**/mo (indicative)

Builds and maintains UI/API automated test suites and wires them into the CI pipeline.

- **Required:** Selenium/Playwright/Cypress, One of Java/JS/Python, CI/CD, Git
- **Preferred:** API automation, BDD (Cucumber), Docker
- **Also seen as:** Automation Tester, Automation Engineer, QA Automation Tester, Automation Test Analyst, Automation Software Tester

### Senior Test Automation Engineer

`senior-automation-engineer` · Automation · Senior (IC) · **RM10,000–RM16,000**/mo (indicative)

Designs the test automation framework, owns API+UI coverage and pipeline stability, and reviews others' automation.

- **Required:** Framework architecture, API+UI automation, CI/CD pipelines, Code review
- **Preferred:** Performance testing, Cloud test grids, Contract testing
- **Also seen as:** Senior Automation Tester, Senior Automation Test Analyst, Senior Test Analyst - Automation

### Automation Architect

`automation-architect` · Automation · Lead / Principal · **RM15,000–RM24,000**/mo (indicative)

Owns automation tooling strategy across teams and scales reliable CI/CD test infrastructure org-wide.

- **Required:** Test architecture, Tooling strategy, Cross-team enablement, CI/CD at scale
- **Preferred:** Cloud infra, Observability, Shift-left practices
- **Also seen as:** Automation Test Lead, Test Automation Specialist

### Software Development Engineer in Test (SDET)

`sdet` · SDET / Engineer-in-Test · Mid (IC) · **RM8,000–RM14,000**/mo (indicative)

A software engineer who builds test tooling, harnesses and frameworks as production-grade code.

- **Required:** Strong coding (Java/JS/Python/Go), Test frameworks, CI/CD, Data structures
- **Preferred:** Microservices testing, Kubernetes, Load testing
- **Also seen as:** Software Engineer in Test, SDET, Software Engineer – Test Automation

### Lead SDET

`lead-sdet` · SDET / Engineer-in-Test · Lead / Principal · **RM14,000–RM22,000**/mo (indicative)

Leads test engineering architecture and technical direction for quality tooling across systems.

- **Required:** Test architecture, Technical leadership, System design, CI/CD at scale
- **Preferred:** Platform engineering, SRE/observability, Chaos testing
- **Also seen as:** Lead SDiT, Lead Software Developer in Test, Principal SDET

### Performance Test Engineer

`performance-tester` · Specialist (API / Perf / ETL / Security / Data) · Mid (IC) · **RM7,000–RM13,000**/mo (indicative)

Models load, runs performance tests, and profiles systems to find and quantify bottlenecks.

- **Required:** JMeter/Gatling/k6, Load modelling, Profiling, Metrics analysis
- **Preferred:** APM tools, Cloud load infra, SQL tuning
- **Also seen as:** Performance Tester

### API Automation Tester

`api-automation-tester` · Specialist (API / Perf / ETL / Security / Data) · Mid (IC) · **RM6,000–RM11,000**/mo (indicative)

Automates REST/GraphQL and integration testing, validating contracts and schemas across services.

- **Required:** REST/GraphQL testing, Postman/REST-assured, Automation, JSON/schema
- **Preferred:** Contract testing (Pact), CI/CD, Mock servers
- **Also seen as:** API Tester, Integration Tester, Integration QA Engineer, System Integration Test Analyst

### ETL / Data Test Engineer

`etl-tester` · Specialist (API / Perf / ETL / Security / Data) · Mid (IC) · **RM6,500–RM12,000**/mo (indicative)

Validates data pipelines end to end, reconciling source-to-target and asserting data warehouse integrity.

- **Required:** SQL (advanced), ETL validation, Data reconciliation, Data warehousing
- **Preferred:** Python, Airflow, BI tools
- **Also seen as:** ETL Tester, ETL Test Analyst, Senior Database Tester, ETL Test Lead

### Security QA Engineer

`security-qa` · Specialist (API / Perf / ETL / Security / Data) · Senior (IC) · **RM9,000–RM16,000**/mo (indicative)

Tests for security weaknesses against OWASP risks and threat models, feeding findings back to engineering.

- **Required:** Security testing, OWASP Top 10, Pen-test basics, Threat modelling
- **Preferred:** Burp/ZAP, SAST/DAST, Compliance (ISO 27001)
- **Also seen as:** Security Quality Assurance Engineer

### Hardware Test Engineer

`hardware-test-engineer` · Hardware / Systems · Mid (IC) · **RM6,000–RM11,000**/mo (indicative)

Validates hardware and systems with lab instrumentation and test fixtures, driving defects to root cause.

- **Required:** Hardware test methods, Lab instrumentation, Test fixtures, Root-cause
- **Preferred:** Embedded systems, Scripting (Python), Compliance testing
- **Also seen as:** Test Engineer, Validation and Verification Engineer, Senior Systems Test Engineer, Principal Systems Test Engineer, Test Engineer III

### Quality Engineer (Agile)

`quality-engineer-agile` · Agile / UAT / UX · Mid (IC) · **RM6,000–RM11,000**/mo (indicative)

Embeds in an agile team to own whole-team quality, blending exploratory testing with lightweight automation.

- **Required:** Agile/Scrum, Whole-team quality, Exploratory testing, Automation basics
- **Preferred:** BDD, CI/CD, Quality coaching
- **Also seen as:** Agile QA, Agile Test Analyst, Quality Advocate, Quality Engineer, Digital Test Analyst, Functional Quality Engineer

### UAT Lead

`uat-lead` · Agile / UAT / UX · Lead / Principal · **RM9,000–RM15,000**/mo (indicative)

Coordinates user acceptance testing with business stakeholders and owns release sign-off and defect triage.

- **Required:** UAT coordination, Business stakeholder mgmt, Test sign-off, Defect triage
- **Preferred:** Business analysis, ERP/CRM domains, Change management
- **Also seen as:** UAT Test Lead, User Experience Tester

### Test Lead

`test-lead` · Leadership · Lead / Principal · **RM10,000–RM16,000**/mo (indicative)

Plans and coordinates testing for a project or team, managing risk, reporting and delivery to schedule.

- **Required:** Test planning, Team coordination, Reporting, Risk management
- **Preferred:** Automation oversight, Vendor coordination, Budget input
- **Also seen as:** QA Test Lead, Project Test Lead, Lead QA, Technical Test Lead, Test Team Lead, Lead Test Engineer, Team Leader - Testing

### QA Manager

`qa-manager` · Leadership · Manager / Head · **RM14,000–RM22,000**/mo (indicative)

Manages a QA team and its strategy, hiring, delivery and stakeholder relationships.

- **Required:** Team management, QA strategy, Hiring, Stakeholder management
- **Preferred:** Budgeting, Vendor management, Metrics/KPIs
- **Also seen as:** Test Manager, QA Engineering Manager, ERP Test Manager, Program Test Manager, Portfolio Test Manager, Test Environment Manager

### Head of Quality

`head-of-qa` · Leadership · Manager / Head · **RM20,000–RM35,000**/mo (indicative)

Owns org-wide quality strategy and leads multiple teams, reporting quality posture to executives.

- **Required:** Org-level quality strategy, Multi-team leadership, Executive stakeholder mgmt
- **Preferred:** Quality transformation, Budget ownership, Vendor strategy
- **Also seen as:** Head of QA, Senior Software Quality Manager, Principal – Quality Engineering, Senior Engineering Lead Quality

## Reverse alias lookup

Every raw title from the source list → the canonical role it maps to.

| Raw title | Canonical role |
|---|---|
| Agile QA | Quality Engineer (Agile) |
| Agile Test Analyst | Quality Engineer (Agile) |
| API Tester | API Automation Tester |
| Automation Engineer | QA Automation Engineer |
| Automation Software Tester | QA Automation Engineer |
| Automation Test Analyst | QA Automation Engineer |
| Automation Test Lead | Automation Architect |
| Automation Tester | QA Automation Engineer |
| Digital Test Analyst | Quality Engineer (Agile) |
| ERP Test Manager | QA Manager |
| ETL Test Analyst | ETL / Data Test Engineer |
| ETL Test Lead | ETL / Data Test Engineer |
| ETL Tester | ETL / Data Test Engineer |
| Functional Quality Engineer | Quality Engineer (Agile) |
| Functional Test Analyst | QA Analyst |
| Functional Tester | QA Analyst |
| Graduate Software Tester | Junior QA Engineer |
| Head of QA | Head of Quality |
| Integration QA Engineer | API Automation Tester |
| Integration Tester | API Automation Tester |
| Junior QA | Junior QA Engineer |
| Lead QA | Test Lead |
| Lead SDiT | Lead SDET |
| Lead Software Developer in Test | Lead SDET |
| Lead Test Engineer | Test Lead |
| Manual Test Analyst | QA Analyst |
| Performance Tester | Performance Test Engineer |
| Portfolio Test Manager | QA Manager |
| Principal – Quality Engineering | Head of Quality |
| Principal SDET | Lead SDET |
| Principal Systems Test Engineer | Hardware Test Engineer |
| Program Test Manager | QA Manager |
| Project Test Lead | Test Lead |
| QA Automation Tester | QA Automation Engineer |
| QA Engineering Manager | QA Manager |
| QA Senior Test Analyst | Senior QA Engineer |
| QA Test Lead | Test Lead |
| QA Tester | Junior QA Engineer |
| Quality Advocate | Quality Engineer (Agile) |
| Quality Analyst | QA Analyst |
| Quality Assurance Analyst | QA Analyst |
| Quality Engineer | Quality Engineer (Agile) |
| SDET | Software Development Engineer in Test (SDET) |
| Security Quality Assurance Engineer | Security QA Engineer |
| Senior Automation Test Analyst | Senior Test Automation Engineer |
| Senior Automation Tester | Senior Test Automation Engineer |
| Senior Database Tester | ETL / Data Test Engineer |
| Senior Engineering Lead Quality | Head of Quality |
| Senior Manual Test Analyst | Senior QA Engineer |
| Senior QA | Senior QA Engineer |
| Senior QA Specialist | Senior QA Engineer |
| Senior Quality Assurance Analyst | Senior QA Engineer |
| Senior Software Quality Manager | Head of Quality |
| Senior Systems Test Engineer | Hardware Test Engineer |
| Senior Test Analyst | Senior QA Engineer |
| Senior Test Analyst - Automation | Senior Test Automation Engineer |
| Software Engineer – Test Automation | Software Development Engineer in Test (SDET) |
| Software Engineer in Test | Software Development Engineer in Test (SDET) |
| Software Test Analyst | QA Analyst |
| Software Tester | Junior QA Engineer |
| System Integration Test Analyst | API Automation Tester |
| Team Leader - Testing | Test Lead |
| Technical Test Lead | Test Lead |
| Test Analyst | QA Analyst |
| Test Automation Specialist | Automation Architect |
| Test Engineer | Hardware Test Engineer |
| Test Engineer III | Hardware Test Engineer |
| Test Environment Manager | QA Manager |
| Test Manager | QA Manager |
| Test Team Lead | Test Lead |
| Testing Analyst | QA Analyst |
| Testing Associate | Junior QA Engineer |
| UAT Test Lead | UAT Lead |
| User Experience Tester | UAT Lead |
| Validation and Verification Engineer | Hardware Test Engineer |

---

*Indicative monthly gross for the Malaysian / SEA mid-market, as of 2026-10; a rough calibration aid, not a benchmark. MYR.*

*Generated from `roles.json` by `generate.js`. Contributions: edit `roles.json` and re-run `node generate.js`.*

*See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full workflow (the generator validates `roles.json` on every run).*

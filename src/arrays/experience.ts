export interface Experience {
    company: string,
    role: string,
    period: string,
    location: string,
    tech: string[],
    highlights: string[]
}

export const experienceArray: Experience[] = [
    {
        company: "Salescode.ai",
        role: "Software Test Engineer",
        period: "Sep 2025 – Present",
        location: "",
        tech: [
            "Java",
            "Karate DSL",
            "Playwright",
            "Cucumber BDD",
            "Flutter",
            "REST API Automation",
            "Agile / Jira",
            "CI/CD"
        ],
        highlights: [
            "Designed and engineered a configurable, multi-project API test automation framework in Java + Karate DSL from scratch — abstracting environment configs, auth tokens, base URLs, and request schemas into a single properties-driven layer, enabling one codebase to drive automation across 7+ independent client projects with zero duplication; cut new-project onboarding time by ~65%.",
            "Built a Playwright UI automation framework using the Page Object Model and custom fixtures, extending coverage from API-level testing into cross-browser UI automation across multiple application workflows.",
            "Achieved end-to-end API contract validation across all backend microservices — auth flows, CRUD endpoints, pagination, error-handling edge cases, and data-integrity assertions — reaching 85%+ automated coverage of the critical API surface across 120+ Karate scenarios and reducing manual regression effort by ~40%.",
            "Triaged 200+ defects across 6 agile sprints with detailed root-cause analysis, collaborating with backend devs on reproduction scripts; reduced MTTR by ~30% and helped eliminate 3 P0 production incidents."
        ]
    },
    {
        company: "Infosys Springboard 5.0",
        role: "Backend Development Intern",
        period: "Oct – Dec 2024",
        location: "Remote",
        tech: [
            "Java Spring Boot",
            "MySQL",
            "Spring Security",
            "JWT",
            "RESTful APIs",
            "JPA / Hibernate",
            "MVC"
        ],
        highlights: [
            "Co-architected PayPro, a scalable payroll management system handling 500+ employee records; designed and implemented 12 secure REST endpoints (auth, payroll calculation, tax deduction, payslip generation) with sub-100ms p95 response time, applying Controller–Service–Repository layering with JPA ORM.",
            "Integrated Spring Security + JWT with role-based access control (Admin / HR / Employee) and wrote unit + integration tests achieving 95%+ code coverage using JUnit and Mockito."
        ]
    }
]

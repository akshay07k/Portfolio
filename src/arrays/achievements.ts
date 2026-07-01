export interface Education {
    institution: string;
    degree: string;
    duration: string;
    score: string;
}

export interface Achievement {
    icon: 'EmojiEvents' | 'Code' | 'WorkspacePremium';
    title: string;
    description: string;
}

export const education: Education = {
    institution: 'Chitkara University',
    degree: 'B.E. Computer Science',
    duration: '2022 – 2026',
    score: 'CGPA: 9.7 / 10',
};

export const achievementsArray: Achievement[] = [
    {
        icon: 'EmojiEvents',
        title: 'Flipkart GRiD 7.0 — National Semi-Finalist',
        description:
            "Ranked among the top teams nationally in India's most competitive engineering challenge (Software Development track).",
    },
    {
        icon: 'Code',
        title: '300+ DSA Problems Solved',
        description:
            'Across LeetCode and competitive platforms; strong in Arrays, Trees, Dynamic Programming, and Graphs.',
    },
    {
        icon: 'WorkspacePremium',
        title: 'Infosys Springboard 5.0 Certified',
        description:
            'Completed the Infosys Springboard backend development program.',
    },
];

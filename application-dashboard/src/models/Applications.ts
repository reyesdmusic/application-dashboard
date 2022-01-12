export interface Application {
    id: number;
    name: string;
    position: string; 
    applied: string;
    experience: number;
    availability: Availability;
    questions: Question[]
}

interface Availability {
    M: number; 
    T: number;
    W: number; 
    Th: number; 
    F: number; 
    S: number;
    Su: number; 
}

interface Question {
    text: string;
    answer: string;
}
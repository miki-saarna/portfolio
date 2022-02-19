import { Project } from './types';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';
const headers = new Headers();
headers.append('Content-type', 'application/json');

export const retrieveProjects = async (signal): Promise<Project[]> => {
    const url:any = new URL(`${API_BASE_URL}/projects`);
    const config = {
        method: 'GET',
        headers,
        // body,
        signal
    };
    const response = await fetch(url, config);
    return response.json();
}

export const sumbitContactForm = async (form, signal) => {
    const url:any = new URL(`${API_BASE_URL}/form`)
    const config = {
        method: 'POST',
        headers,
        body: JSON.stringify({ data: form }),
        signal
    }
    const response = await fetch(url, config);
    return response.json();
}
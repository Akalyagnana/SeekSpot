import axios from 'axios';

const BASE_url = "http://localhost:8080";

const api = axios.create({
    baseURL: BASE_url,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const getUsers = async () => {
    try {
        const response = await api.get('/users');
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export const addUser = async (user) => {
    try {
        const response = await api.post('/users', user);
        return response.data;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
}

export const updateUser = async (userId, updatedUserData) => {
    try {
        const response = await api.put(`/users/${userId}`, updatedUserData);
        return response.data;
    } catch (error) {
        console.error(`Error updating user with ID ${userId}:`, error);
        throw error;
    }
}

export const deleteUser = async (userId) => {
    try {
        const response = await api.delete(`/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting user with ID ${userId}:`, error);
        throw error;
    }
}

const API_URL = PROCESS.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const submitContact = async (formData) => {
    const response = await fetch(`${API_URl}/contact`,{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json',
        },
        body:JSON.stringify(formData)
    });

    if(!response.ok){
        throw new Error('Failed to submit contact form');
    }

    return response.json();
};
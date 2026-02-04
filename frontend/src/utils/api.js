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

export const trackAnalytics = async (eventType, eventData = {}) => {
    try{
        await fetch(`${API_URL}/analytics`,{
            method : 'POST',
            headers :{
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({eventType, eventData})
        });
    }catch(error){
        console.error('Analytics error:',error);
    }
};


export const trackProjectView = async (projectId, projectTitle) => {
    try{
        await fetch (`${API_URL}/projects/view`,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({projectId, projectTitle})
        });
    }
    catch(error){
        console.error('Project View Tracking error : ', error);
    }
};
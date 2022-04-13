import axios from 'axios'


export const loginHandler = async ({ e, email, password, saveUserInfo, setFormData, formInitialState, navigate }) => {
    e.preventDefault();
    try {
        const { data, status } = await axios.post('/api/auth/login', {
            email,
            password,
        });
        
        if(status === 200){
            saveUserInfo(data);
            setFormData(formInitialState);
            navigate('/videos');
        }
        if(status === 201){
            alert('wrong credentials');
        }
    } catch (error) {
        const { status } = error.response;
        if(status === 404){
            alert('user not found');
        }
    }
}
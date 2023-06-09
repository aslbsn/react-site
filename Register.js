import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './App.css';


function Registers() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passRepeat, setPassRepeat] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(password != passRepeat){
            setError("Sifreler eslesmiyor!");
            return;
        }

        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);

        setEmail('');
        setPassword('');
        setPassRepeat('');
        setSuccess('Kayit Olusturuldu. Giris yapabilirsiniz.');
        setError('');
    }

    return (
        <div id="girisbox"className="container bg-light text-dark rounded border border-warning" style={{height:"30em"}}>
        
            <h2 className="h2 mb-3 fw-normal">Kayıt</h2>
            <form onSubmit={handleSubmit}>
            <input id="girisbuton" type="email" 
                        placeholder="Mail adresiniz" 
                        value={email} 
                        onChange= {(e) => setEmail(e.target.value)}
                        required />
            <input id="girisbuton" type="password"
                        placeholder="Şifre"
                        value={password}
                        onChange= {(e) => setPassword(e.target.value)}
                        minLength = "6"
                        required />
            <input id="girisbuton" type="password"
                        placeholder="Şifre Tekrar"
                        value={passRepeat}
                        onChange= {(e) => setPassRepeat(e.target.value)}
                        minLength = "6"
                        required />
            <button id="girisbuton2" type="submit" className="w-50 btn btn-sm btn-secondary" >Kayıt Ol</button>
            </form>
            {error && <p style={{color: 'red'}}> {error} </p>}
            {success && <p style={{color: 'green'}}> {success} </p>}
            <p>
                Hesabınız var mı? <Link to="/giris">Giriş Yap</Link>
            </p>
        </div>
    );
}

export default Registers;
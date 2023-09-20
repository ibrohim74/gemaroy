import React, {useState} from 'react';
import '../assets/css/footer.css'
import { message  } from 'antd';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from "axios";


const Footer = () => {
    const [username, setUsername] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [tell, setTell] = useState('')
    const [messageApi, contextHolder] = message.useMessage();


    const checkForm = () => {
        setDisabled(true)
        setTimeout(()=>{setDisabled(false)},2000)
        if (username === '' || username.length === 0 || username.length <= 3 || username === '    ') {
            messageApi.open({
                type: 'error',
                content: 'Ismingizni xato yozdingiz',
            });
        } else if (tell.length === 0 || tell === '' || tell.length <11){
            messageApi.open({
                type: 'error',
                content: 'telefon raqamingiz xato',

            });
        }else {
            let msg = "<b>Buyurtma Qilindi</b> \n";
            msg +=`\n ismi: ${username}\n`
            msg +=`\n tell: +${tell}\n`

            const TOKEN = "6224412857:AAFeIq9iBUgbqqeHtF3zLSVKvjNKrrfBGBI";
            const CHAT_ID = "-1001915944009";
            console.log("click")
            try {
                axios.post("https://api.telegram.org/bot" + TOKEN + "/sendMessage", {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: msg
                }).then((res) => {
                        messageApi.open({
                            type: 'success',
                            content: 'Buyurtmangiz qabul qilindi',
                        });
                        setTimeout(()=>{
                            window.location.assign('/success')
                        },1800)

                    }
                )
            } catch (e) {
                if (e) {
                    messageApi.open({
                        type: 'error',
                        content: 'tizimda xatolik',
                    });
                }
            }
        }
    }
    return (
        <div className={'footer'} id={'footer'}>
            {contextHolder}

            <div className="footer-left">
                <svg width="588" height="214" viewBox="0 0 588 214" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H588C588 111.298 486.884 194.931 376.012 185.215C334.233 181.554 292.055 179.405 255.5 180.5C154.912 183.514 0 214 0 214V0Z" fill="#21AF83"/>
                </svg>

            </div>
            <div className="footer-right">
                <svg width="400" height="214" viewBox="0 0 400 214" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M588 214C588 214 436.472 191.291 336 188.5C298.881 187.469 255.659 189.092 212.818 191.942C100.072 199.443 8.83011e-06 112.995 1.87085e-05 -5.14046e-05L588 0L588 214Z" fill="#21AF83"/>
                </svg>

            </div>

            <div className="footer-box">
                <h1 className={'wow animate__animated animate__fadeInUp'}>
                    Xoziroq sotib oling
                </h1>
                <div className="form">
                    <div className="input-item ">
                        <p>Ismingiz</p>
                        <input type="text" placeholder={'Ismingizni kiriting'}
                               onChange={(e) => setUsername(e.target.value)} required
                        />
                    </div>
                    <div className="input-item ">
                        <p>Telefon raqamingizni kiriting</p>
                        <PhoneInput
                            style={{height:'50px !important'}}
                            country={'uz'}
                            placeholder={"+998 99 123 45 67"}
                            onChange={(phone) => setTell( phone)}
                            required
                        />
                    </div>
                    <div className="input-item">
                        <button onClick={checkForm} disabled={disabled}>Ro’yxatdan o’tish</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;
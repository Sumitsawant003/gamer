import React from 'react'
import logo from '../assets/web logo Resize.png'

export default function Massages() {


    const massageexpand = () => {
        document.getElementById('massagebox').classList.toggle('massageboxexpand');
        document.getElementById('closemassage').classList.toggle('dis_none');
        document.getElementById('expandmassage').classList.toggle('dis_none');
    }
    return (
        <>

            <div id='massagebox' className='massagebox massageboxexpand'>


                <div className='topmassagebox'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ display: 'flex' }}><img className='logomassage' width={50} src={logo} alt="" /></div>
                        Massaging
                    </div>
                    <div id='expandmassage' className='cursordis'>
                        <span onClick={massageexpand} class="material-symbols-outlined expand_mag">expand_less</span>
                    </div>
                    <div id='closemassage' className='dis_none cursordis'>
                        <span onClick={massageexpand} class="material-symbols-outlined expand_mag">close</span>
                    </div>
                </div>

                <div style={{ paddingTop: '6px' }} className='inner_chat'>
                    <div className='person_chat'>
                        <div className='person_chat_logo'>
                        </div>
                        <div className='person_chat_name'>
                            <div>Name</div>
                            <div style={{ fontSize: '10px' }}>last Msg</div>
                        </div>
                        <div>
                            date
                        </div>
                    </div>
                </div>

                <div className='inner_chat'>
                    <div className='person_chat'>
                        <div className='person_chat_logo'>
                        </div>
                        <div className='person_chat_name'>
                            <div>Name</div>
                            <div style={{ fontSize: '10px' }}>last Msg</div>
                        </div>
                        <div>
                            date
                        </div>
                    </div>
                </div>

                <div className='inner_chat'>
                    <div className='person_chat'>
                        <div className='person_chat_logo'>
                        </div>
                        <div className='person_chat_name'>
                            <div>Name</div>
                            <div style={{ fontSize: '10px' }}>last Msg</div>
                        </div>
                        <div>
                            date
                        </div>
                    </div>
                </div>
                <div className='inner_chat'>
                    <div className='person_chat'>
                        <div className='person_chat_logo'>
                        </div>
                        <div className='person_chat_name'>
                            <div>Name</div>
                            <div style={{ fontSize: '10px' }}>last Msg</div>
                        </div>
                        <div>
                            date
                        </div>
                    </div>
                </div>
                <div className='inner_chat'>
                    <div className='person_chat'>
                        <div className='person_chat_logo'>
                        </div>
                        <div className='person_chat_name'>
                            <div>Name</div>
                            <div style={{ fontSize: '10px' }}>last Msg</div>
                        </div>
                        <div>
                            date
                        </div>
                    </div>
                </div>
                <div className='inner_chat'>
                    <div className='person_chat'>
                        <div className='person_chat_logo'>
                        </div>
                        <div className='person_chat_name'>
                            <div>Name</div>
                            <div style={{ fontSize: '10px' }}>last Msg</div>
                        </div>
                        <div>
                            date
                        </div>
                    </div>
                </div>




            </div>


        </>
    )
}

import './Page2.css';

function Page2() {
    return (
      <div className="page2">
        <div className='top2'>
        <div className='col1'>
            <img is="imgpage2" alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"/>
        </div>
        <div className='col2'>
          <div className='text2'>
        <h1>Download your shows to watch offline</h1>
        <h2>Save your favourites easily and always have something to watch.</h2>
          </div>
        </div>
        </div>
      <div className='bottom2'>
      </div>

      <div className='questions'>
        <p className='j'>Frequently Asked Questions</p>
        <div className='q1'>
<p className='q11'>what is netflix</p>
        </div>
        <div className='q2'>
          <p className='q22'>how much does the netflix cost</p>
        </div>

        <div className='b'>
        <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
        <span><input id="ip" type='text' placeholder='Email address'></input><button id="btn">Get Started</button></span>
      </div>
      </div>

      

      </div>
    );
  }
  
  export default Page2;